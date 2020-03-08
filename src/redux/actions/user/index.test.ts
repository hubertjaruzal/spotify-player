import {
  getUser,
  getUserSuccess,
  getUserFailure,
} from "./index";


describe("User actions", () => {
  // Get User

  it("should return GET_USER action", () => {
    const expectedAction = {
      type: "GET_USER",
    };

    expect(getUser()).toEqual(expectedAction);
  });

  it("should return GET_USER_SUCCESS action", () => {
    const payload = {
      display_name: "user_name_123",
      product: "premium",
    };
    const expectedAction = {
      type: "GET_USER_SUCCESS",
      payload,
    };

    expect(getUserSuccess(payload)).toEqual(expectedAction);
  });

  it("should return GET_USER_FAILURE action", () => {
    const payload = {
      error: {
        status: 401,
        message: "",
      },
    };
    const expectedAction = {
      type: "GET_USER_FAILURE",
      payload,
    };

    expect(getUserFailure(payload)).toEqual(expectedAction);
  });
});
