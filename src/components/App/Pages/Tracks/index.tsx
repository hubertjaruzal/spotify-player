import React, { useEffect } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import pathOr from "ramda/src/pathOr";

import { getTracks } from "../../../../redux/actions/tracks";

import PlayButton from "../../Common/PlayButton";

// Types
import { History, Location } from "history";
import {
  appStateModel,
} from "../../../../models/redux/app";
import {
  tracksStateModel,
  getTracks as getTracksFunction,
} from "../../../../models/redux/tracks";
import { userStateModel } from "../../../../models/redux/user";
import { trackFullObject } from "../../../../models/redux";

import styles from "./styles.module.scss";


interface Props {
  location: Location;
  history: History;
  match: any;
  app: appStateModel;
  tracks: any;
  getTracks: getTracksFunction;
  user: userStateModel;
};

const Tracks = (props: Props) => {
  useEffect(() => {
    props.getTracks({
      id: props.match.params.id,
      type: props.match.params.type,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className={styles.container}>
      <ul>
        {props.tracks.items.map((item: trackFullObject) => (
          <li key={item.id}>
            <PlayButton
              item={item}
              isProductPremium={props.user.product === "premium"}
            />
            <span className={styles.trackName}>{item.name}</span>

            <span className={styles.artists}>
              ({pathOr([], ["artists"], item).map((item: any) => item.name).join(", ")})
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = (state: {
  app: appStateModel,
  tracks: tracksStateModel,
  user: userStateModel,
}) => ({
  app: state.app,
  tracks: state.tracks,
  user: state.user,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    getTracks,
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tracks);
