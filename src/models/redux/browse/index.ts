import { ErrorsPayload } from "../../common";
import { categoryObject } from "..";


export interface browseStateModel {
  categories: categoryObject | {};
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
