export interface authorizationStateModel {
  access_token: string;
};

// Authorize

const AUTHORIZE = "AUTHORIZE";
const AUTHORIZE_SUCCESS = "AUTHORIZE_SUCCESS";
const AUTHORIZE_FAILURE = "AUTHORIZE_FAILURE";

export interface authorizePayload {
  code: string;
};

export interface authorizeSuccessPayload {
  access_token: string;
};

export interface authorize {
  ({ code: string }: authorizePayload): any;
};

export interface authorizeAction {
  type: typeof AUTHORIZE;
  payload: authorizePayload;
};

export interface authorizeSuccessAction {
  type: typeof AUTHORIZE_SUCCESS;
  payload: authorizeSuccessPayload;
};

export interface authorizeFailureAction {
  type: typeof AUTHORIZE_FAILURE;
};


// Refresh Access Token

const REFRESH_ACCESS_TOKEN = "REFRESH_ACCESS_TOKEN";
const REFRESH_ACCESS_TOKEN_SUCCESS = "REFRESH_ACCESS_TOKEN_SUCCESS";
const REFRESH_ACCESS_TOKEN_FAILURE = "REFRESH_ACCESS_TOKEN_FAILURE";

export interface refreshAccessTokenSuccessPayload {
  access_token: string;
};

export interface refreshAccessToken {
  (): any;
};

export interface refreshAccessTokenAction {
  type: typeof REFRESH_ACCESS_TOKEN;
};

export interface refreshAccessTokenSuccessAction {
  type: typeof REFRESH_ACCESS_TOKEN_SUCCESS;
  payload: refreshAccessTokenSuccessPayload;
};

export interface refreshAccessTokenFailureAction {
  type: typeof REFRESH_ACCESS_TOKEN_FAILURE;
};
