import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { isSafari, isMobile } from "../../../../services/common";


import {
  playerPlay,
  playerPlayPreview,
} from "../../../../redux/actions/player";

// Types
import {
  playerPlay as playerPlayFunction,
  playerPlayPreview as playerPlayPreviewFunction,
} from "../../../../models/redux/player";


interface Props {
  item: any;
  isProductPremium: boolean;
  playerPlay: playerPlayFunction;
  playerPlayPreview: playerPlayPreviewFunction;
};

const PlayButton = (props: Props) => {
  return (
    <>
      {(props.isProductPremium && props.item.uri && !isSafari() && !isMobile()) &&
        <button
          type="button"
          onClick={() => props.playerPlay({
            context_uri: props.item.uri,
          })}
        >
          <FontAwesomeIcon icon="play-circle"/>
        </button>
      }
      {((!props.isProductPremium || isSafari() || isMobile()) && props.item.preview_url) &&
        <button
          type="button"
          onClick={() => props.playerPlayPreview({
            preview_url: props.item.preview_url,
          })}
        >
          <FontAwesomeIcon icon="play-circle"/>
        </button>
      }
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    playerPlay,
    playerPlayPreview,
  }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps,
)(PlayButton);
