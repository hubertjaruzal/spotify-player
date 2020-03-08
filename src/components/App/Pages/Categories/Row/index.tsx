import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import pathOr from "ramda/src/pathOr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Types
import { browseStateModel } from "../../../../../models/redux/browse";

import styles from "./styles.module.scss";


interface Props {
  title: string;
  list: any[];
  imagesPath: string[];
  browse: browseStateModel;
};

const CategoriesRow = (props: Props) => {
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
                <img src={pathOr("", [...props.imagesPath, "0", "url"], item)} alt=""/>
                <div className={styles.boxOverlay}>
                  <Link to={`/categories/${item.id}`}>
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
  browse: browseStateModel,
}) => ({
  browse: state.browse,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoriesRow);
