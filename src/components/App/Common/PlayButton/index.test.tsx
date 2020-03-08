import React from "react";
import { mount } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

import PlayButton from "./index";

describe("PlayButton component", () => {
  const mockStore = configureMockStore();
  const initialState = {
    app: {
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
    },
    authorization: {
      access_token: "",
    },
    browse: {
      categories: {},
      new_releases: {},
      category_details: {},
    },
    player: {
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
    },
    tracks: {
      items: [],
    },
    user: {
      display_name: "",
      product: "",
    },
  };
  let mountedWrapperPremium: any;
  let mountedWrapper: any;
  const state = { ...initialState };
  let store: any;

  beforeEach(() => {
    store = mockStore(state);

    mountedWrapperPremium = mount(
      <Provider store={store}>
        <PlayButton
          item={{
            uri: "spotify:albums:123",
          }}
          isProductPremium
        />
      </Provider>,
    );

    mountedWrapper = mount(
      <Provider store={store}>
        <PlayButton
          item={{
            preview_url: "http://localhost:3000/file.mp3",
          }}
          isProductPremium={false}
        />
      </Provider>,
    );
  });

  it("should mount", () => {
    expect(mountedWrapperPremium.find("PlayButton").length).toBe(1);
    expect(mountedWrapper.find("PlayButton").length).toBe(1);
  });

  it("button click should call PLAYER_PLAY action", () => {
    mountedWrapperPremium.find("PlayButton button").at(0).simulate("click", { preventDefault () {} });

    expect(store.getActions()).toEqual([
      { type: "PLAYER_PLAY", payload: { context_uri: "spotify:albums:123" } },
    ]);
  });

  it("button click should call PLAYER_PLAY_PREVIEW action", () => {
    mountedWrapper.find("PlayButton button").at(0).simulate("click", { preventDefault () {} });

    expect(store.getActions()).toEqual([
      { type: "PLAYER_PLAY_PREVIEW", payload: { preview_url: "http://localhost:3000/file.mp3" } },
    ]);
  });
});
