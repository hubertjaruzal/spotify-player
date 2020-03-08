import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import queryString from "query-string";
import propOr from "ramda/src/propOr";

import { ReactComponent as LogoIcon } from "../../../assets/images/logo.svg";

import { authorize } from "../../../redux/actions/authorization";

// Types
import { History, Location } from "history";
import { doesAccessTokenExist } from "../../../services/common";
import {
  authorizationStateModel,
  authorize as authorizeFunction,
} from "../../../models/redux/authorization";

import styles from "./styles.module.scss";


interface Props {
  location: Location;
  history: History;
  authorization: authorizationStateModel;
  authorize: authorizeFunction;
};

const Authorize = (props: Props) => {
  useEffect(() => {
    redirectToAppIfTokenExist();

    const parsed = queryString.parse(props.location.search);
    const code = propOr("", "code", parsed);

    if (typeof code === "string" && !!code.length) {
      props.authorize({ code });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    redirectToAppIfTokenExist();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.authorization]);

  const redirectToAppIfTokenExist = () => {
    if (doesAccessTokenExist(props.authorization.access_token)) {
      props.history.push("/");
    }
  };

  const getScopes = () => encodeURIComponent("streaming user-read-private user-read-email user-modify-playback-state user-read-playback-state");

  return (
    <div className={styles.container}>
      <LogoIcon/>
      <a
        href={`https://accounts.spotify.com/en/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&scope=${getScopes()}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`}
      >
        Sign In
      </a>
    </div>
  );
};

const mapStateToProps = (state: {
  authorization: authorizationStateModel,
}) => ({
  authorization: state.authorization,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    authorize,
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Authorize);
