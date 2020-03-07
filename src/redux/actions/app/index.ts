// Types
import {
  searchPayload,
  searchAction,
  searchSuccessAction,
  searchFailureAction,
  SearchObjectPayload,
  resetGlobalErrorAction,
} from "../../../models/redux/app";
import { ErrorsPayload } from "../../../models/common";


// Search

export const search = (payload: searchPayload): searchAction => {
  return {
    type: "SEARCH",
    payload,
  };
};

export const searchSuccess = (payload: SearchObjectPayload): searchSuccessAction => {
  return {
    type: "SEARCH_SUCCESS",
    payload,
  };
};

export const searchFailure = (payload: ErrorsPayload): searchFailureAction => {
  return {
    type: "SEARCH_FAILURE",
    payload,
  };
};

// Other

export const resetGlobalError = (): resetGlobalErrorAction => {
  return {
    type: "RESET_GLOBAL_ERROR",
  };
};
