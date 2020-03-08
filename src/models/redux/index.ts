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
  id: string;
  name: string;
  type: string;
  uri: string;
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

export interface newReleasesItemObject {
  album_type: string;
  artists: artistObject[];
  available_markets: string[];
  external_urls: any;
  href: string;
  id: string;
  images: imageObject[];
}

export interface newReleasesObject {
  href: string;
  items: newReleasesItemObject[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}
