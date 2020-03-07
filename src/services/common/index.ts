import { getTokenFromLocalStorage } from "../api";

export const doesAccessTokenExist = (accessTokenFromState: string) => {
  return !!(getTokenFromLocalStorage("access_token") || accessTokenFromState);
};
