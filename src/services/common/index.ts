import { getTokenFromLocalStorage } from "../api";

export const doesAccessTokenExist = (accessTokenFromState: string) => {
  return !!(getTokenFromLocalStorage("access_token") || accessTokenFromState);
};

export const prepareTracksPayload = (payload: any) => {
  return { items: payload.items.map((item: any) => item.track ? item.track : item) };
};

export const isSafari = () => {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};

export const isMobile = () => {
  return (( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ));
};
