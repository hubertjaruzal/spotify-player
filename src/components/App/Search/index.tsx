import React from "react";
import { connect } from "react-redux";
import pathOr from "ramda/src/pathOr";

import SearchRow from "./Row";

// Types
import { History, Location } from "history";
import {
  appStateModel,
} from "../../../models/redux/app";
import { playerStateModel } from "../../../models/redux/player";
import { userStateModel } from "../../../models/redux/user";

import styles from "./styles.module.scss";


interface Props {
  location: Location;
  history: History;
  app: appStateModel;
  player: playerStateModel,
  user: userStateModel,
};

const Search = (props: Props) => {
  return (
    <section className={styles.container}>
      <SearchRow
        title="Albums"
        list={pathOr([], ["app", "search", "albums", "items"], props)}
        imagesPath={["images"]}
        player={props.player}
        user={props.user}
      />
      <SearchRow
        title="Artists"
        list={pathOr([], ["app", "search", "artists", "items"], props)}
        imagesPath={["images"]}
        player={props.player}
        user={props.user}
      />
      <SearchRow
        title="Tracks"
        list={pathOr([], ["app", "search", "tracks", "items"], props)}
        imagesPath={["album", "images"]}
        player={props.player}
        user={props.user}
      />
    </section>
  );
};

const mapStateToProps = (state: {
  app: appStateModel,
  player: playerStateModel,
  user: userStateModel,
}) => ({
  app: state.app,
  player: state.player,
  user: state.user,
});

export default connect(
  mapStateToProps,
  null,
)(Search);
