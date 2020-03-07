import React from "react";
import pathOr from "ramda/src/pathOr";

import { ReactComponent as ProfileIcon } from "../../../../assets/images/profile.svg";

import styles from "./styles.module.scss";


interface Props {
  title: string;
  list: any[];
  imagesPath: string[];
};

const SearchRow = (props: Props) => {
  return (
    <>
      {!!props.list.length &&
        <>
          <h2 className={styles.header}>{props.title}</h2>
          <ul className={styles.list}>
            {props.list.map((item: any) => (
              !!pathOr([], props.imagesPath, item).length ?
                <img
                  key={item.id}
                  src={pathOr("", [...props.imagesPath, "0", "url"], item)}
                  alt=""
                /> :
                <li>
                  <ProfileIcon/>
                </li>
            ))}
          </ul>
        </>
      }
    </>
  );
};

export default SearchRow;
