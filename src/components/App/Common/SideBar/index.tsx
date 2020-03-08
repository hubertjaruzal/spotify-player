import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

import { ReactComponent as LogoIcon } from "../../../../assets/images/logo.svg";

// Types
import { History, Location } from "history";

import styles from "./styles.module.scss";


interface Props {
  history: History;
  location: Location;
};

const SideBar = (props: Props) => {
  const linkClass = (pathname: string) => classNames({
    [styles.active]: props.history.location.pathname === pathname,
  });

  return (
    <nav className={styles.container}>
      <LogoIcon/>
      <ul>
        <li>
          <Link
            to="/search"
            className={linkClass("/search")}
          >
            <FontAwesomeIcon icon="search"/>
            <span>Search</span>
          </Link>
        </li>
        <li>
          <Link
            to="/categories"
            className={linkClass("/categories")}
          >
            <FontAwesomeIcon icon="th-large"/>
            <span>Categories</span>
          </Link>
        </li>
        <li>
          <Link
            to="/new-releases"
            className={linkClass("/new-releases")}
          >
            <FontAwesomeIcon icon="music"/>
            <span>New Releases</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
