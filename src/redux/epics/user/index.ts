import { ofType, ActionsObservable, Epic } from "redux-observable";
import { switchMap } from "rxjs/operators";

import { apiCall } from "../../../services/api";

import {
  getUserSuccess,
  getUserFailure,
} from "../../actions/user";

//Types
import {
  getUserAction,
} from "../../../models/redux/user";
import { XHRPayload } from "../../../models/common";


// Get User

export const getUserEpic: Epic = (action$: ActionsObservable<getUserAction>) => (
  action$.pipe(
    ofType("GET_USER"),
    switchMap(getUser),
  )
);

export const getUser = () => (
  apiCall(
    "https://api.spotify.com/v1/me",
    "GET",
    {},
    (data: XHRPayload) => getUserSuccess(data.response),
    getUserFailure,
  )
);
