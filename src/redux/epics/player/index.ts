import { ofType, ActionsObservable, Epic } from "redux-observable";
import { switchMap, pluck, debounceTime } from "rxjs/operators";

import { apiCall } from "../../../services/api";

import {
  playerPlaySuccess,
  playerPlayFailure,
  playerPauseSuccess,
  playerPauseFailure,
  playerGetUsersCurrentPlaybackSuccess,
  playerGetUsersCurrentPlaybackFailure,
} from "../../actions/player";

//Types
import {
  playerPlayAction,
  playerPlayPayload,
  playerPlaySuccessAction,
  playerPauseAction,
  playerGetUsersCurrentPlaybackAction,
  playerPauseSuccessAction,
} from "../../../models/redux/player";
import { XHRPayload } from "../../../models/common";
import { pathOr } from "ramda";


// Player Play

export const playerPlayEpic: Epic = (action$: ActionsObservable<playerPlayAction>) => (
  action$.pipe(
    ofType("PLAYER_PLAY"),
    pluck("payload"),
    switchMap(playerPlay),
  )
);

export const playerPlay = (payload: playerPlayPayload) => (
  apiCall(
    `https://api.spotify.com/v1/me/player/play?device_id=${localStorage.getItem("player_device_id")}`,
    "PUT",
    {
      ...(payload.context_uri.includes("spotify:track") ? ({ uris: [payload.context_uri] }) : ({ context_uri: payload.context_uri })),
      position_ms: pathOr(0, ["position_ms"], payload),
    },
    (data: XHRPayload) => playerPlaySuccess(),
    playerPlayFailure,
  )
);

export const playerPlaySuccessEpic: Epic = (action$: ActionsObservable<playerPlaySuccessAction>) => (
  action$.pipe(
    ofType("PLAYER_PLAY_SUCCESS"),
    debounceTime(500),
    switchMap(playerGetUsersCurrentPlayback),
  )
);

// Player Pause

export const playerPauseEpic: Epic = (action$: ActionsObservable<playerPauseAction>) => (
  action$.pipe(
    ofType("PLAYER_PAUSE"),
    switchMap(playerPause),
  )
);

export const playerPause = () => (
  apiCall(
    `https://api.spotify.com/v1/me/player/pause?device_id=${localStorage.getItem("player_device_id")}`,
    "PUT",
    {},
    (data: XHRPayload) => playerPauseSuccess(),
    playerPauseFailure,
  )
);

export const playerPauseSuccessEpic: Epic = (action$: ActionsObservable<playerPauseSuccessAction>) => (
  action$.pipe(
    ofType("PLAYER_PAUSE_SUCCESS"),
    debounceTime(500),
    switchMap(playerGetUsersCurrentPlayback),
  )
);

// Player Get User's Current Playback

export const playerGetUsersCurrentPlaybackEpic: Epic = (action$: ActionsObservable<playerGetUsersCurrentPlaybackAction>) => (
  action$.pipe(
    ofType("PLAYER_GET_USERS_CURRENT_PLAYBACK"),
    switchMap(playerGetUsersCurrentPlayback),
  )
);

export const playerGetUsersCurrentPlayback = () => (
  apiCall(
    "https://api.spotify.com/v1/me/player",
    "GET",
    {},
    (data: XHRPayload) => playerGetUsersCurrentPlaybackSuccess(data.response),
    playerGetUsersCurrentPlaybackFailure,
  )
);
