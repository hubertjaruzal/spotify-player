import {
  playerPlay,
  playerPlaySuccess,
  playerPlayFailure,
  playerPlayPreview,
  playerPlayPreviewSuccess,
  playerPlayPreviewFailure,
  playerPause,
  playerPauseSuccess,
  playerPauseFailure,
  playerGetUsersCurrentPlayback,
  playerGetUsersCurrentPlaybackSuccess,
  playerGetUsersCurrentPlaybackFailure,
} from "./index";


describe("Player actions", () => {
  // Player Play

  it("should return PLAYER_PLAY action", () => {
    const payload = {
      context_uri: "spotify:albums:123",
      position_ms: 2500,
    };
    const expectedAction = {
      type: "PLAYER_PLAY",
      payload,
    };

    expect(playerPlay(payload)).toEqual(expectedAction);
  });

  it("should return PLAYER_PLAY_SUCCESS action", () => {
    const expectedAction = {
      type: "PLAYER_PLAY_SUCCESS",
    };

    expect(playerPlaySuccess()).toEqual(expectedAction);
  });

  it("should return PLAYER_PLAY_FAILURE action", () => {
    const payload = {
      error: {
        status: 401,
        message: "",
      },
    };
    const expectedAction = {
      type: "PLAYER_PLAY_FAILURE",
      payload,
    };

    expect(playerPlayFailure(payload)).toEqual(expectedAction);
  });

  // Player Play Preview

  it("should return PLAYER_PLAY_PREVIEW_PREVIEW action", () => {
    const payload = {
      preview_url: "http://localhost:3000/preview.mp3",
    };
    const expectedAction = {
      type: "PLAYER_PLAY_PREVIEW",
      payload,
    };

    expect(playerPlayPreview(payload)).toEqual(expectedAction);
  });

  it("should return PLAYER_PLAY_PREVIEW_SUCCESS action", () => {
    const expectedAction = {
      type: "PLAYER_PLAY_PREVIEW_SUCCESS",
    };

    expect(playerPlayPreviewSuccess()).toEqual(expectedAction);
  });

  it("should return PLAYER_PLAY_PREVIEW_FAILURE action", () => {
    const payload = {
      error: {
        status: 401,
        message: "",
      },
    };
    const expectedAction = {
      type: "PLAYER_PLAY_PREVIEW_FAILURE",
      payload,
    };

    expect(playerPlayPreviewFailure(payload)).toEqual(expectedAction);
  });

  // Player Pause

  it("should return PLAYER_PAUSE action", () => {
    const expectedAction = {
      type: "PLAYER_PAUSE",
    };

    expect(playerPause()).toEqual(expectedAction);
  });

  it("should return PLAYER_PAUSE_SUCCESS action", () => {
    const expectedAction = {
      type: "PLAYER_PAUSE_SUCCESS",
    };

    expect(playerPauseSuccess()).toEqual(expectedAction);
  });

  it("should return PLAYER_PAUSE_FAILURE action", () => {
    const payload = {
      error: {
        status: 401,
        message: "",
      },
    };
    const expectedAction = {
      type: "PLAYER_PAUSE_FAILURE",
      payload,
    };

    expect(playerPauseFailure(payload)).toEqual(expectedAction);
  });

  // Player Get User's Current Playback

  it("should return PLAYER_GET_USERS_CURRENT_PLAYBACK action", () => {
    const expectedAction = {
      type: "PLAYER_GET_USERS_CURRENT_PLAYBACK",
    };

    expect(playerGetUsersCurrentPlayback()).toEqual(expectedAction);
  });

  it("should return PLAYER_GET_USERS_CURRENT_PLAYBACK_SUCCESS action", () => {
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
    const expectedAction = {
      type: "PLAYER_GET_USERS_CURRENT_PLAYBACK_SUCCESS",
      payload,
    };

    expect(playerGetUsersCurrentPlaybackSuccess(payload)).toEqual(expectedAction);
  });

  it("should return PLAYER_GET_USERS_CURRENT_PLAYBACK_FAILURE action", () => {
    const payload = {
      error: {
        status: 401,
        message: "",
      },
    };
    const expectedAction = {
      type: "PLAYER_GET_USERS_CURRENT_PLAYBACK_FAILURE",
      payload,
    };

    expect(playerGetUsersCurrentPlaybackFailure(payload)).toEqual(expectedAction);
  });
});
