import {
  getTracks,
  getTracksSuccess,
  getTracksFailure,
} from "./index";


describe("Tracks actions", () => {
  // Get Tracks

  it("should return GET_TRACKS action", () => {
    const payload = {
      id: "123",
      type: "playlists",
    };
    const expectedAction = {
      type: "GET_TRACKS",
      payload,
    };

    expect(getTracks(payload)).toEqual(expectedAction);
  });

  it("should return GET_TRACKS_SUCCESS action", () => {
    const payload = {
      items: [
        {
          album: {},
          artists: [],
          available_markets: [],
          disc_number: 0,
          duration_ms: 0,
          explicit: false,
          external_ids: {},
          href: "",
          id: "",
          is_playable: false,
          linked_from: {},
          restrictions: {},
          name: "",
          popularity: 0,
          preview_url: "",
          track_number: 0,
          type: "",
          uri: "",
        },
      ],
    };
    const expectedAction = {
      type: "GET_TRACKS_SUCCESS",
      payload,
    };

    expect(getTracksSuccess(payload)).toEqual(expectedAction);
  });

  it("should return GET_TRACKS_FAILURE action", () => {
    const payload = {
      error: {
        status: 401,
        message: "",
      },
    };
    const expectedAction = {
      type: "GET_TRACKS_FAILURE",
      payload,
    };

    expect(getTracksFailure(payload)).toEqual(expectedAction);
  });
});
