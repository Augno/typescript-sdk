// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AddressesAPI from './addresses';
import {
  Address,
  AddressCreateParams,
  AddressDeleteParams,
  AddressDeleteResponse,
  AddressListResponse,
  AddressRetrieveParams,
  AddressUpdateParams,
  Addresses,
} from './addresses';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage account details, branding, portal, and logo.
 */
export class Accounts extends APIResource {
  addresses: AddressesAPI.Addresses = new AddressesAPI.Addresses(this._client);

  /**
   * This endpoint returns a full account by its ID, including optional branding and
   * portal sub-resources.
   *
   * @example
   * ```ts
   * const account = await client.core.accounts.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: AccountRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Account> {
    return this._client.get(path`/v1/core/accounts/${id}`, { query, ...options });
  }

  /**
   * This endpoint partially updates an account's name, branding fields, and/or
   * portal slug. Only provided fields are updated; absent fields retain their
   * current values.
   *
   * @example
   * ```ts
   * const account = await client.core.accounts.update('id', {
   *   name: 'Acme Inc.',
   * });
   * ```
   */
  update(
    id: string,
    params: AccountUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Account> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/core/accounts/${id}`, { query: { include }, body, ...options });
  }

  /**
   * This endpoint returns a presigned URL for the account's logo image. The URL
   * expires after one hour.
   *
   * @example
   * ```ts
   * const response = await client.core.accounts.getLogoURL(
   *   'id',
   * );
   * ```
   */
  getLogoURL(id: string, options?: RequestOptions): APIPromise<AccountGetLogoURLResponse> {
    return this._client.get(path`/v1/core/accounts/${id}/logo`, options);
  }

  /**
   * This endpoint returns a minimal public account by its portal slug. This endpoint
   * is unauthenticated.
   *
   * @example
   * ```ts
   * const response = await client.core.accounts.retrieveBySlug(
   *   'slug',
   * );
   * ```
   */
  retrieveBySlug(slug: string, options?: RequestOptions): APIPromise<AccountRetrieveBySlugResponse> {
    return this._client.get(path`/v1/core/accounts/slug/${slug}`, options);
  }

  /**
   * This endpoint uploads a logo image for an account. The image is sent as a raw
   * binary body with the appropriate Content-Type header.
   *
   * @example
   * ```ts
   * const response = await client.core.accounts.uploadPhoto(
   *   'id',
   * );
   * ```
   */
  uploadPhoto(id: string, options?: RequestOptions): APIPromise<AccountUploadPhotoResponse> {
    return this._client.put(path`/v1/core/accounts/${id}/photo`, options);
  }
}

/**
 * Account represents a full account with optional branding and portal
 * sub-resources.
 */
export interface Account {
  /**
   * The unique identifier for the account.
   */
  id: string;

  /**
   * AccountBranding holds the branding metadata for an account.
   */
  branding: Account.Branding | null;

  /**
   * The timestamp when the account was created.
   */
  created_at: string;

  /**
   * The default billing address ID.
   */
  default_billing_address_id: string | null;

  /**
   * The default shipping address ID.
   */
  default_shipping_address_id: string | null;

  /**
   * The display name of the account.
   */
  name: string;

  /**
   * The resource type identifier.
   */
  object: 'account';

  /**
   * AccountPortal holds the portal metadata for an account.
   */
  portal: Account.Portal | null;

  /**
   * The timestamp when the account was last updated.
   */
  updated_at: string;
}

export namespace Account {
  /**
   * AccountBranding holds the branding metadata for an account.
   */
  export interface Branding {
    /**
     * The unique identifier for the branding record.
     */
    id: string;

    /**
     * The timestamp when the branding was created.
     */
    created_at: string;

    /**
     * The Facebook handle.
     */
    facebook_handle: string | null;

    /**
     * The Instagram handle.
     */
    instagram_handle: string | null;

    /**
     * The LinkedIn handle.
     */
    linkedin_handle: string | null;

    /**
     * The logo URL (S3 key).
     */
    logo_url: string | null;

    /**
     * The resource type identifier.
     */
    object: 'account_branding';

    /**
     * The support phone number.
     */
    phone_number: string | null;

    /**
     * The support email address.
     */
    support_email: string | null;

    /**
     * The Twitter handle.
     */
    twitter_handle: string | null;

    /**
     * The timestamp when the branding was last updated.
     */
    updated_at: string;

    /**
     * The website URL.
     */
    website_url: string | null;
  }

  /**
   * AccountPortal holds the portal metadata for an account.
   */
  export interface Portal {
    /**
     * The unique identifier for the portal record.
     */
    id: string;

    /**
     * The timestamp when the portal was created.
     */
    created_at: string;

    /**
     * The resource type identifier.
     */
    object: 'account_portal';

    /**
     * The portal slug.
     */
    slug: string;

    /**
     * The timestamp when the portal was last updated.
     */
    updated_at: string;
  }
}

/**
 * AccountLogoURL holds a presigned URL for an account's logo.
 */
export interface AccountGetLogoURLResponse {
  /**
   * The presigned URL for the logo image, or null if no logo exists.
   */
  url: string | null;
}

/**
 * PublicAccount is a minimal account representation for unauthenticated slug
 * lookups.
 */
export interface AccountRetrieveBySlugResponse {
  /**
   * The unique identifier for the account.
   */
  id: string;

  /**
   * The default billing address ID.
   */
  default_billing_address_id: string | null;

  /**
   * The logo URL.
   */
  logo_url: string | null;

  /**
   * The display name of the account.
   */
  name: string;

  /**
   * The resource type identifier.
   */
  object: 'public_account';

  /**
   * The portal slug.
   */
  slug: string;

  /**
   * The support email address.
   */
  support_email: string | null;
}

/**
 * AccountPhotoUploadResult is the response for a photo upload.
 */
export interface AccountUploadPhotoResponse {
  /**
   * Whether the upload was successful.
   */
  success: boolean;
}

export interface AccountRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'branding' | 'portal'>;
}

export interface AccountUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'branding' | 'portal'>;

  /**
   * Body param: The Facebook handle.
   */
  facebook_handle?: string | null;

  /**
   * Body param: The Instagram handle.
   */
  instagram_handle?: string | null;

  /**
   * Body param: The LinkedIn handle.
   */
  linkedin_handle?: string | null;

  /**
   * Body param: The display name of the account.
   */
  name?: string | null;

  /**
   * Body param: The support phone number.
   */
  phone_number?: string | null;

  /**
   * Body param: The portal slug.
   */
  slug?: string | null;

  /**
   * Body param: The support email address.
   */
  support_email?: string | null;

  /**
   * Body param: The Twitter handle.
   */
  twitter_handle?: string | null;

  /**
   * Body param: The website URL.
   */
  website_url?: string | null;
}

Accounts.Addresses = Addresses;

export declare namespace Accounts {
  export {
    type Account as Account,
    type AccountGetLogoURLResponse as AccountGetLogoURLResponse,
    type AccountRetrieveBySlugResponse as AccountRetrieveBySlugResponse,
    type AccountUploadPhotoResponse as AccountUploadPhotoResponse,
    type AccountRetrieveParams as AccountRetrieveParams,
    type AccountUpdateParams as AccountUpdateParams,
  };

  export {
    Addresses as Addresses,
    type Address as Address,
    type AddressListResponse as AddressListResponse,
    type AddressDeleteResponse as AddressDeleteResponse,
    type AddressCreateParams as AddressCreateParams,
    type AddressRetrieveParams as AddressRetrieveParams,
    type AddressUpdateParams as AddressUpdateParams,
    type AddressDeleteParams as AddressDeleteParams,
  };
}
