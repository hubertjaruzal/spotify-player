import React from "react";
import pathOr from "ramda/src/pathOr";

import NewReleasesRow from "./Row";

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

const NewReleases = (props: Props) => {
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

export default NewReleases;
