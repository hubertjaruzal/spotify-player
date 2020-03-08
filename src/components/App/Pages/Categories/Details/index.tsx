import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import pathOr from "ramda/src/pathOr";

import { browseGetCategoryPlaylists } from "../../../../../redux/actions/browse";

import CategoriesDetailsRow from "./Row";

// Types
import { History, Location } from "history";
import {
  browseStateModel,
  browseGetCategoryPlaylists as browseGetCategoryPlaylistsFunction,
} from "../../../../../models/redux/browse";

import styles from "../../styles.module.scss";


interface Props {
  history: History;
  location: Location;
  match: any;
  browse: browseStateModel;
  browseGetCategoryPlaylists: browseGetCategoryPlaylistsFunction;
}

const CategoriesDetails = (props: Props) => {
  useEffect(() => {
    props.browseGetCategoryPlaylists({ category_id: props.match.params.id });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles.container}>
      <CategoriesDetailsRow
        title={`Category: ${props.match.params.id}`}
        list={pathOr([], ["browse", "category_details", "playlists", "items"], props)}
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
    browseGetCategoryPlaylists,
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoriesDetails);
