import pathOr from "ramda/src/pathOr";

// Types
import { actionModel } from "../../../models/redux";
import { browseStateModel } from "../../../models/redux/browse";


const initialState: browseStateModel = {
  categories: {},
  new_releases: {},
};

export const browse = (state = initialState, action: actionModel) => {
  switch (action.type) {
    case "BROWSE_GET_CATEGORIES_SUCCESS":
      return {
        ...state,
        categories: pathOr({}, ["payload", "categories"], action),
        new_releases: initialState.new_releases,
      };
    case "BROWSE_GET_NEW_RELEASES_SUCCESS":
      return {
        ...state,
        categories: initialState.categories,
        new_releases: pathOr({}, ["payload"], action),
      };
    case "SEARCH_SUCCESS":
      return {
        ...state,
        categories: initialState.categories,
        new_releases: initialState.new_releases,
      };
    default:
      return state;
  }
};
