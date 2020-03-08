import { ErrorsPayload } from "../../common";


export interface userStateModel {
  display_name: string;
  product: string;
};

// Get User

const GET_USER = "GET_USER";
const GET_USER_SUCCESS = "GET_USER_SUCCESS";
const GET_USER_FAILURE = "GET_USER_FAILURE";

export interface getUser {
  (): any;
};

export interface getUserSuccessPayload {
  display_name: string;
  product: string;
};

export interface getUserAction {
  type: typeof GET_USER;
};

export interface getUserSuccessAction {
  type: typeof GET_USER_SUCCESS;
  payload: getUserSuccessPayload;
};

export interface getUserFailureAction {
  type: typeof GET_USER_FAILURE;
  payload: ErrorsPayload;
};
