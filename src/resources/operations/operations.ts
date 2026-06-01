// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LocationTypesAPI from './location-types';
import {
  ListLocationType,
  LocationType,
  LocationTypeListParams,
  LocationTypes,
  PageInfo,
} from './location-types';
import * as LocationsAPI from './locations';
import {
  CreateLocationRequest,
  ListLocation,
  Location,
  LocationCreateParams,
  LocationDeleteResponse,
  LocationListParams,
  LocationRetrieveParams,
  LocationUpdateParams,
  Locations,
  PageInfo as LocationsAPIPageInfo,
  UpdateLocationRequest,
} from './locations';
import * as ScanningStationsAPI from './scanning-stations';
import {
  Account,
  AccountBranding,
  AccountPortal,
  Address,
  Attribute,
  Consumption,
  CreateScanningStationRequest,
  Department,
  Geolocation,
  Item,
  ItemCategory,
  ListAttribute,
  ListConsumption,
  ListLocation as ScanningStationsAPIListLocation,
  ListMachine,
  ListProductionStep,
  ListProperty,
  ListScanningStation,
  ListUnitGroupUnit,
  Location as ScanningStationsAPILocation,
  Machine,
  Owner,
  PageInfo as ScanningStationsAPIPageInfo,
  ProductionOutput,
  ProductionStep,
  Property,
  Quantity,
  Rate,
  ScanningStation,
  ScanningStationCreateParams,
  ScanningStationDeleteResponse,
  ScanningStationListParams,
  ScanningStationRetrieveParams,
  ScanningStationUpdateParams,
  ScanningStations,
  Unit,
  UnitGroup,
  UnitGroupUnit,
  UpdateScanningStationRequest,
} from './scanning-stations';
import * as ShippingTermsAPI from './shipping-terms';
import {
  Account as ShippingTermsAPIAccount,
  AccountBranding as ShippingTermsAPIAccountBranding,
  AccountPortal as ShippingTermsAPIAccountPortal,
  Address as ShippingTermsAPIAddress,
  CreateShippingTermRequest,
  Geolocation as ShippingTermsAPIGeolocation,
  ListServiceLevel,
  ListShippingTerm,
  Owner as ShippingTermsAPIOwner,
  PageInfo as ShippingTermsAPIPageInfo,
  Quantity as ShippingTermsAPIQuantity,
  QuantityInput,
  ServiceLevel,
  ShippingTerm,
  ShippingTermCreateParams,
  ShippingTermDeleteResponse,
  ShippingTermListParams,
  ShippingTermRetrieveParams,
  ShippingTermUpdateParams,
  ShippingTerms,
  Unit as ShippingTermsAPIUnit,
  UpdateShippingTermRequest,
} from './shipping-terms';
import * as CarriersAPI from './carriers/carriers';
import {
  Account as CarriersAPIAccount,
  AccountBranding as CarriersAPIAccountBranding,
  AccountPortal as CarriersAPIAccountPortal,
  Address as CarriersAPIAddress,
  Carrier,
  CarrierCreateParams,
  CarrierDeleteResponse,
  CarrierListParams,
  CarrierRetrieveParams,
  CarrierUpdateParams,
  Carriers,
  CreateCarrierRequest,
  Geolocation as CarriersAPIGeolocation,
  ListCarrier,
  ListServiceLevel as CarriersAPIListServiceLevel,
  Owner as CarriersAPIOwner,
  PageInfo as CarriersAPIPageInfo,
  ServiceLevel as CarriersAPIServiceLevel,
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
    type ShippingTermsAPIAccount as Account,
    type ShippingTermsAPIAccountBranding as AccountBranding,
    type ShippingTermsAPIAccountPortal as AccountPortal,
    type ShippingTermsAPIAddress as Address,
    type CreateShippingTermRequest as CreateShippingTermRequest,
    type ShippingTermsAPIGeolocation as Geolocation,
    type ListServiceLevel as ListServiceLevel,
    type ListShippingTerm as ListShippingTerm,
    type ShippingTermsAPIOwner as Owner,
    type ShippingTermsAPIPageInfo as PageInfo,
    type ShippingTermsAPIQuantity as Quantity,
    type QuantityInput as QuantityInput,
    type ServiceLevel as ServiceLevel,
    type ShippingTerm as ShippingTerm,
    type ShippingTermsAPIUnit as Unit,
    type UpdateShippingTermRequest as UpdateShippingTermRequest,
    type ShippingTermDeleteResponse as ShippingTermDeleteResponse,
    type ShippingTermCreateParams as ShippingTermCreateParams,
    type ShippingTermRetrieveParams as ShippingTermRetrieveParams,
    type ShippingTermUpdateParams as ShippingTermUpdateParams,
    type ShippingTermListParams as ShippingTermListParams,
  };

  export {
    Carriers as Carriers,
    type CarriersAPIAccount as Account,
    type CarriersAPIAccountBranding as AccountBranding,
    type CarriersAPIAccountPortal as AccountPortal,
    type CarriersAPIAddress as Address,
    type Carrier as Carrier,
    type CreateCarrierRequest as CreateCarrierRequest,
    type CarriersAPIGeolocation as Geolocation,
    type ListCarrier as ListCarrier,
    type CarriersAPIListServiceLevel as ListServiceLevel,
    type CarriersAPIOwner as Owner,
    type CarriersAPIPageInfo as PageInfo,
    type CarriersAPIServiceLevel as ServiceLevel,
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
    type ListLocation as ListLocation,
    type Location as Location,
    type LocationsAPIPageInfo as PageInfo,
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
    type PageInfo as PageInfo,
    type LocationTypeListParams as LocationTypeListParams,
  };

  export {
    ScanningStations as ScanningStations,
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountPortal as AccountPortal,
    type Address as Address,
    type Attribute as Attribute,
    type Consumption as Consumption,
    type CreateScanningStationRequest as CreateScanningStationRequest,
    type Department as Department,
    type Geolocation as Geolocation,
    type Item as Item,
    type ItemCategory as ItemCategory,
    type ListAttribute as ListAttribute,
    type ListConsumption as ListConsumption,
    type ScanningStationsAPIListLocation as ListLocation,
    type ListMachine as ListMachine,
    type ListProductionStep as ListProductionStep,
    type ListProperty as ListProperty,
    type ListScanningStation as ListScanningStation,
    type ListUnitGroupUnit as ListUnitGroupUnit,
    type ScanningStationsAPILocation as Location,
    type Machine as Machine,
    type Owner as Owner,
    type ScanningStationsAPIPageInfo as PageInfo,
    type ProductionOutput as ProductionOutput,
    type ProductionStep as ProductionStep,
    type Property as Property,
    type Quantity as Quantity,
    type Rate as Rate,
    type ScanningStation as ScanningStation,
    type Unit as Unit,
    type UnitGroup as UnitGroup,
    type UnitGroupUnit as UnitGroupUnit,
    type UpdateScanningStationRequest as UpdateScanningStationRequest,
    type ScanningStationDeleteResponse as ScanningStationDeleteResponse,
    type ScanningStationCreateParams as ScanningStationCreateParams,
    type ScanningStationRetrieveParams as ScanningStationRetrieveParams,
    type ScanningStationUpdateParams as ScanningStationUpdateParams,
    type ScanningStationListParams as ScanningStationListParams,
  };
}
