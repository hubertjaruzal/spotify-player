import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  playerPause,
  playerPlay,
} from "../../../../redux/actions/player";

import {
  playerStateModel,
  playerPause as playerPauseFunction,
  playerPlay as playerPlayFunction,
} from "../../../../models/redux/player";

import styles from "./styles.module.scss";


interface Props {
  player: playerStateModel;
  playerPause: playerPauseFunction;
  playerPlay: playerPlayFunction;
};

const BottomBar = (props: Props) => {
  const audioElement = useRef(null) as any;

  useEffect(() => {
    if (audioElement && audioElement.current) {
      audioElement.current.pause();
      audioElement.current.load();
      audioElement.current.play();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.player.preview_url]);

  return (
    <div className={styles.container}>
      {!!props.player.item.album.images.length &&
        <div className={styles.album}>
          <img src={props.player.item.album.images[0].url} alt=""/>
        </div>
      }
      {props.player.is_playing &&
        <button
          type="button"
          onClick={() => props.playerPause()}
        >
          <FontAwesomeIcon icon={["far", "pause-circle"]}/>
        </button>
      }
      {(!props.player.is_playing && props.player.item.uri) &&
        <button
          type="button"
          onClick={() => props.playerPlay({ context_uri: props.player.item.uri, position_ms: props.player.progress_ms })}
        >
          <FontAwesomeIcon icon={["far", "play-circle"]}/>
        </button>
      }
      {props.player.preview_url &&
        <audio controls ref={audioElement}>
          <source src={props.player.preview_url} type="audio/mpeg"/>
          Your browser does not support the audio element.
        </audio>
      }
    </div>
  );
};

const mapStateToProps = (state: {
  player: playerStateModel,
}) => ({
  player: state.player,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    playerPause,
    playerPlay,
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BottomBar);
