import { authorization } from "./index";

describe("authorization reducer", () => {
  const initialState = {
    access_token: "",
  };

  it("should return the initial state", () => {
    expect(authorization(undefined, {} as any)).toEqual(initialState);
  });

  // Authorize

  it("should handle AUTHORIZE_SUCCESS", () => {
    const payload = {
      access_token: "1234",
    };
    expect(
      authorization(initialState, { type: "AUTHORIZE_SUCCESS", payload }),
    ).toEqual({
      ...initialState,
      access_token: payload.access_token,
    });
  });

  it("should handle AUTHORIZE_FAILURE", () => {
    expect(
      authorization(initialState, { type: "AUTHORIZE_FAILURE" }),
    ).toEqual(initialState);
  });

  // Refresh Access Token

  it("should handle REFRESH_ACCESS_TOKEN_SUCCESS", () => {
    const payload = {
      access_token: "1234",
    };
    expect(
      authorization(initialState, { type: "REFRESH_ACCESS_TOKEN_SUCCESS", payload }),
    ).toEqual({
      ...initialState,
      access_token: payload.access_token,
    });
  });

  it("should handle REFRESH_ACCESS_TOKEN_FAILURE", () => {
    expect(
      authorization(initialState, { type: "REFRESH_ACCESS_TOKEN_FAILURE" }),
    ).toEqual(initialState);
  });

  // Other

  it("should handle RESET_ACCESS_TOKEN", () => {
    expect(
      authorization({ access_token: "123" }, { type: "RESET_ACCESS_TOKEN" }),
    ).toEqual(initialState);
  });
});
