import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TopBar from "./Common/TopBar";
import SideBar from "./Common/SideBar";
import BottomBar from "./Common/BottomBar";
import Search from "./Search";

import { doesAccessTokenExist } from "../../services/common";
import { removeTokenFromLocalStorage } from "../../services/api";

import {
  refreshAccessToken,
  resetAccessToken,
} from "../../redux/actions/authorization";
import { resetGlobalError } from "../../redux/actions/app";
import { getUser } from "../../redux/actions/user";

// Types
import { History, Location } from "history";
import {
  authorizationStateModel,
  refreshAccessToken as refreshAccessTokenFunction,
  resetAccessToken as resetAccessTokenFunction,
} from "../../models/redux/authorization";
import {
  appStateModel,
  resetGlobalError as resetGlobalErrorFunction,
} from "../../models/redux/app";
import { getUser as getUserFunction } from "../../models/redux/user";

import styles from "./styles.module.scss";


interface Props {
  location: Location;
  history: History;
  authorization: authorizationStateModel;
  app: appStateModel;
  refreshAccessToken: refreshAccessTokenFunction;
  resetGlobalError: resetGlobalErrorFunction;
  resetAccessToken: resetAccessTokenFunction;
  getUser: getUserFunction;
};

const App = (props: Props) => {
  useEffect(() => {
    if (!doesAccessTokenExist(props.authorization.access_token)) {
      props.history.replace("/authorize");
    } else {
      props.getUser();
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

  useEffect(() => {
    if (props.app.global.error.status === 401) {
      props.resetGlobalError();
      props.resetAccessToken();
      removeTokenFromLocalStorage("access_token");
      props.history.replace("/authorize");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.app.global.error]);

  return (
    <section className={styles.container}>
      <SideBar/>
      <section className={styles.content}>
        <TopBar
          location={props.location}
          history={props.history}
        />
        <Search
          location={props.location}
          history={props.history}
          app={props.app}
        />
        {props.app.global.isLoading &&
          <div className={styles.loader}>
            <FontAwesomeIcon className="fa-spin" icon="circle-notch"/>
          </div>
        }
      </section>
      <BottomBar/>
    </section>
  );
};

const mapStateToProps = (state: {
  authorization: authorizationStateModel,
  app: appStateModel,
}) => ({
  authorization: state.authorization,
  app: state.app,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    refreshAccessToken,
    resetGlobalError,
    resetAccessToken,
    getUser,
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
