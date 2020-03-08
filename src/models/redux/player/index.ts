import { ErrorsPayload } from "../../common";
import { imageObject, artistObject } from "..";


export interface playerStateModel {
  item: {
    artists: artistObject[];
    album: {
      images: imageObject[];
    };
    uri: string;
  },
  progress_ms: number;
  is_playing: boolean;
  preview_url: string;
};

// Player Play

const PLAYER_PLAY = "PLAYER_PLAY";
const PLAYER_PLAY_SUCCESS = "PLAYER_PLAY_SUCCESS";
const PLAYER_PLAY_FAILURE = "PLAYER_PLAY_FAILURE";

export interface playerPlayPayload {
  context_uri: string;
  position_ms?: number;
};

export interface playerPlay {
  ({ context_uri }: playerPlayPayload): any;
};

export interface playerPlayAction {
  type: typeof PLAYER_PLAY;
  payload: playerPlayPayload;
};

export interface playerPlaySuccessAction {
  type: typeof PLAYER_PLAY_SUCCESS;
};

export interface playerPlayFailureAction {
  type: typeof PLAYER_PLAY_FAILURE;
  payload: ErrorsPayload;
};

// Player Play Preview

const PLAYER_PLAY_PREVIEW = "PLAYER_PLAY_PREVIEW";
const PLAYER_PLAY_PREVIEW_SUCCESS = "PLAYER_PLAY_PREVIEW_SUCCESS";
const PLAYER_PLAY_PREVIEW_FAILURE = "PLAYER_PLAY_PREVIEW_FAILURE";

export interface playerPlayPreviewPayload {
  preview_url: string;
};

export interface playerPlayPreview {
  ({ preview_url }: playerPlayPreviewPayload): any;
};

export interface playerPlayPreviewAction {
  type: typeof PLAYER_PLAY_PREVIEW;
  payload: playerPlayPreviewPayload;
};

export interface playerPlayPreviewSuccessAction {
  type: typeof PLAYER_PLAY_PREVIEW_SUCCESS;
};

export interface playerPlayPreviewFailureAction {
  type: typeof PLAYER_PLAY_PREVIEW_FAILURE;
  payload: ErrorsPayload;
};

// Player Pause

const PLAYER_PAUSE = "PLAYER_PAUSE";
const PLAYER_PAUSE_SUCCESS = "PLAYER_PAUSE_SUCCESS";
const PLAYER_PAUSE_FAILURE = "PLAYER_PAUSE_FAILURE";

export interface playerPause {
  (): any;
};

export interface playerPauseAction {
  type: typeof PLAYER_PAUSE;
};

export interface playerPauseSuccessAction {
  type: typeof PLAYER_PAUSE_SUCCESS;
};

export interface playerPauseFailureAction {
  type: typeof PLAYER_PAUSE_FAILURE;
  payload: ErrorsPayload;
};

// Player Get User's Current Playback

const PLAYER_GET_USERS_CURRENT_PLAYBACK = "PLAYER_GET_USERS_CURRENT_PLAYBACK";
const PLAYER_GET_USERS_CURRENT_PLAYBACK_SUCCESS = "PLAYER_GET_USERS_CURRENT_PLAYBACK_SUCCESS";
const PLAYER_GET_USERS_CURRENT_PLAYBACK_FAILURE = "PLAYER_GET_USERS_CURRENT_PLAYBACK_FAILURE";

export interface playerGetUsersCurrentPlaybackSuccessPayload {
  item: {
    artists: artistObject[];
    album: {
      images: imageObject[];
    };
    uri: string;
  },
  progress_ms: number;
  is_playing: boolean;
};


export interface playerGetUsersCurrentPlayback {
  (): any;
};

export interface playerGetUsersCurrentPlaybackAction {
  type: typeof PLAYER_GET_USERS_CURRENT_PLAYBACK;
};

export interface playerGetUsersCurrentPlaybackSuccessAction {
  type: typeof PLAYER_GET_USERS_CURRENT_PLAYBACK_SUCCESS;
  payload: playerGetUsersCurrentPlaybackSuccessPayload;
};

export interface playerGetUsersCurrentPlaybackFailureAction {
  type: typeof PLAYER_GET_USERS_CURRENT_PLAYBACK_FAILURE;
  payload: ErrorsPayload;
};
