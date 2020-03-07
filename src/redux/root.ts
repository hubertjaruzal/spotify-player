import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";

import {
  authorizeEpic,
  refreshAccessTokenEpic,
} from "./epics/authorization";
import { searchEpic } from "./epics/app";

import { authorization } from "./reducers/authorization";
import { app } from "./reducers/app";


export const rootEpic = combineEpics(
  authorizeEpic,
  refreshAccessTokenEpic,
  searchEpic,
);

export const rootReducer = combineReducers({
  authorization,
  app,
});
