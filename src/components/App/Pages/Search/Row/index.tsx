import React from "react";
import pathOr from "ramda/src/pathOr";

import { ReactComponent as ProfileIcon } from "../../../../../assets/images/profile.svg";

import PlayButton from "../../../Common/PlayButton";

// Types
import {
  playerStateModel,
} from "../../../../../models/redux/player";
import { userStateModel } from "../../../../../models/redux/user";

import styles from "./styles.module.scss";
import rowStyles from "../../../../../styles/Row/styles.module.scss";


interface Props {
  title: string;
  list: any[];
  imagesPath: string[];
  player: playerStateModel;
  user: userStateModel;
};

const SearchRow = (props: Props) => {
  return (
    <>
      {!!props.list.length &&
        <>
          <h2 className={rowStyles.header}>{props.title}</h2>
          <ul className={rowStyles.list}>
            {props.list.map((item: any) => (
              <div
                key={`search_${item.id}`}
                className={styles.box}
              >
                {!!pathOr([], props.imagesPath, item).length ?
                  <img src={pathOr("", [...props.imagesPath, "0", "url"], item)} alt=""/> :
                  <li><ProfileIcon/></li>
                }
                <div className={styles.boxOverlay}>
                  <PlayButton
                    item={item}
                    isProductPremium={props.user.product === "premium"}
                  />
                </div>
              </div>
            ))}
          </ul>
        </>
      }
    </>
  );
};

export default SearchRow;
