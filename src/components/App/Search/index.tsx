import React from "react";
import pathOr from "ramda/src/pathOr";

import SearchRow from "./Row";

// Types
import { History, Location } from "history";
import {
  appStateModel,
} from "../../../models/redux/app";

import styles from "./styles.module.scss";


interface Props {
  location: Location;
  history: History;
  app: appStateModel;
};

const Search = (props: Props) => {
  return (
    <section className={styles.container}>
      <SearchRow
        title="Albums"
        list={pathOr([], ["app", "search", "albums", "items"], props)}
        imagesPath={["images"]}
      />
      <SearchRow
        title="Artists"
        list={pathOr([], ["app", "search", "artists", "items"], props)}
        imagesPath={["images"]}
      />
      <SearchRow
        title="Tracks"
        list={pathOr([], ["app", "search", "tracks", "items"], props)}
        imagesPath={["album", "images"]}
      />
    </section>
  );
};

export default Search;
