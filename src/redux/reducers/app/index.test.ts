import { app } from "./index";

describe("app reducer", () => {
  const initialState = {
    global: {
      isLoading: false,
    },
  };

  it("should return the initial state", () => {
    expect(app(undefined, {} as any)).toEqual(initialState);
  });
});
