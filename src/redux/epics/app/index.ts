import { ofType, ActionsObservable, Epic } from "redux-observable";
import { switchMap, pluck, debounceTime } from "rxjs/operators";

import { apiCall } from "../../../services/api";

import { searchSuccess, searchFailure } from "../../actions/app";

//Types
import { XHRPayload } from "../../../models/common";
import {
  searchAction,
  searchPayload,
} from "../../../models/redux/app";


// Search

export const searchEpic: Epic = (action$: ActionsObservable<searchAction>) => (
  action$.pipe(
    ofType("SEARCH"),
    pluck("payload"),
    debounceTime(1000),
    switchMap(search),
  )
);

export const search = (payload: searchPayload) => (
  apiCall(
    `https://api.spotify.com/v1/search?q=${payload.query}&limit=6&type=track,album,artist,playlist`,
    "GET",
    {},
    (data: XHRPayload) => searchSuccess(data.response),
    searchFailure,
  )
);
