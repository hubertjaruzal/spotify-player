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

export interface trackObject {
  href: string;
  total: number;
}

export interface trackFullObject {
  album: any;
  artists: any;
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: any;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: any;
  restrictions: any;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface categoryPlaylistsObject {
  collaborative: boolean;
  description: string;
  external_urls: any;
  href: string;
  id: string;
  images: imageObject[];
  name: string;
  owner: any;
  public: boolean | null;
  tracks: trackObject;
  type: string;
  uri: string;
}
