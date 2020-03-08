import pathOr from "ramda/src/pathOr";

// Types
import { actionModel } from "../../../models/redux";
import { playerStateModel } from "../../../models/redux/player";


const initialState: playerStateModel = {
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

export const player = (state = initialState, action: actionModel) => {
  switch (action.type) {
    case "PLAYER_GET_USERS_CURRENT_PLAYBACK_SUCCESS":
      return {
        ...state,
        item: {
          ...state.item,
          artists: pathOr([], ["payload", "item", "artists"], action),
          album: {
            ...state.item.album,
            images: pathOr("", ["payload", "item", "album", "images"], action),
          },
          uri: pathOr("", ["payload", "item", "uri"], action),
        },
        progress_ms: pathOr("", ["payload", "progress_ms"], action),
        is_playing: pathOr("", ["payload", "is_playing"], action),
      };
    case "PLAYER_PLAY_PREVIEW":
      return {
        ...state,
        preview_url: pathOr("", ["payload", "preview_url"], action),
      };
    default:
      return state;
  }
};
