import pathOr from "ramda/src/pathOr";

// Types
import { appStateModel } from "../../../models/redux/app";
import { actionModel } from "../../../models/redux";


const initialState: appStateModel = {
  search: {
    albums: {
      items: [],
    },
    artists: {
      items: [],
    },
    tracks: {
      items: [],
    },
    playlists: {
      items: [],
    },
  },
  global: {
    isLoading: false,
    error: {
      status: null,
      message: "",
    },
  },
};

export const app = (state = initialState, action: actionModel) => {
  switch (action.type) {
    case "SEARCH":
    case "BROWSE_GET_CATEGORIES":
    case "BROWSE_GET_NEW_RELEASES":
      return {
        ...state,
        global: {
          ...state.global,
          isLoading: true,
        },
      };
    case "SEARCH_SUCCESS":
      return {
        ...state,
        search: pathOr("", ["payload"], action),
        global: {
          ...state.global,
          isLoading: false,
        },
      };
    case "BROWSE_GET_CATEGORIES_SUCCESS":
    case "BROWSE_GET_NEW_RELEASES_SUCCESS":
      return {
        ...state,
        global: {
          ...state.global,
          isLoading: false,
        },
      };
    case "SEARCH_FAILURE":
    case "BROWSE_GET_CATEGORIES_FAILURE":
    case "BROWSE_GET_NEW_RELEASES_FAILURE":
    case "GET_USER_FAILURE":
      return {
        ...state,
        global: {
          ...state.global,
          isLoading: false,
          error: pathOr(initialState.global.error, ["payload", "error"], action),
        },
      };
    case "RESET_GLOBAL_ERROR":
      return {
        ...state,
        global: {
          ...state.global,
          error: initialState.global.error,
        },
      };
    default:
      return state;
  }
};
