import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import TopBar from "./Common/TopBar";
import SideBar from "./Common/SideBar";
import BottomBar from "./Common/BottomBar";

import { doesAccessTokenExist } from "../../services/common";

import { refreshAccessToken } from "../../redux/actions/authorization";

// Types
import { History, Location } from "history";
import {
  authorizationStateModel,
  refreshAccessToken as refreshAccessTokenFunction,
} from "../../models/redux/authorization";

import styles from "./styles.module.scss";


interface Props {
  location: Location;
  history: History;
  authorization: authorizationStateModel;
  refreshAccessToken: refreshAccessTokenFunction;
};

const App = (props: Props) => {
  useEffect(() => {
    if (!doesAccessTokenExist(props.authorization.access_token)) {
      props.history.replace("/authorize");
    } else {
      props.refreshAccessToken();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!doesAccessTokenExist(props.authorization.access_token)) {
      props.history.replace("/authorize");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.authorization.access_token]);

  return (
    <section className={styles.container}>
      <SideBar/>
      <section className={styles.content}>
        <TopBar/>
      </section>
      <BottomBar/>
    </section>
  );
};

const mapStateToProps = (state: {
  authorization: authorizationStateModel,
}) => ({
  authorization: state.authorization,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    refreshAccessToken,
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
