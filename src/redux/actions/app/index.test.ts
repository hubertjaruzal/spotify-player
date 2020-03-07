import {
  resetGlobalError,
  search,
  searchSuccess,
  searchFailure,
} from "./index";


describe("Authorize actions", () => {
  // Search

  it("should return SEARCH action", () => {
    const payload = {
      query: "1234",
    };
    const expectedAction = {
      type: "SEARCH",
      payload,
    };

    expect(search(payload)).toEqual(expectedAction);
  });

  it("should return SEARCH_SUCCESS action", () => {
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
    const expectedAction = {
      type: "SEARCH_SUCCESS",
      payload,
    };

    expect(searchSuccess(payload)).toEqual(expectedAction);
  });

  it("should return SEARCH_FAILURE action", () => {
    const payload = {
      error: {
        status: 401,
        message: "",
      },
    };
    const expectedAction = {
      type: "SEARCH_FAILURE",
      payload,
    };

    expect(searchFailure(payload)).toEqual(expectedAction);
  });

  // Other

  it("should return RESET_GLOBAL_ERROR action", () => {
    const expectedAction = {
      type: "RESET_GLOBAL_ERROR",
    };

    expect(resetGlobalError()).toEqual(expectedAction);
  });
});
