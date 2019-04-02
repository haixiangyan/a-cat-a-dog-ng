// Image Service
export interface IGetImagesParams {
  size?: string;
  mime_types?: string;
  format?: string;
  order?: string;
  page?: string;
  limit?: string;
  category_ids?: string;

  [params: string]: string;
}

export interface IGetUploadedImagesParams {
  size?: 'full' | 'med' | 'small' | 'thumb';
  include_vote?: string;
  include_favourite?: string;
  limit?: number;
  page?: number;
  order?: 'DESC' | 'ASC';
  sub_id?: string;
  breed_ids?: string;
  category_ids?: string;
  format?: 'json';
  original_filename?: string;
}

export interface IUploadImageData {
  file: File;
  sub_id?: string;
}

export interface IUploadImageResult {
  approved: number;
  height: number;
  id: string;
  original_filename: string;
  pending: string;
  sub_id: string;
  url: string;
  width: number;
}

export interface IUploadImageError {
  headers: any;
  level: string;
  message: string;
  status: number;
}

// Favourites Service
export interface IGetFavouritesParams {
  sub_id: string;
  [params: string]: string;
}

export interface IAddFavouriteData {
  image_id: string;
  sub_id: string;
}

// Votes Service
export interface IGetVotesParams {
  sub_id?: string;
  [params: string]: string;
}

export interface IAddVoteData {
  image_id: string;
  sub_id: string;
  value: number;
}

// Breeds Service
export interface IGetBreedsParams {
  limit?: number;
  page?: number;
}


// Sources Service
export interface IGetSourcesParams {
  limit?: number;
  page?: number;
}

export class User {
  subId: string;
  type: 'CAT' | 'DOG';
}
