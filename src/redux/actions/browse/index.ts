// Types
import {
  browseGetCategoriesAction,
  browseGetCategoriesSuccessAction,
  browseGetCategoriesFailureAction,
  browseGetCategoriesSuccessPayload,
  browseGetNewReleasesAction,
  browseGetNewReleasesSuccessPayload,
  browseGetNewReleasesSuccessAction,
  browseGetNewReleasesFailureAction,
  browseGetCategoryPlaylistsPayload,
  browseGetCategoryPlaylistsAction,
  browseGetCategoryPlaylistsSuccessPayload,
  browseGetCategoryPlaylistsSuccessAction,
  browseGetCategoryPlaylistsFailureAction,
} from "../../../models/redux/browse";
import { ErrorsPayload } from "../../../models/common";


// Browse Get Categories

export const browseGetCategories = (): browseGetCategoriesAction => {
  return {
    type: "BROWSE_GET_CATEGORIES",
  };
};

export const browseGetCategoriesSuccess = (payload: browseGetCategoriesSuccessPayload): browseGetCategoriesSuccessAction => {
  return {
    type: "BROWSE_GET_CATEGORIES_SUCCESS",
    payload,
  };
};

export const browseGetCategoriesFailure = (payload: ErrorsPayload): browseGetCategoriesFailureAction => {
  return {
    type: "BROWSE_GET_CATEGORIES_FAILURE",
    payload,
  };
};

// Browse Get New Releases

export const browseGetNewReleases = (): browseGetNewReleasesAction => {
  return {
    type: "BROWSE_GET_NEW_RELEASES",
  };
};

export const browseGetNewReleasesSuccess = (payload: browseGetNewReleasesSuccessPayload): browseGetNewReleasesSuccessAction => {
  return {
    type: "BROWSE_GET_NEW_RELEASES_SUCCESS",
    payload,
  };
};

export const browseGetNewReleasesFailure = (payload: ErrorsPayload): browseGetNewReleasesFailureAction => {
  return {
    type: "BROWSE_GET_NEW_RELEASES_FAILURE",
    payload,
  };
};

// Browse Get Category Playlists

export const browseGetCategoryPlaylists = (payload: browseGetCategoryPlaylistsPayload): browseGetCategoryPlaylistsAction => {
  return {
    type: "BROWSE_GET_CATEGORY_PLAYLISTS",
    payload,
  };
};

export const browseGetCategoryPlaylistsSuccess = (payload: browseGetCategoryPlaylistsSuccessPayload): browseGetCategoryPlaylistsSuccessAction => {
  return {
    type: "BROWSE_GET_CATEGORY_PLAYLISTS_SUCCESS",
    payload,
  };
};

export const browseGetCategoryPlaylistsFailure = (payload: ErrorsPayload): browseGetCategoryPlaylistsFailureAction => {
  return {
    type: "BROWSE_GET_CATEGORY_PLAYLISTS_FAILURE",
    payload,
  };
};
