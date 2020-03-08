// Types
import {
  getUserAction,
  getUserSuccessAction,
  getUserFailureAction,
  getUserSuccessPayload,
} from "../../../models/redux/user";
import { ErrorsPayload } from "../../../models/common";


// Get User

export const getUser = (): getUserAction => {
  return {
    type: "GET_USER",
  };
};

export const getUserSuccess = (payload: getUserSuccessPayload): getUserSuccessAction => {
  return {
    type: "GET_USER_SUCCESS",
    payload,
  };
};

export const getUserFailure = (payload: ErrorsPayload): getUserFailureAction => {
  return {
    type: "GET_USER_FAILURE",
    payload,
  };
};
