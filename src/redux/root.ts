import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";

import {
  authorizeEpic,
  refreshAccessTokenEpic,
} from "./epics/authorization";
import { searchEpic } from "./epics/app";
import {
  playerPlayEpic,
  playerPauseEpic,
  playerGetUsersCurrentPlaybackEpic,
  playerPlaySuccessEpic,
  playerPauseSuccessEpic,
} from "./epics/player";
import {
  getUserEpic,
} from "./epics/user";
import {
  browseGetCategoriesEpic,
  browseGetNewReleasesEpic,
  browseGetCategoryPlaylistsEpic,
} from "./epics/browse";
import {
  getTracksEpic,
} from "./epics/tracks";

import { authorization } from "./reducers/authorization";
import { app } from "./reducers/app";
import { browse } from "./reducers/browse";
import { user } from "./reducers/user";
import { player } from "./reducers/player";
import { tracks } from "./reducers/tracks";


export const rootEpic = combineEpics(
  authorizeEpic,
  refreshAccessTokenEpic,
  searchEpic,
  playerPlayEpic,
  playerPauseEpic,
  getUserEpic,
  playerGetUsersCurrentPlaybackEpic,
  playerPlaySuccessEpic,
  playerPauseSuccessEpic,
  browseGetCategoriesEpic,
  browseGetNewReleasesEpic,
  browseGetCategoryPlaylistsEpic,
  getTracksEpic,
);

export const rootReducer = combineReducers({
  authorization,
  app,
  browse,
  user,
  player,
  tracks,
});
