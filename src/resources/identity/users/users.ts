// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PhotoAPI from './photo';
import { Photo } from './photo';

export class Users extends APIResource {
  photo: PhotoAPI.Photo = new PhotoAPI.Photo(this._client);
}

Users.Photo = Photo;

export declare namespace Users {
  export { Photo as Photo };
}
