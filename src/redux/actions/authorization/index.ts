import propOr from "ramda/src/propOr";

import { saveTokenInLocalStorage } from "../../../services/api";

// Types
import {
  authorizeAction,
  authorizeSuccessAction,
  authorizePayload,
  authorizeSuccessPayload,
  authorizeFailureAction,
  refreshAccessTokenAction,
  refreshAccessTokenSuccessPayload,
  refreshAccessTokenSuccessAction,
  refreshAccessTokenFailureAction,
  resetAccessTokenAction,
} from "../../../models/redux/authorization";


// Authorize

export const authorize = (payload: authorizePayload): authorizeAction => {
  return {
    type: "AUTHORIZE",
    payload,
  };
};

export const authorizeSuccess = (payload: authorizeSuccessPayload): authorizeSuccessAction => {
  const access_token = propOr("", "access_token", payload) as string;
  const refresh_token = propOr("", "refresh_token", payload) as string;

  saveTokenInLocalStorage(access_token, "access_token");
  saveTokenInLocalStorage(refresh_token, "refresh_token");

  return {
    type: "AUTHORIZE_SUCCESS",
    payload: {
      access_token,
    },
  };
};

export const authorizeFailure = (): authorizeFailureAction => {
  return {
    type: "AUTHORIZE_FAILURE",
  };
};

// Refresh Access Token

export const refreshAccessToken = (): refreshAccessTokenAction => {
  return {
    type: "REFRESH_ACCESS_TOKEN",
  };
};

export const refreshAccessTokenSuccess = (payload: refreshAccessTokenSuccessPayload): refreshAccessTokenSuccessAction => {
  const access_token = propOr("", "access_token", payload) as string;

  saveTokenInLocalStorage(access_token, "access_token");

  return {
    type: "REFRESH_ACCESS_TOKEN_SUCCESS",
    payload: {
      access_token,
    },
  };
};

export const refreshAccessTokenFailure = (): refreshAccessTokenFailureAction => {
  return {
    type: "REFRESH_ACCESS_TOKEN_FAILURE",
  };
};

// Other

export const resetAccessToken = (): resetAccessTokenAction => {
  return {
    type: "RESET_ACCESS_TOKEN",
  };
};
