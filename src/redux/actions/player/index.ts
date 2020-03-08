// Types
import {
  playerPlayPayload,
  playerPlayAction,
  playerPlaySuccessAction,
  playerPlayFailureAction,
  playerPauseAction,
  playerPauseSuccessAction,
  playerPauseFailureAction,
  playerGetUsersCurrentPlaybackAction,
  playerGetUsersCurrentPlaybackSuccessAction,
  playerGetUsersCurrentPlaybackFailureAction,
  playerPlayPreviewPayload,
  playerPlayPreviewAction,
  playerPlayPreviewSuccessAction,
  playerPlayPreviewFailureAction,
} from "../../../models/redux/player";
import { ErrorsPayload } from "../../../models/common";


// Player Play

export const playerPlay = (payload: playerPlayPayload): playerPlayAction => {
  return {
    type: "PLAYER_PLAY",
    payload,
  };
};

export const playerPlaySuccess = (): playerPlaySuccessAction => {
  return {
    type: "PLAYER_PLAY_SUCCESS",
  };
};

export const playerPlayFailure = (payload: ErrorsPayload): playerPlayFailureAction => {
  return {
    type: "PLAYER_PLAY_FAILURE",
    payload,
  };
};

// Player Play Preview

export const playerPlayPreview = (payload: playerPlayPreviewPayload): playerPlayPreviewAction => {
  return {
    type: "PLAYER_PLAY_PREVIEW",
    payload,
  };
};

export const playerPlayPreviewSuccess = (): playerPlayPreviewSuccessAction => {
  return {
    type: "PLAYER_PLAY_PREVIEW_SUCCESS",
  };
};

export const playerPlayPreviewFailure = (payload: ErrorsPayload): playerPlayPreviewFailureAction => {
  return {
    type: "PLAYER_PLAY_PREVIEW_FAILURE",
    payload,
  };
};

// Player Pause

export const playerPause = (): playerPauseAction => {
  return {
    type: "PLAYER_PAUSE",
  };
};

export const playerPauseSuccess = (): playerPauseSuccessAction => {
  return {
    type: "PLAYER_PAUSE_SUCCESS",
  };
};

export const playerPauseFailure = (payload: ErrorsPayload): playerPauseFailureAction => {
  return {
    type: "PLAYER_PAUSE_FAILURE",
    payload,
  };
};

// Player Get User's Current Playback

export const playerGetUsersCurrentPlayback = (): playerGetUsersCurrentPlaybackAction => {
  return {
    type: "PLAYER_GET_USERS_CURRENT_PLAYBACK",
  };
};

export const playerGetUsersCurrentPlaybackSuccess = (payload: any): playerGetUsersCurrentPlaybackSuccessAction => {
  return {
    type: "PLAYER_GET_USERS_CURRENT_PLAYBACK_SUCCESS",
    payload,
  };
};

export const playerGetUsersCurrentPlaybackFailure = (payload: ErrorsPayload): playerGetUsersCurrentPlaybackFailureAction => {
  return {
    type: "PLAYER_GET_USERS_CURRENT_PLAYBACK_FAILURE",
    payload,
  };
};
