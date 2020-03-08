import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import isEmpty from "ramda/src/isEmpty";

import { ReactComponent as LogoIcon } from "../../../../assets/images/logo.svg";

import {
  browseGetCategories,
  browseGetNewReleases,
} from "../../../../redux/actions/browse";

// Types
import {
  browseStateModel,
  browseGetCategories as browseGetCategoriesFunction,
  browseGetNewReleases as browseGetNewReleasesFunction,
} from "../../../../models/redux/browse";

import styles from "./styles.module.scss";


interface Props {
  browse: browseStateModel;
  browseGetCategories: browseGetCategoriesFunction;
  browseGetNewReleases: browseGetNewReleasesFunction;
};

const SideBar = (props: Props) => {
  const isActive = (value: boolean) => classNames({
    [styles.active]: value,
  });

  return (
    <nav className={styles.container}>
      <LogoIcon/>
      <ul>
        <li>
          <button
            type="button"
            onClick={props.browseGetCategories}
            className={isActive(!isEmpty(props.browse.categories))}
          >
            <FontAwesomeIcon icon="th-large"/>
            <span>Categories</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={props.browseGetNewReleases}
            className={isActive(!isEmpty(props.browse.new_releases))}
          >
            <FontAwesomeIcon icon="music"/>
            <span>New Releases</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state: {
  browse: browseStateModel,
}) => ({
  browse: state.browse,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    browseGetCategories,
    browseGetNewReleases,
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideBar);
