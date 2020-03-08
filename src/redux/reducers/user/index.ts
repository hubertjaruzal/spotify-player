import pathOr from "ramda/src/pathOr";

// Types
import { actionModel } from "../../../models/redux";
import { userStateModel } from "../../../models/redux/user";


const initialState: userStateModel = {
  display_name: "",
  product: "",
};

export const user = (state = initialState, action: actionModel) => {
  switch (action.type) {
    case "GET_USER_SUCCESS":
      return {
        ...state,
        display_name: pathOr("", ["payload", "display_name"], action),
        product: pathOr("", ["payload", "product"], action),
      };
    default:
      return state;
  }
};
