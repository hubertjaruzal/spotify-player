import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import pathOr from "ramda/src/pathOr";

import CategoriesRow from "./Row";

import {
  browseGetCategories,
} from "../../../../redux/actions/browse";

// Types
import { History, Location } from "history";
import {
  browseStateModel,
  browseGetCategories as browseGetCategoriesFunction,
} from "../../../../models/redux/browse";

import styles from "../styles.module.scss";


interface Props {
  location: Location;
  history: History;
  browse: browseStateModel;
  browseGetCategories: browseGetCategoriesFunction;
};

const Categories = (props: Props) => {
  useEffect(() => {
    props.browseGetCategories();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles.container}>
      <CategoriesRow
        title="Categories"
        list={pathOr([], ["browse", "categories", "items"], props)}
        imagesPath={["icons"]}
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
    browseGetCategories,
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);
