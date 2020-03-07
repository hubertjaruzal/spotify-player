import pathOr from "ramda/src/pathOr";

// Types
import { authorizationStateModel } from "../../../models/redux/authorization";
import { actionModel } from "../../../models/redux";


const initialState: authorizationStateModel = {
  access_token: "",
};

export const authorization = (state = initialState, action: actionModel) => {
  switch (action.type) {
    case "AUTHORIZE_SUCCESS":
    case "REFRESH_ACCESS_TOKEN_SUCCESS":
      return {
        ...state,
        access_token: pathOr("", ["payload", "access_token"], action),
      };
    case "AUTHORIZE_FAILURE":
    case "REFRESH_ACCESS_TOKEN_FAILURE":
      return initialState;
    default:
      return state;
  }
};
