// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LocationTypesAPI from './location-types';
import { ListLocationType, LocationType, LocationTypeListParams, LocationTypes } from './location-types';
import * as LocationsAPI from './locations';
import {
  CreateLocationRequest,
  LocationCreateParams,
  LocationDeleteResponse,
  LocationListParams,
  LocationRetrieveParams,
  LocationUpdateParams,
  Locations,
  UpdateLocationRequest,
} from './locations';
import * as ScanningStationsAPI from './scanning-stations';
import {
  CreateScanningStationRequest,
  ScanningStationCreateParams,
  ScanningStationDeleteResponse,
  ScanningStationListParams,
  ScanningStationRetrieveParams,
  ScanningStationUpdateParams,
  ScanningStations,
  UpdateScanningStationRequest,
} from './scanning-stations';
import * as ShippingTermsAPI from './shipping-terms';
import {
  CreateShippingTermRequest,
  ListShippingTerm,
  ShippingTermCreateParams,
  ShippingTermDeleteResponse,
  ShippingTermListParams,
  ShippingTermRetrieveParams,
  ShippingTermUpdateParams,
  ShippingTerms,
  UpdateShippingTermRequest,
} from './shipping-terms';
import * as CarriersAPI from './carriers/carriers';
import {
  CarrierCreateParams,
  CarrierDeleteResponse,
  CarrierListParams,
  CarrierRetrieveParams,
  CarrierUpdateParams,
  Carriers,
  CreateCarrierRequest,
  ListCarrier,
  UpdateCarrierRequest,
} from './carriers/carriers';

export class Operations extends APIResource {
  shippingTerms: ShippingTermsAPI.ShippingTerms = new ShippingTermsAPI.ShippingTerms(this._client);
  carriers: CarriersAPI.Carriers = new CarriersAPI.Carriers(this._client);
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
  locationTypes: LocationTypesAPI.LocationTypes = new LocationTypesAPI.LocationTypes(this._client);
  scanningStations: ScanningStationsAPI.ScanningStations = new ScanningStationsAPI.ScanningStations(
    this._client,
  );
}

Operations.ShippingTerms = ShippingTerms;
Operations.Carriers = Carriers;
Operations.Locations = Locations;
Operations.LocationTypes = LocationTypes;
Operations.ScanningStations = ScanningStations;

export declare namespace Operations {
  export {
    ShippingTerms as ShippingTerms,
    type CreateShippingTermRequest as CreateShippingTermRequest,
    type ListShippingTerm as ListShippingTerm,
    type UpdateShippingTermRequest as UpdateShippingTermRequest,
    type ShippingTermDeleteResponse as ShippingTermDeleteResponse,
    type ShippingTermCreateParams as ShippingTermCreateParams,
    type ShippingTermRetrieveParams as ShippingTermRetrieveParams,
    type ShippingTermUpdateParams as ShippingTermUpdateParams,
    type ShippingTermListParams as ShippingTermListParams,
  };

  export {
    Carriers as Carriers,
    type CreateCarrierRequest as CreateCarrierRequest,
    type ListCarrier as ListCarrier,
    type UpdateCarrierRequest as UpdateCarrierRequest,
    type CarrierDeleteResponse as CarrierDeleteResponse,
    type CarrierCreateParams as CarrierCreateParams,
    type CarrierRetrieveParams as CarrierRetrieveParams,
    type CarrierUpdateParams as CarrierUpdateParams,
    type CarrierListParams as CarrierListParams,
  };

  export {
    Locations as Locations,
    type CreateLocationRequest as CreateLocationRequest,
    type UpdateLocationRequest as UpdateLocationRequest,
    type LocationDeleteResponse as LocationDeleteResponse,
    type LocationCreateParams as LocationCreateParams,
    type LocationRetrieveParams as LocationRetrieveParams,
    type LocationUpdateParams as LocationUpdateParams,
    type LocationListParams as LocationListParams,
  };

  export {
    LocationTypes as LocationTypes,
    type ListLocationType as ListLocationType,
    type LocationType as LocationType,
    type LocationTypeListParams as LocationTypeListParams,
  };

  export {
    ScanningStations as ScanningStations,
    type CreateScanningStationRequest as CreateScanningStationRequest,
    type UpdateScanningStationRequest as UpdateScanningStationRequest,
    type ScanningStationDeleteResponse as ScanningStationDeleteResponse,
    type ScanningStationCreateParams as ScanningStationCreateParams,
    type ScanningStationRetrieveParams as ScanningStationRetrieveParams,
    type ScanningStationUpdateParams as ScanningStationUpdateParams,
    type ScanningStationListParams as ScanningStationListParams,
  };
}
