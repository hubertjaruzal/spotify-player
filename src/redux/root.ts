import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";

import {
  authorizeEpic,
  refreshAccessTokenEpic,
} from "./epics/authorization";

import { authorization } from "./reducers/authorization";
import { app } from "./reducers/app";

export const rootEpic = combineEpics(
  authorizeEpic,
  refreshAccessTokenEpic,
);

export const rootReducer = combineReducers({
  authorization,
  app,
});
