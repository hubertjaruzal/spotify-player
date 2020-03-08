import { app } from "./index";

describe("app reducer", () => {
  const initialState = {
    search: {
      albums: {
        items: [],
      },
      artists: {
        items: [],
      },
      tracks: {
        items: [],
      },
      playlists: {
        items: [],
      },
    },
    global: {
      isLoading: false,
      error: {
        status: null,
        message: "",
      },
    },
  };

  it("should return the initial state", () => {
    expect(app(undefined, {} as any)).toEqual(initialState);
  });

  // Search

  it("should handle SEARCH", () => {
    expect(
      app(initialState, { type: "SEARCH" }),
    ).toEqual({
      ...initialState,
      global: {
        ...initialState.global,
        isLoading: true,
      },
    });
  });

  it("should handle SEARCH_SUCCESS", () => {
    const payload = {
      albums: {
        items: [
          {
            id: "123-album-id",
            images: [
              {
                height: 640,
                width: 640,
                url: "https://image/1",
              },
            ],
          },
        ],
      },
      artists: {
        items: [],
      },
      tracks: {
        items: [],
      },
      playlists: {
        items: [],
      },
    };
    expect(
      app(initialState, { type: "SEARCH_SUCCESS", payload }),
    ).toEqual({
      ...initialState,
      search: payload,
    });
  });

  it("should handle SEARCH_FAILURE", () => {
    const payload = {
      error: {
        status: 401,
        message: "",
      },
    };
    expect(
      app(initialState, { type: "SEARCH_FAILURE", payload }),
    ).toEqual({
      ...initialState,
      global: {
        ...initialState.global,
        error: payload.error,
      },
    });
  });

  // Browse Get Categories

  it("should handle BROWSE_GET_CATEGORIES_SUCCESS", () => {
    expect(
      app({
        ...initialState,
        global: {
          ...initialState.global,
          isLoading: true,
        },
      }, { type: "BROWSE_GET_CATEGORIES_SUCCESS" }),
    ).toEqual(initialState);
  });

  // Other

  it("should handle RESET_GLOBAL_ERROR", () => {
    expect(
      app(
        {
          ...initialState,
          global: {
            ...initialState.global,
            error: {
              status: 401,
              message: "",
            },
          },
        },
        { type: "RESET_GLOBAL_ERROR" },
      ),
    ).toEqual(initialState);
  });
});
