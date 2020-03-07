import React from "react";

import { ReactComponent as LogoIcon } from "../../../../assets/images/logo.svg";

import styles from "./styles.module.scss";


const SideBar = () => {
  return (
    <nav className={styles.container}>
      <LogoIcon/>
    </nav>
  );
};

export default SideBar;
