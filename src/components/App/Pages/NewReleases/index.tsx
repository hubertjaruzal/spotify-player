import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import pathOr from "ramda/src/pathOr";

import NewReleasesRow from "./Row";

import {
  browseGetNewReleases,
} from "../../../../redux/actions/browse";

// Types
import { History, Location } from "history";
import {
  browseStateModel,
  browseGetNewReleases as browseGetNewReleasesFunction,
} from "../../../../models/redux/browse";

import styles from "../styles.module.scss";


interface Props {
  location: Location;
  history: History;
  browse: browseStateModel;
  browseGetNewReleases: browseGetNewReleasesFunction
};

const NewReleases = (props: Props) => {
  useEffect(() => {
    props.browseGetNewReleases();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles.container}>
      <NewReleasesRow
        title="Albums"
        list={pathOr([], ["browse", "new_releases", "albums", "items"], props)}
        imagesPath={["images"]}
      />
    </section>
  );
};

const mapStateToProps = (state: {
  browse: browseStateModel,
}) => ({
  browse: state.browse,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    browseGetNewReleases,
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewReleases);
