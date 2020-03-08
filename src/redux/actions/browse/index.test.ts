import {
  browseGetCategories,
  browseGetCategoriesSuccess,
  browseGetCategoriesFailure,
  browseGetNewReleases,
  browseGetNewReleasesSuccess,
  browseGetNewReleasesFailure,
  browseGetCategoryPlaylists,
  browseGetCategoryPlaylistsSuccess,
  browseGetCategoryPlaylistsFailure,
} from "./index";


describe("Browse actions", () => {
  // Browse Get Categories

  it("should return BROWSE_GET_CATEGORIES action", () => {
    const expectedAction = {
      type: "BROWSE_GET_CATEGORIES",
    };

    expect(browseGetCategories()).toEqual(expectedAction);
  });

  it("should return BROWSE_GET_CATEGORIES_SUCCESS action", () => {
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
    const expectedAction = {
      type: "BROWSE_GET_CATEGORIES_SUCCESS",
      payload,
    };

    expect(browseGetCategoriesSuccess(payload)).toEqual(expectedAction);
  });

  it("should return BROWSE_GET_CATEGORIES_FAILURE action", () => {
    const payload = {
      error: {
        status: 401,
        message: "",
      },
    };
    const expectedAction = {
      type: "BROWSE_GET_CATEGORIES_FAILURE",
      payload,
    };

    expect(browseGetCategoriesFailure(payload)).toEqual(expectedAction);
  });

  // Browse Get New Releases

  it("should return BROWSE_GET_NEW_RELEASES action", () => {
    const expectedAction = {
      type: "BROWSE_GET_NEW_RELEASES",
    };

    expect(browseGetNewReleases()).toEqual(expectedAction);
  });

  it("should return BROWSE_GET_NEW_RELEASES_SUCCESS action", () => {
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
    const expectedAction = {
      type: "BROWSE_GET_NEW_RELEASES_SUCCESS",
      payload,
    };

    expect(browseGetNewReleasesSuccess(payload)).toEqual(expectedAction);
  });

  it("should return BROWSE_GET_NEW_RELEASES_FAILURE action", () => {
    const payload = {
      error: {
        status: 401,
        message: "",
      },
    };
    const expectedAction = {
      type: "BROWSE_GET_NEW_RELEASES_FAILURE",
      payload,
    };

    expect(browseGetNewReleasesFailure(payload)).toEqual(expectedAction);
  });

  // Browse Get Category Playlists

  it("should return BROWSE_GET_CATEGORY_PLAYLISTS action", () => {
    const payload = {
      category_id: "123",
    };
    const expectedAction = {
      type: "BROWSE_GET_CATEGORY_PLAYLISTS",
      payload,
    };

    expect(browseGetCategoryPlaylists(payload)).toEqual(expectedAction);
  });

  it("should return BROWSE_GET_CATEGORY_PLAYLISTS_SUCCESS action", () => {
    const payload = {
      playlists: {
        collaborative: false,
        description: "",
        external_urls: {},
        href: "",
        id: "",
        images: [],
        name: "",
        owner: {},
        public: null,
        tracks: {
          href: "",
          total: 0,
        },
        type: "",
        uri: "",
      },
    };
    const expectedAction = {
      type: "BROWSE_GET_CATEGORY_PLAYLISTS_SUCCESS",
      payload,
    };

    expect(browseGetCategoryPlaylistsSuccess(payload)).toEqual(expectedAction);
  });

  it("should return BROWSE_GET_CATEGORY_PLAYLISTS_FAILURE action", () => {
    const payload = {
      error: {
        status: 401,
        message: "",
      },
    };
    const expectedAction = {
      type: "BROWSE_GET_CATEGORY_PLAYLISTS_FAILURE",
      payload,
    };

    expect(browseGetCategoryPlaylistsFailure(payload)).toEqual(expectedAction);
  });
});
