// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import * as UnitsAPI from './units';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage account prices.
 */
export class AccountPrices extends APIResource {
  /**
   * This endpoint creates a new account price for a recipient (customer) account.
   * The price includes a rate value with numerator and denominator units, and can
   * optionally be constrained to specific item categories and attributes.
   *
   * @example
   * ```ts
   * const accountPrice = await client.core.accountPrices.create(
   *   {
   *     attribute_ids: ['at_01jm4r6700f8nwq3v5hx2d9ktp'],
   *     category_ids: ['ic_01jm4r6700f8nwq3v5hx2d9ktp'],
   *     product_line_id: 'pl_01jm4r6700f8nwq3v5hx2d9ktp',
   *     rate_denominator_unit_id:
   *       'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *     rate_numerator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *     rate_value: '25.500000000000000000000000000000',
   *     recipient_account_id: 'ac_01gf7a8200eaj8fke1xvw4h50x',
   *   },
   * );
   * ```
   */
  create(params: AccountPriceCreateParams, options?: RequestOptions): APIPromise<AccountPrice> {
    const { include, ...body } = params;
    return this._client.post('/v1/core/account-prices', { query: { include }, body, ...options });
  }

  /**
   * This endpoint returns a single account price by its ID. The account price must
   * belong to the requesting account.
   *
   * @example
   * ```ts
   * const accountPrice =
   *   await client.core.accountPrices.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: AccountPriceRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountPrice> {
    return this._client.get(path`/v1/core/account-prices/${id}`, { query, ...options });
  }

  /**
   * This endpoint partially updates an account price. Only provided fields are
   * updated; absent fields retain their current values. If category_ids or
   * attribute_ids are provided, they replace the existing set entirely.
   *
   * @example
   * ```ts
   * const accountPrice = await client.core.accountPrices.update(
   *   'id',
   *   { rate_value: '30.000000000000000000000000000000' },
   * );
   * ```
   */
  update(
    id: string,
    params: AccountPriceUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountPrice> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/core/account-prices/${id}`, { query: { include }, body, ...options });
  }

  /**
   * This endpoint returns a paginated list of account prices for the target account.
   * Supports cursor-based pagination, search by recipient account name or external
   * number, and filtering by recipient account ID.
   *
   * @example
   * ```ts
   * const accountPrices =
   *   await client.core.accountPrices.list();
   * ```
   */
  list(
    query: AccountPriceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountPriceListResponse> {
    return this._client.get('/v1/core/account-prices', { query, ...options });
  }

  /**
   * This endpoint deletes an account price. Associated category constraints,
   * attribute constraints, and the rate record are also removed.
   *
   * @example
   * ```ts
   * const accountPrice = await client.core.accountPrices.delete(
   *   'id',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<AccountPriceDeleteResponse> {
    return this._client.delete(path`/v1/core/account-prices/${id}`, options);
  }
}

/**
 * AccountPrice represents a customer-specific price for a product line.
 */
export interface AccountPrice {
  /**
   * The unique identifier for the account price.
   */
  id: string;

  /**
   * The attributes this price is constrained to.
   */
  attributes: Array<LightAttribute>;

  /**
   * The item categories this price is constrained to.
   */
  categories: Array<LightItemCategory>;

  /**
   * When this account price was created.
   */
  created_at: string;

  /**
   * The resource type identifier.
   */
  object: 'account_price';

  /**
   * LightProductLine represents a minimal product line reference.
   */
  product_line: LightProductLine | null;

  /**
   * Rate represents the rate (price per unit) for an account price.
   */
  rate: AccountPrice.Rate | null;

  /**
   * LightAccount represents a minimal account reference.
   */
  recipient_account: LightAccount | null;

  /**
   * When this account price was last updated.
   */
  updated_at: string;
}

export namespace AccountPrice {
  /**
   * Rate represents the rate (price per unit) for an account price.
   */
  export interface Rate {
    /**
     * The unique identifier for the rate.
     */
    id: string;

    /**
     * Unit represents a unit of measurement used for conversions and product
     * quantities.
     */
    denominator_unit: UnitsAPI.Unit | null;

    /**
     * Unit represents a unit of measurement used for conversions and product
     * quantities.
     */
    numerator_unit: UnitsAPI.Unit | null;

    /**
     * The resource type identifier.
     */
    object: 'rate';

    /**
     * The rate value as a decimal string.
     */
    value: string;
  }
}

/**
 * LightAccount represents a minimal account reference.
 */
export interface LightAccount {
  /**
   * The unique identifier for the account.
   */
  id: string;

  /**
   * The display name of the account.
   */
  name: string;

  /**
   * The resource type identifier.
   */
  object: 'account';
}

/**
 * LightAttribute represents a minimal attribute reference.
 */
export interface LightAttribute {
  /**
   * The unique identifier for the attribute.
   */
  id: string;

  /**
   * The resource type identifier.
   */
  object: 'attribute';

  /**
   * The text value of the attribute.
   */
  text: string;
}

/**
 * LightItemCategory represents a minimal item category reference.
 */
export interface LightItemCategory {
  /**
   * The unique identifier for the item category.
   */
  id: string;

  /**
   * The display name of the item category.
   */
  name: string;

  /**
   * The resource type identifier.
   */
  object: 'item_category';
}

/**
 * LightProductLine represents a minimal product line reference.
 */
export interface LightProductLine {
  /**
   * The unique identifier for the product line.
   */
  id: string;

  /**
   * The display name of the product line.
   */
  name: string;

  /**
   * The resource type identifier.
   */
  object: 'product_line';
}

/**
 * A paginated list of AccountPrice resources
 */
export interface AccountPriceListResponse {
  /**
   * Array of AccountPrice resources in this page
   */
  data: Array<AccountPrice>;

  /**
   * Object type for AccountPrice list
   */
  object: 'list';

  /**
   * PageInfo contains cursor-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface AccountPriceDeleteResponse {}

export interface AccountPriceCreateParams {
  /**
   * Body param: The IDs of attributes to constrain this price to.
   */
  attribute_ids: Array<string>;

  /**
   * Body param: The IDs of item categories to constrain this price to.
   */
  category_ids: Array<string>;

  /**
   * Body param: The ID of the product line this price applies to.
   */
  product_line_id: string;

  /**
   * Body param: The ID of the denominator unit for the rate.
   */
  rate_denominator_unit_id: string;

  /**
   * Body param: The ID of the numerator unit for the rate.
   */
  rate_numerator_unit_id: string;

  /**
   * Body param: The rate value as a decimal string.
   */
  rate_value: string;

  /**
   * Body param: The ID of the recipient (customer) account.
   */
  recipient_account_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'recipient_account' | 'product_line'>;
}

export interface AccountPriceRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'recipient_account' | 'product_line'>;
}

export interface AccountPriceUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'recipient_account' | 'product_line'>;

  /**
   * Body param: The IDs of attributes to constrain this price to. Replaces existing
   * attributes.
   */
  attribute_ids?: Array<string> | null;

  /**
   * Body param: The IDs of item categories to constrain this price to. Replaces
   * existing categories.
   */
  category_ids?: Array<string> | null;

  /**
   * Body param: The ID of the product line this price applies to.
   */
  product_line_id?: string | null;

  /**
   * Body param: The ID of the denominator unit for the rate.
   */
  rate_denominator_unit_id?: string | null;

  /**
   * Body param: The ID of the numerator unit for the rate.
   */
  rate_numerator_unit_id?: string | null;

  /**
   * Body param: The rate value as a decimal string.
   */
  rate_value?: string | null;

  /**
   * Body param: The ID of the recipient (customer) account.
   */
  recipient_account_id?: string | null;
}

export interface AccountPriceListParams {
  /**
   * Filter by recipient account ID.
   */
  recipient_account_id?: string;
}

export declare namespace AccountPrices {
  export {
    type AccountPrice as AccountPrice,
    type LightAccount as LightAccount,
    type LightAttribute as LightAttribute,
    type LightItemCategory as LightItemCategory,
    type LightProductLine as LightProductLine,
    type AccountPriceListResponse as AccountPriceListResponse,
    type AccountPriceDeleteResponse as AccountPriceDeleteResponse,
    type AccountPriceCreateParams as AccountPriceCreateParams,
    type AccountPriceRetrieveParams as AccountPriceRetrieveParams,
    type AccountPriceUpdateParams as AccountPriceUpdateParams,
    type AccountPriceListParams as AccountPriceListParams,
  };
}
