import { ofType, ActionsObservable, Epic } from "redux-observable";
import { switchMap } from "rxjs/operators";

import { apiCall } from "../../../services/api";

import {
  browseGetCategoriesSuccess,
  browseGetCategoriesFailure,
  browseGetNewReleasesSuccess,
  browseGetNewReleasesFailure,
} from "../../actions/browse";

//Types
import {
  browseGetCategoriesAction,
  browseGetNewReleasesAction,
} from "../../../models/redux/browse";
import { XHRPayload } from "../../../models/common";


// Browse Get Categories

export const browseGetCategoriesEpic: Epic = (action$: ActionsObservable<browseGetCategoriesAction>) => (
  action$.pipe(
    ofType("BROWSE_GET_CATEGORIES"),
    switchMap(browseGetCategories),
  )
);

export const browseGetCategories = () => (
  apiCall(
    "https://api.spotify.com/v1/browse/categories",
    "GET",
    {},
    (data: XHRPayload) => browseGetCategoriesSuccess(data.response),
    browseGetCategoriesFailure,
  )
);

// Browse Get New Releases

export const browseGetNewReleasesEpic: Epic = (action$: ActionsObservable<browseGetNewReleasesAction>) => (
  action$.pipe(
    ofType("BROWSE_GET_NEW_RELEASES"),
    switchMap(browseGetNewReleases),
  )
);

export const browseGetNewReleases = () => (
  apiCall(
    "https://api.spotify.com/v1/browse/new-releases",
    "GET",
    {},
    (data: XHRPayload) => browseGetNewReleasesSuccess(data.response),
    browseGetNewReleasesFailure,
  )
);
