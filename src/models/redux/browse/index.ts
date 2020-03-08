import { ErrorsPayload } from "../../common";
import {
  categoryObject,
  newReleasesObject,
  categoryPlaylistsObject,
} from "..";


export interface browseStateModel {
  categories: categoryObject | {};
  new_releases: { albums: newReleasesObject } | {};
  category_details: { playlists: categoryPlaylistsObject } | {};
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

// Browse Get Category Playlists

const BROWSE_GET_CATEGORY_PLAYLISTS = "BROWSE_GET_CATEGORY_PLAYLISTS";
const BROWSE_GET_CATEGORY_PLAYLISTS_SUCCESS = "BROWSE_GET_CATEGORY_PLAYLISTS_SUCCESS";
const BROWSE_GET_CATEGORY_PLAYLISTS_FAILURE = "BROWSE_GET_CATEGORY_PLAYLISTS_FAILURE";

export interface browseGetCategoryPlaylistsPayload {
  category_id: string;
};

export interface browseGetCategoryPlaylists {
  ({ category_id }: browseGetCategoryPlaylistsPayload): any;
};

export interface browseGetCategoryPlaylistsSuccessPayload {
  playlists: categoryPlaylistsObject;
};

export interface browseGetCategoryPlaylistsAction {
  type: typeof BROWSE_GET_CATEGORY_PLAYLISTS;
  payload: browseGetCategoryPlaylistsPayload;
};

export interface browseGetCategoryPlaylistsSuccessAction {
  type: typeof BROWSE_GET_CATEGORY_PLAYLISTS_SUCCESS;
  payload: browseGetCategoryPlaylistsSuccessPayload;
};

export interface browseGetCategoryPlaylistsFailureAction {
  type: typeof BROWSE_GET_CATEGORY_PLAYLISTS_FAILURE;
  payload: ErrorsPayload;
};
