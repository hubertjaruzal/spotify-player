import { ofType, ActionsObservable, Epic } from "redux-observable";
import { switchMap, pluck } from "rxjs/operators";

import { apiCall } from "../../../services/api";

import {
  browseGetCategoriesSuccess,
  browseGetCategoriesFailure,
  browseGetNewReleasesSuccess,
  browseGetNewReleasesFailure,
  browseGetCategoryPlaylistsSuccess,
  browseGetCategoryPlaylistsFailure,
} from "../../actions/browse";

//Types
import {
  browseGetCategoriesAction,
  browseGetNewReleasesAction,
  browseGetCategoryPlaylistsPayload,
  browseGetCategoryPlaylistsAction,
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

// Browse Get Category Playlists

export const browseGetCategoryPlaylistsEpic: Epic = (action$: ActionsObservable<browseGetCategoryPlaylistsAction>) => (
  action$.pipe(
    ofType("BROWSE_GET_CATEGORY_PLAYLISTS"),
    pluck("payload"),
    switchMap(browseGetCategoryPlaylists),
  )
);

export const browseGetCategoryPlaylists = (payload: browseGetCategoryPlaylistsPayload) => (
  apiCall(
    `https://api.spotify.com/v1/browse/categories/${payload.category_id}/playlists`,
    "GET",
    {},
    (data: XHRPayload) => browseGetCategoryPlaylistsSuccess(data.response),
    browseGetCategoryPlaylistsFailure,
  )
);
