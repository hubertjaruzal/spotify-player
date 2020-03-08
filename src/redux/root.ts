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
} from "./epics/browse";

import { authorization } from "./reducers/authorization";
import { app } from "./reducers/app";
import { browse } from "./reducers/browse";
import { user } from "./reducers/user";
import { player } from "./reducers/player";


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
);

export const rootReducer = combineReducers({
  authorization,
  app,
  browse,
  user,
  player,
});
