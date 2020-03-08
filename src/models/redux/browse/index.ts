import { ErrorsPayload } from "../../common";
import { categoryObject, newReleasesObject } from "..";


export interface browseStateModel {
  categories: categoryObject | {};
  new_releases: { albums: newReleasesObject } | {};
};

// Browse Get Categories

const BROWSE_GET_CATEGORIES = "BROWSE_GET_CATEGORIES";
const BROWSE_GET_CATEGORIES_SUCCESS = "BROWSE_GET_CATEGORIES_SUCCESS";
const BROWSE_GET_CATEGORIES_FAILURE = "BROWSE_GET_CATEGORIES_FAILURE";

export interface browseGetCategories {
  (): any;
};

export interface browseGetCategoriesSuccessPayload {
  categories: categoryObject;
};

export interface browseGetCategoriesAction {
  type: typeof BROWSE_GET_CATEGORIES;
};

export interface browseGetCategoriesSuccessAction {
  type: typeof BROWSE_GET_CATEGORIES_SUCCESS;
  payload: browseGetCategoriesSuccessPayload;
};

export interface browseGetCategoriesFailureAction {
  type: typeof BROWSE_GET_CATEGORIES_FAILURE;
  payload: ErrorsPayload;
};


// Browse Get New Releases

const BROWSE_GET_NEW_RELEASES = "BROWSE_GET_NEW_RELEASES";
const BROWSE_GET_NEW_RELEASES_SUCCESS = "BROWSE_GET_NEW_RELEASES_SUCCESS";
const BROWSE_GET_NEW_RELEASES_FAILURE = "BROWSE_GET_NEW_RELEASES_FAILURE";

export interface browseGetNewReleases {
  (): any;
};

export interface browseGetNewReleasesSuccessPayload {
  albums: newReleasesObject;
};

export interface browseGetNewReleasesAction {
  type: typeof BROWSE_GET_NEW_RELEASES;
};

export interface browseGetNewReleasesSuccessAction {
  type: typeof BROWSE_GET_NEW_RELEASES_SUCCESS;
  payload: browseGetNewReleasesSuccessPayload;
};

export interface browseGetNewReleasesFailureAction {
  type: typeof BROWSE_GET_NEW_RELEASES_FAILURE;
  payload: ErrorsPayload;
};
