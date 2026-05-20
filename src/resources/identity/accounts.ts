// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AddressesAPI from '../sales/addresses';

export class Accounts extends APIResource {}

/**
 * Account with optional branding and portal sub-resources.
 */
export interface Account {
  /**
   * Account ID.
   */
  id: string;

  /**
   * Branding metadata for an account.
   */
  branding: Account.Branding | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Address with associated geolocation.
   */
  default_billing_address: AddressesAPI.Address | null;

  /**
   * Address with associated geolocation.
   */
  default_shipping_address: AddressesAPI.Address | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'account';

  /**
   * Portal metadata for an account.
   */
  portal: Account.Portal | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export namespace Account {
  /**
   * Branding metadata for an account.
   */
  export interface Branding {
    /**
     * Branding ID.
     */
    id: string;

    /**
     * Creation timestamp.
     */
    created_at: string;

    /**
     * Facebook handle.
     */
    facebook_handle: string | null;

    /**
     * Instagram handle.
     */
    instagram_handle: string | null;

    /**
     * LinkedIn handle.
     */
    linkedin_handle: string | null;

    /**
     * Logo URL.
     */
    logo_url: string | null;

    /**
     * Resource type identifier.
     */
    object: 'account_branding';

    /**
     * Support phone number.
     */
    phone_number: string | null;

    /**
     * Support email address.
     */
    support_email: string | null;

    /**
     * Twitter handle.
     */
    twitter_handle: string | null;

    /**
     * Last updated timestamp.
     */
    updated_at: string;

    /**
     * Website URL.
     */
    website_url: string | null;
  }

  /**
   * Portal metadata for an account.
   */
  export interface Portal {
    /**
     * Portal ID.
     */
    id: string;

    /**
     * Creation timestamp.
     */
    created_at: string;

    /**
     * Resource type identifier.
     */
    object: 'account_portal';

    /**
     * Portal slug.
     */
    slug: string;

    /**
     * Last updated timestamp.
     */
    updated_at: string;
  }
}

export declare namespace Accounts {
  export { type Account as Account };
}
