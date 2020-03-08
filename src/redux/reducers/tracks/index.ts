import pathOr from "ramda/src/pathOr";

// Types
import { actionModel } from "../../../models/redux";
import { tracksStateModel } from "../../../models/redux/tracks";


const initialState: tracksStateModel = {
  items: [],
};

export const tracks = (state = initialState, action: actionModel) => {
  switch (action.type) {
    case "GET_TRACKS_SUCCESS":
      return {
        ...state,
        items: pathOr([], ["payload", "items"], action),
      };
    default:
      return state;
  }
};
