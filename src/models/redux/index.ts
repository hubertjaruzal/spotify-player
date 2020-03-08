export interface actionModel {
  type: string;
  payload?: any;
};

export interface imageObject {
  height: number;
  url: string;
  width: number;
};

export interface artistObject {
  name: string;
};

export interface categoryObject {
  href: string;
  items: categoryItemObject[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
};

export interface categoryItemObject {
  id: string;
  name: string;
  href: string;
  icons: imageObject[];
}
