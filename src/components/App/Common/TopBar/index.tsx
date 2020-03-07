import React from "react";

import TopBarSearch from "./Search";

// Types
import { History, Location } from "history";

import styles from "./styles.module.scss";


interface Props {
  location: Location;
  history: History;
};

const TopBar = (props: Props) => {
  return (
    <div className={styles.container}>
      <TopBarSearch
        location={props.location}
        history={props.history}
      />
    </div>
  );
};

export default TopBar;
