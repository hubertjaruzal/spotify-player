export interface XHRPayload {
  xhr: XMLHttpRequest;
  response: any;
};

export interface ErrorsPayload {
  error: ErrorObject;
};

export interface ErrorObject {
  status: number;
  message: string;
};
