import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import pathOr from "ramda/src/pathOr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ReactComponent as ProfileIcon } from "../../../../assets/images/profile.svg";

import {
  playerPlay,
  playerPlayPreview,
} from "../../../../redux/actions/player";

// Types
import {
  playerStateModel,
  playerPlay as playerPlayFunction,
  playerPlayPreview as playerPlayPreviewFunction,
} from "../../../../models/redux/player";
import { userStateModel } from "../../../../models/redux/user";

import styles from "./styles.module.scss";


interface Props {
  title: string;
  list: any[];
  imagesPath: string[];
  playerPlay: playerPlayFunction;
  playerPlayPreview: playerPlayPreviewFunction;
  player: any;
  user: userStateModel;
};

const SearchRow = (props: Props) => {
  return (
    <>
      {!!props.list.length &&
        <>
          <h2 className={styles.header}>{props.title}</h2>
          <ul className={styles.list}>
            {props.list.map((item: any) => (
              <div
                key={item.id}
                className={styles.box}
              >
                {!!pathOr([], props.imagesPath, item).length ?
                  <img src={pathOr("", [...props.imagesPath, "0", "url"], item)} alt=""/> :
                  <li><ProfileIcon/></li>
                }
                {props.user.product === "premium" &&
                  <div className={styles.boxOverlay}>
                    <button
                      type="button"
                      onClick={() => props.playerPlay({
                        context_uri: item.uri,
                      })}
                    >
                      <FontAwesomeIcon icon="play-circle"/>
                    </button>
                  </div>
                }
                {(props.user.product !== "premium" && item.preview_url) &&
                  <div className={styles.boxOverlay}>
                    <button
                      type="button"
                      onClick={() => props.playerPlayPreview({
                        preview_url: item.preview_url,
                      })}
                    >
                      <FontAwesomeIcon icon="play-circle"/>
                    </button>
                  </div>
                }
              </div>
            ))}
          </ul>
        </>
      }
    </>
  );
};

const mapStateToProps = (state: {
  player: playerStateModel,
  user: userStateModel,
}) => ({
  player: state.player,
  user: state.user,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    playerPlay,
    playerPlayPreview,
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchRow);
