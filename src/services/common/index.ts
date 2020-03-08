import { getTokenFromLocalStorage } from "../api";

export const doesAccessTokenExist = (accessTokenFromState: string) => {
  return !!(getTokenFromLocalStorage("access_token") || accessTokenFromState);
};

export const prepareTracksPayload = (payload: any) => {
  return { items: payload.items.map((item: any) => item.track ? item.track : item) };
};
