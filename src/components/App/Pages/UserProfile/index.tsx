import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Types
import { History, Location } from "history";
import { userStateModel } from "../../../../models/redux/user";

import styles from "../styles.module.scss";
import stylesUserProfile from "./styles.module.scss";


interface Props {
  location: Location;
  history: History;
  user: userStateModel;
};

const UserProfile = (props: Props) => {
  return (
    <section className={styles.container}>
      <div className={stylesUserProfile.content}>
        <FontAwesomeIcon icon="user"/>
        <span>Username: {props.user.display_name}</span>
        <span>Account: {props.user.product === "premium" ? "Premium" : "Free"}</span>
      </div>
    </section>
  );
};

const mapStateToProps = (state: {
  user: userStateModel,
}) => ({
  user: state.user,
});

export default connect(
  mapStateToProps,
  null,
)(UserProfile);
