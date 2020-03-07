import { ajax } from "rxjs/ajax";
import { map, catchError } from "rxjs/operators";
import { of } from "rxjs";

export const defaultHeaders = () => ({
  "Content-Type": "application/json",
});

export const apiCall = (
  url: string,
  method: any,
  body: any,
  onSuccess: any,
  onFailure: any,
  headers: any = defaultHeaders,
) => {
  return ajax({
    url,
    method,
    headers,
    body,
  }).pipe(
    map(onSuccess),
    catchError(error => {
      return of(onFailure(error.response));
    }),
  );
};

export const saveTokenInLocalStorage = (token: string, name: string) => {
  if (localStorage) {
    localStorage.setItem(`player_${name}`, token);
  }
};

export const getTokenFromLocalStorage = (name: string) => {
  if (localStorage) {
    const token = localStorage.getItem(`player_${name}`);
    return token ? token : "";
  }
  return "";
};
