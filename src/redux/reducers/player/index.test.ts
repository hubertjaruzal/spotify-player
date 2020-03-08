import { player } from "./index";

describe("player reducer", () => {
  const initialState = {
    item: {
      artists: [],
      album: {
        images: [],
      },
      uri: "",
    },
    progress_ms: 0,
    is_playing: false,
    preview_url: "",
  };

  it("should return the initial state", () => {
    expect(player(undefined, {} as any)).toEqual(initialState);
  });

  // Player Get User's Current Playback

  it("should handle PLAYER_GET_USERS_CURRENT_PLAYBACK_SUCCESS", () => {
    const payload = {
      item: {
        artists: [
          {
            name: "name",
          },
        ],
        album: {
          images: [
            {
              width: 640,
              url: "img-url",
              height: 640,
            },
          ],
        },
        uri: "spotify:albums:123",
      },
      progress_ms: 0,
      is_playing: true,
    };
    expect(
      player(initialState, { type: "PLAYER_GET_USERS_CURRENT_PLAYBACK_SUCCESS", payload }),
    ).toEqual({
      ...initialState,
      ...payload,
    });
  });

  // Player Play Preview

  it("should handle PLAYER_PLAY_PREVIEW", () => {
    const payload = {
      preview_url: "http://localhost:3000/preview.mp3",
    };
    expect(
      player(initialState, { type: "PLAYER_PLAY_PREVIEW", payload }),
    ).toEqual({
      ...initialState,
      preview_url: "http://localhost:3000/preview.mp3",
    });
  });
});
