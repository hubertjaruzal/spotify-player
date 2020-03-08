import React from "react";
import { mount } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

import Core from "./index";

describe("Core component", () => {
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
  const state = { ...initialState };
  const store = mockStore(state);
  let mountedWrapper: any;

  beforeEach(() => {
    mountedWrapper = mount(
      <Provider store={store}>
        <Core/>
      </Provider>,
    );
  });

  it("should mount", () => {
    expect(mountedWrapper.find("Core").length).toBe(1);
  });
});
