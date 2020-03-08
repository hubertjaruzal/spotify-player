import { user } from "./index";

describe("user reducer", () => {
  const initialState = {
    display_name: "",
    product: "",
  };

  it("should return the initial state", () => {
    expect(user(undefined, {} as any)).toEqual(initialState);
  });

  // Get User

  it("should handle GET_USER_SUCCESS", () => {
    const payload = {
      display_name: "user_name_123",
      product: "premium",
    };
    expect(
      user(initialState, { type: "GET_USER_SUCCESS", payload }),
    ).toEqual({
      ...initialState,
      display_name: "user_name_123",
      product: "premium",
    });
  });
});
