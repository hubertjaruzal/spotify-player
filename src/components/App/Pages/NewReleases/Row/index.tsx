import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import pathOr from "ramda/src/pathOr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { ReactComponent as ProfileIcon } from "../../../../../assets/images/profile.svg";

import {
  playerPlay,
  playerPlayPreview,
} from "../../../../../redux/actions/player";

// Types
import {
  playerStateModel,
  playerPlay as playerPlayFunction,
  playerPlayPreview as playerPlayPreviewFunction,
} from "../../../../../models/redux/player";
import { userStateModel } from "../../../../../models/redux/user";
import { newReleasesItemObject } from "../../../../../models/redux";

import styles from "../../../../../styles/Row/styles.module.scss";


interface Props {
  title: string;
  list: newReleasesItemObject[];
  imagesPath: string[];
  playerPlay: playerPlayFunction;
  playerPlayPreview: playerPlayPreviewFunction;
  player: playerStateModel;
  user: userStateModel;
};

const NewReleasesRow = (props: Props) => {
  return (
    <>
      {!!props.list.length &&
        <>
          <h2 className={styles.header}>{props.title}</h2>
          <ul className={styles.list}>
            {props.list.map((item: any) => (
              <div
                key={`new_releases_${item.id}`}
                className={styles.box}
              >
                {!!pathOr([], props.imagesPath, item).length ?
                  <img
                    src={pathOr("", [...props.imagesPath, "0", "url"], item)}
                    alt=""
                  /> :
                  <li><ProfileIcon/></li>
                }
                <div className={styles.boxOverlay}>
                  <Link to={`/tracks/${item.type}s/${item.id}`}>
                    <FontAwesomeIcon icon={["far", "eye"]}/>
                  </Link>
                </div>
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
)(NewReleasesRow);
