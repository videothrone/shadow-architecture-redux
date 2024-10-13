export type PlaceProperties = {
  PLACE_ID: number;
  NAME: string;
  SHORT_NAME: string;
  DESCRIPTION: string;
  ADDRESS: string;
  FULL_DESCRIPTION: string;
  IMAGEURL: string;
  DIRECTION: string;
};

export type Place = {
  properties: PlaceProperties;
  coordinates: number[];
};
