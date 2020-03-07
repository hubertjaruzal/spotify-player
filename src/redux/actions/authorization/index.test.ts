import {
  authorize,
  authorizeSuccess,
  authorizeFailure,
  refreshAccessToken,
  refreshAccessTokenSuccess,
  refreshAccessTokenFailure,
  resetAccessToken,
} from "./index";


describe("Authorize actions", () => {
  // Authorize

  it("should return AUTHORIZE action", () => {
    const payload = {
      code: "1234",
    };
    const expectedAction = {
      type: "AUTHORIZE",
      payload,
    };

    expect(authorize(payload)).toEqual(expectedAction);
  });

  it("should return AUTHORIZE_SUCCESS action", () => {
    const payload = {
      access_token: "1234",
    };
    const expectedAction = {
      type: "AUTHORIZE_SUCCESS",
      payload,
    };

    expect(authorizeSuccess(payload)).toEqual(expectedAction);
  });

  it("should return AUTHORIZE_FAILURE action", () => {
    const expectedAction = {
      type: "AUTHORIZE_FAILURE",
    };

    expect(authorizeFailure()).toEqual(expectedAction);
  });

  // Refresh Access Token

  it("should return REFRESH_ACCESS_TOKEN action", () => {
    const expectedAction = {
      type: "REFRESH_ACCESS_TOKEN",
    };

    expect(refreshAccessToken()).toEqual(expectedAction);
  });

  it("should return REFRESH_ACCESS_TOKEN_SUCCESS action", () => {
    const payload = {
      access_token: "1234",
    };
    const expectedAction = {
      type: "REFRESH_ACCESS_TOKEN_SUCCESS",
      payload,
    };

    expect(refreshAccessTokenSuccess(payload)).toEqual(expectedAction);
  });

  it("should return REFRESH_ACCESS_TOKEN_FAILURE action", () => {
    const expectedAction = {
      type: "REFRESH_ACCESS_TOKEN_FAILURE",
    };

    expect(refreshAccessTokenFailure()).toEqual(expectedAction);
  });

  // Other

  it("should return RESET_ACCESS_TOKEN action", () => {
    const expectedAction = {
      type: "RESET_ACCESS_TOKEN",
    };

    expect(resetAccessToken()).toEqual(expectedAction);
  });
});
