import React, { useEffect } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getTracks } from "../../../redux/actions/tracks";
import { playerPlay, playerPlayPreview } from "../../../redux/actions/player";

// Types
import { History, Location } from "history";
import {
  appStateModel,
} from "../../../models/redux/app";
import {
  tracksStateModel,
  getTracks as getTracksFunction,
} from "../../../models/redux/tracks";
import { userStateModel } from "../../../models/redux/user";
import {
  playerPlay as playerPlayFunction,
  playerPlayPreview as playerPlayPreviewFunction,
} from "../../../models/redux/player";

import styles from "./styles.module.scss";


interface Props {
  location: Location;
  history: History;
  match: any;
  app: appStateModel;
  tracks: any;
  getTracks: getTracksFunction;
  user: userStateModel;
  playerPlay: playerPlayFunction;
  playerPlayPreview: playerPlayPreviewFunction;
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
        {props.tracks.items.map((item: any) => (
          <li>
            {props.user.product === "premium" &&
              <button
                type="button"
                onClick={() => props.playerPlay({
                  context_uri: item.uri,
                })}
              >
                <FontAwesomeIcon icon="play-circle"/>
              </button>
            }
            {(props.user.product !== "premium" && item.preview_url) &&
              <button
                type="button"
                onClick={() => props.playerPlayPreview({
                  preview_url: item.preview_url,
                })}
              >
                <FontAwesomeIcon icon="play-circle"/>
              </button>
            }
            <span className={styles.trackName}>{item.name}</span>
            <span className={styles.artists}>
              ({item.artists.map((item: any) => item.name).join(", ")})
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
    playerPlay,
    playerPlayPreview,
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tracks);
