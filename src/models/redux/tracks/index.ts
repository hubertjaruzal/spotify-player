import { ErrorsPayload } from "../../common";
import { trackFullObject } from "..";


export interface tracksStateModel {
  items: trackFullObject[] | [];
};

// Get Tracks

const GET_TRACKS = "GET_TRACKS";
const GET_TRACKS_SUCCESS = "GET_TRACKS_SUCCESS";
const GET_TRACKS_FAILURE = "GET_TRACKS_FAILURE";

export interface getTracksPayload {
  id: string;
  type: string;
};

export interface getTracksSuccessPayload {
  items: trackFullObject[];
};

export interface getTracks {
  ({ id }: getTracksPayload): any;
};

export interface getTracksAction {
  type: typeof GET_TRACKS;
  payload: getTracksPayload;
};

export interface getTracksSuccessAction {
  type: typeof GET_TRACKS_SUCCESS;
  payload: getTracksSuccessPayload;
};

export interface getTracksFailureAction {
  type: typeof GET_TRACKS_FAILURE;
  payload: ErrorsPayload;
};
