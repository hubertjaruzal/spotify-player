import {
  doesAccessTokenExist,
} from "./index";

describe("doesAccessTokenExist", () => {
  const localStorageMock = (() => {
    let store = {} as any;
    return {
      getItem: (key: string) => {
        return store[key];
      },
      setItem: (key: string, value: string) => {
        store[key] = value.toString();
      },
      clear: () => {
        store = {};
      },
      removeItem: (key: string) => {
        delete store[key];
      },
    };
  })();

  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: localStorageMock,
      writable: true,
    });

    localStorage.clear();
  });

  it("should return true is token exist in localStorage", () => {
    localStorage.setItem("player_access_token", "123");

    expect(doesAccessTokenExist("")).toEqual(true);
  });

  it("should return true is token exist in AuthorizationState", () => {
    expect(doesAccessTokenExist("123")).toEqual(true);
  });

  it("should return false is token doesn't exist in localStorage or AuthorizationState", () => {
    expect(doesAccessTokenExist("")).toEqual(false);
  });
});
