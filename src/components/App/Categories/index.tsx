import React from "react";
import pathOr from "ramda/src/pathOr";

import CategoriesRow from "./Row";

// Types
import { History, Location } from "history";
import {
  browseStateModel,
} from "../../../models/redux/browse";

import styles from "./styles.module.scss";


interface Props {
  location: Location;
  history: History;
  browse: browseStateModel;
};

const Categories = (props: Props) => {
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

export default Categories;
