// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AddressesAPI from './addresses';
import {
  Address,
  AddressCreateParams,
  AddressDeleteParams,
  AddressRetrieveParams,
  AddressUpdateParams,
  Addresses,
  GetCustomerAddress,
} from './addresses';

export class Customers extends APIResource {
  addresses: AddressesAPI.Addresses = new AddressesAPI.Addresses(this._client);
}

Customers.Addresses = Addresses;

export declare namespace Customers {
  export {
    Addresses as Addresses,
    type Address as Address,
    type GetCustomerAddress as GetCustomerAddress,
    type AddressCreateParams as AddressCreateParams,
    type AddressRetrieveParams as AddressRetrieveParams,
    type AddressUpdateParams as AddressUpdateParams,
    type AddressDeleteParams as AddressDeleteParams,
  };
}
