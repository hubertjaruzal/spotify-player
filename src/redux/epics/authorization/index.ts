import { ofType, ActionsObservable, Epic } from "redux-observable";
import { switchMap, pluck } from "rxjs/operators";

import { apiCall, getTokenFromLocalStorage } from "../../../services/api";

import {
  authorizeSuccess,
  authorizeFailure,
  refreshAccessTokenSuccess,
  refreshAccessTokenFailure,
} from "../../actions/authorization";

//Types
import {
  authorizeAction,
  authorizePayload,
  refreshAccessTokenAction,
} from "../../../models/redux/authorization";
import { XHRPayload } from "../../../models/common";


// Authorize

export const authorizeEpic: Epic = (action$: ActionsObservable<authorizeAction>) => (
  action$.pipe(
    ofType("AUTHORIZE"),
    pluck("payload"),
    switchMap(authorize),
  )
);

export const authorize = (payload: authorizePayload) => (
  apiCall(
    "https://accounts.spotify.com/api/token",
    "POST",
    {
      grant_type: "authorization_code",
      code: payload.code,
      redirect_uri: process.env.REACT_APP_REDIRECT_URI,
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
    },
    (data: XHRPayload) => authorizeSuccess(data.response),
    authorizeFailure,
  )
);

// Refresh Access Token

export const refreshAccessTokenEpic: Epic = (action$: ActionsObservable<refreshAccessTokenAction>) => (
  action$.pipe(
    ofType("REFRESH_ACCESS_TOKEN"),
    switchMap(refreshAccessToken),
  )
);

export const refreshAccessToken = () => (
  apiCall(
    "https://accounts.spotify.com/api/token",
    "POST",
    {
      grant_type: "refresh_token",
      refresh_token: getTokenFromLocalStorage("refresh_token"),
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
    },
    (data: XHRPayload) => refreshAccessTokenSuccess(data.response),
    refreshAccessTokenFailure,
  )
);
