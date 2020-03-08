import { prepareTracksPayload } from "../../../services/common";

// Types
import {
  getTracksAction,
  getTracksSuccessAction,
  getTracksFailureAction,
  getTracksPayload,
  getTracksSuccessPayload,
} from "../../../models/redux/tracks";
import { ErrorsPayload } from "../../../models/common";


// Get Tracks

export const getTracks = (payload: getTracksPayload): getTracksAction => {
  return {
    type: "GET_TRACKS",
    payload,
  };
};

export const getTracksSuccess = (payload: getTracksSuccessPayload): getTracksSuccessAction => {
  return {
    type: "GET_TRACKS_SUCCESS",
    payload: prepareTracksPayload(payload),
  };
};

export const getTracksFailure = (payload: ErrorsPayload): getTracksFailureAction => {
  return {
    type: "GET_TRACKS_FAILURE",
    payload,
  };
};
