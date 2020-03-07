import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { search } from "../../../../../redux/actions/app";

// Types
import { History, Location } from "history";
import {
  appStateModel,
  search as searchFunction,
} from "../../../../../models/redux/app";

import styles from "./styles.module.scss";


interface Props {
  location: Location;
  history: History;
  search: searchFunction;
};

const TopBarSearch = (props: Props) => {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.container}>
      <input
        value={search}
        placeholder="Search for Artists, Songs, or Podcasts"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          props.search({ query: e.target.value });
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};

const mapStateToProps = (state: {
  app: appStateModel,
}) => ({
  app: state.app,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    search,
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopBarSearch);
