import { tracks } from "./index";

describe("tracks reducer", () => {
  const initialState = {
    items: [],
  };

  it("should return the initial state", () => {
    expect(tracks(undefined, {} as any)).toEqual(initialState);
  });

  // Get Tracks

  it("should handle GET_TRACKS_SUCCESS", () => {
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
    expect(
      tracks(initialState, { type: "GET_TRACKS_SUCCESS", payload }),
    ).toEqual({
      ...initialState,
      items: payload.items,
    });
  });
});
