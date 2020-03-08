import { ofType, ActionsObservable, Epic } from "redux-observable";
import { switchMap, pluck } from "rxjs/operators";

import { apiCall } from "../../../services/api";

import {
  getTracksSuccess,
  getTracksFailure,
} from "../../actions/tracks";

//Types
import {
  getTracksAction,
  getTracksPayload,
} from "../../../models/redux/tracks";
import { XHRPayload } from "../../../models/common";


// Get Tracks

export const getTracksEpic: Epic = (action$: ActionsObservable<getTracksAction>) => (
  action$.pipe(
    ofType("GET_TRACKS"),
    pluck("payload"),
    switchMap(getTracks),
  )
);

export const getTracks = (payload: getTracksPayload) => (
  apiCall(
    `https://api.spotify.com/v1/${payload.type}/${payload.id}/tracks`,
    "GET",
    {},
    (data: XHRPayload) => getTracksSuccess(data.response),
    getTracksFailure,
  )
);
