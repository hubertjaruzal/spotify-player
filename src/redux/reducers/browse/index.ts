import pathOr from "ramda/src/pathOr";

// Types
import { actionModel } from "../../../models/redux";
import { browseStateModel } from "../../../models/redux/browse";


const initialState: browseStateModel = {
  categories: {},
};

export const browse = (state = initialState, action: actionModel) => {
  switch (action.type) {
    case "BROWSE_GET_CATEGORIES_SUCCESS":
      return {
        ...state,
        categories: pathOr({}, ["payload", "categories"], action),
      };
    case "SEARCH_SUCCESS":
      return {
        ...state,
        categories: initialState.categories,
      };
    default:
      return state;
  }
};
