// Types
import {
  browseGetCategoriesAction,
  browseGetCategoriesSuccessAction,
  browseGetCategoriesFailureAction,
  browseGetCategoriesSuccessPayload,
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
