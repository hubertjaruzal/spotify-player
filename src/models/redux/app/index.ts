import { ErrorsPayload } from "../../common";

export interface appStateModel {
  search: SearchObjectPayload;
  global: {
    isLoading: boolean;
    error: {
      status: number | null;
      message: string;
    };
  };
};

export interface SearchCategoryObject {
  items: any[];
}

// Search

const SEARCH = "SEARCH";
const SEARCH_SUCCESS = "SEARCH_SUCCESS";
const SEARCH_FAILURE = "SEARCH_FAILURE";

export interface searchPayload {
  query: string;
};

export interface SearchObjectPayload {
  albums: SearchCategoryObject;
  artists: SearchCategoryObject;
  tracks: SearchCategoryObject;
  playlists: SearchCategoryObject;
}

export interface search {
  ({ query: string }: searchPayload): any;
};

export interface searchAction {
  type: typeof SEARCH;
  payload: searchPayload;
};

export interface searchSuccessAction {
  type: typeof SEARCH_SUCCESS;
  payload: SearchObjectPayload;
};

export interface searchFailureAction {
  type: typeof SEARCH_FAILURE;
  payload: ErrorsPayload;
};

// Other

const RESET_GLOBAL_ERROR = "RESET_GLOBAL_ERROR";

export interface resetGlobalError {
  (): any;
};

export interface resetGlobalErrorAction {
  type: typeof RESET_GLOBAL_ERROR;
};
