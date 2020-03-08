import { browse } from "./index";

describe("browse reducer", () => {
  const initialState = {
    categories: {},
    new_releases: {},
  };

  it("should return the initial state", () => {
    expect(browse(undefined, {} as any)).toEqual(initialState);
  });

  // Browse Get Categories

  it("should handle BROWSE_GET_CATEGORIES_SUCCESS", () => {
    const payload = {
      categories: {
        href: "",
        items: [
          {
            id: "",
            name: "",
            href: "",
            icons: [
              {
                height: 640,
                url: "",
                width: 640,
              },
            ],
          },
        ],
        limit: 1,
        next:  null,
        offset: 1,
        previous: null,
        total: 1,
      },
    };
    expect(
      browse(initialState, { type: "BROWSE_GET_CATEGORIES_SUCCESS", payload }),
    ).toEqual({
      ...initialState,
      categories: payload.categories,
    });
  });

  // Search

  it("should handle SEARCH_SUCCESS", () => {
    expect(
      browse(initialState, { type: "SEARCH_SUCCESS" }),
    ).toEqual(initialState);
  });

  // Browse Get New Releases

  it("should handle BROWSE_GET_NEW_RELEASES_SUCCESS", () => {
    const payload = {
      albums: {
        href: "",
        items: [],
        limit: 0,
        next:  null,
        offset: 1,
        previous: null,
        total: 1,
      },
    };
    expect(
      browse(initialState, { type: "BROWSE_GET_NEW_RELEASES_SUCCESS", payload }),
    ).toEqual({
      ...initialState,
      new_releases: payload,
    });
  });
});
