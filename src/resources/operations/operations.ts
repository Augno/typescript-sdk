// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AnalyticsAPI from './analytics';
import { Analytics } from './analytics';
import * as DcLocationsAPI from './dc-locations';
import { DcLocations } from './dc-locations';
import * as DeliveriesAPI from './deliveries';
import { Deliveries } from './deliveries';
import * as DepartmentsAPI from './departments';
import { Department, Departments } from './departments';
import * as EdiRunsAPI from './edi-runs';
import { EdiRuns } from './edi-runs';
import * as LocationTypesAPI from './location-types';
import {
  LocationType,
  LocationTypeRetrieveLocationTypesParams,
  LocationTypeRetrieveLocationTypesResponse,
  LocationTypes,
} from './location-types';
import * as LocationsAPI from './locations';
import {
  ListLocation,
  Location,
  LocationCreateParams,
  LocationDeleteResponse,
  LocationListParams,
  LocationRetrieveParams,
  LocationUpdateParams,
  Locations,
} from './locations';
import * as MachinesAPI from './machines';
import { ListMachine, Machine, Machines } from './machines';
import * as ScanningStationsAPI from './scanning-stations';
import {
  ListScanningStation,
  ScanningStation,
  ScanningStationDeleteResponse,
  ScanningStationRetrieveParams,
  ScanningStationRetrieveScanningStationsParams,
  ScanningStationScanningStationsParams,
  ScanningStationUpdateParams,
  ScanningStations,
} from './scanning-stations';
import * as ShippingCasesAPI from './shipping-cases';
import { ShippingCases } from './shipping-cases';
import * as ShippingTermsAPI from './shipping-terms';
import {
  QuantityInput,
  ShippingTerm,
  ShippingTermDeleteResponse,
  ShippingTermRetrieveParams,
  ShippingTermRetrieveShippingTermsParams,
  ShippingTermRetrieveShippingTermsResponse,
  ShippingTermShippingTermsParams,
  ShippingTermUpdateParams,
  ShippingTerms,
} from './shipping-terms';
import * as UnitsAPI from '../catalog/units/units';
import * as BatchesAPI from './batches/batches';
import { Batches, Quantity } from './batches/batches';
import * as CarriersAPI from './carriers/carriers';
import {
  Carrier,
  CarrierCreateParams,
  CarrierDeleteResponse,
  CarrierListParams,
  CarrierListResponse,
  CarrierRetrieveParams,
  CarrierUpdateParams,
  Carriers,
} from './carriers/carriers';
import * as EdiAPI from './edi/edi';
import { Edi } from './edi/edi';
import * as InventoryChangeLogsAPI from './inventory-change-logs/inventory-change-logs';
import { InventoryChangeLogs } from './inventory-change-logs/inventory-change-logs';
import * as PicksAPI from './picks/picks';
import { Picks } from './picks/picks';
import * as ProductionFlowsAPI from './production-flows/production-flows';
import { ProductionFlows } from './production-flows/production-flows';
import * as ProductionRunsAPI from './production-runs/production-runs';
import { ProductionRuns } from './production-runs/production-runs';
import * as ProductionStepsAPI from './production-steps/production-steps';
import { ListProductionStep, ProductionStep, ProductionSteps } from './production-steps/production-steps';
import * as PurchaseOrdersAPI from './purchase-orders/purchase-orders';
import { PurchaseOrders } from './purchase-orders/purchase-orders';
import * as ReceivingOrdersAPI from './receiving-orders/receiving-orders';
import { ReceivingOrders } from './receiving-orders/receiving-orders';
import * as ShipmentsAPI from './shipments/shipments';
import { Shipments } from './shipments/shipments';
import * as SuppliersAPI from './suppliers/suppliers';
import { Suppliers } from './suppliers/suppliers';

export class Operations extends APIResource {
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  batches: BatchesAPI.Batches = new BatchesAPI.Batches(this._client);
  carriers: CarriersAPI.Carriers = new CarriersAPI.Carriers(this._client);
  dcLocations: DcLocationsAPI.DcLocations = new DcLocationsAPI.DcLocations(this._client);
  deliveries: DeliveriesAPI.Deliveries = new DeliveriesAPI.Deliveries(this._client);
  departments: DepartmentsAPI.Departments = new DepartmentsAPI.Departments(this._client);
  ediRuns: EdiRunsAPI.EdiRuns = new EdiRunsAPI.EdiRuns(this._client);
  edi: EdiAPI.Edi = new EdiAPI.Edi(this._client);
  inventoryChangeLogs: InventoryChangeLogsAPI.InventoryChangeLogs =
    new InventoryChangeLogsAPI.InventoryChangeLogs(this._client);
  locationTypes: LocationTypesAPI.LocationTypes = new LocationTypesAPI.LocationTypes(this._client);
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
  machines: MachinesAPI.Machines = new MachinesAPI.Machines(this._client);
  picks: PicksAPI.Picks = new PicksAPI.Picks(this._client);
  productionFlows: ProductionFlowsAPI.ProductionFlows = new ProductionFlowsAPI.ProductionFlows(this._client);
  productionRuns: ProductionRunsAPI.ProductionRuns = new ProductionRunsAPI.ProductionRuns(this._client);
  productionSteps: ProductionStepsAPI.ProductionSteps = new ProductionStepsAPI.ProductionSteps(this._client);
  purchaseOrders: PurchaseOrdersAPI.PurchaseOrders = new PurchaseOrdersAPI.PurchaseOrders(this._client);
  receivingOrders: ReceivingOrdersAPI.ReceivingOrders = new ReceivingOrdersAPI.ReceivingOrders(this._client);
  scanningStations: ScanningStationsAPI.ScanningStations = new ScanningStationsAPI.ScanningStations(
    this._client,
  );
  shipments: ShipmentsAPI.Shipments = new ShipmentsAPI.Shipments(this._client);
  shippingCases: ShippingCasesAPI.ShippingCases = new ShippingCasesAPI.ShippingCases(this._client);
  shippingTerms: ShippingTermsAPI.ShippingTerms = new ShippingTermsAPI.ShippingTerms(this._client);
  suppliers: SuppliersAPI.Suppliers = new SuppliersAPI.Suppliers(this._client);
}

/**
 * Rate resource.
 */
export interface Rate {
  /**
   * Rate ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  denominator_unit: UnitsAPI.Unit | null;

  /**
   * Human-readable formatted value (e.g. "$25.50 / kg" or "100 kg / hr").
   */
  display_value: string;

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  numerator_unit: UnitsAPI.Unit | null;

  /**
   * Resource type identifier.
   */
  object: 'rate';

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * Rate value as a decimal string.
   */
  value: string;
}

Operations.Analytics = Analytics;
Operations.Batches = Batches;
Operations.Carriers = Carriers;
Operations.DcLocations = DcLocations;
Operations.Deliveries = Deliveries;
Operations.Departments = Departments;
Operations.EdiRuns = EdiRuns;
Operations.Edi = Edi;
Operations.InventoryChangeLogs = InventoryChangeLogs;
Operations.LocationTypes = LocationTypes;
Operations.Locations = Locations;
Operations.Machines = Machines;
Operations.Picks = Picks;
Operations.ProductionFlows = ProductionFlows;
Operations.ProductionRuns = ProductionRuns;
Operations.ProductionSteps = ProductionSteps;
Operations.PurchaseOrders = PurchaseOrders;
Operations.ReceivingOrders = ReceivingOrders;
Operations.ScanningStations = ScanningStations;
Operations.Shipments = Shipments;
Operations.ShippingCases = ShippingCases;
Operations.ShippingTerms = ShippingTerms;
Operations.Suppliers = Suppliers;

export declare namespace Operations {
  export { type Rate as Rate };

  export { Analytics as Analytics };

  export { Batches as Batches, type Quantity as Quantity };

  export {
    Carriers as Carriers,
    type Carrier as Carrier,
    type CarrierListResponse as CarrierListResponse,
    type CarrierDeleteResponse as CarrierDeleteResponse,
    type CarrierCreateParams as CarrierCreateParams,
    type CarrierRetrieveParams as CarrierRetrieveParams,
    type CarrierUpdateParams as CarrierUpdateParams,
    type CarrierListParams as CarrierListParams,
  };

  export { DcLocations as DcLocations };

  export { Deliveries as Deliveries };

  export { Departments as Departments, type Department as Department };

  export { EdiRuns as EdiRuns };

  export { Edi as Edi };

  export { InventoryChangeLogs as InventoryChangeLogs };

  export {
    LocationTypes as LocationTypes,
    type LocationType as LocationType,
    type LocationTypeRetrieveLocationTypesResponse as LocationTypeRetrieveLocationTypesResponse,
    type LocationTypeRetrieveLocationTypesParams as LocationTypeRetrieveLocationTypesParams,
  };

  export {
    Locations as Locations,
    type ListLocation as ListLocation,
    type Location as Location,
    type LocationDeleteResponse as LocationDeleteResponse,
    type LocationCreateParams as LocationCreateParams,
    type LocationRetrieveParams as LocationRetrieveParams,
    type LocationUpdateParams as LocationUpdateParams,
    type LocationListParams as LocationListParams,
  };

  export { Machines as Machines, type ListMachine as ListMachine, type Machine as Machine };

  export { Picks as Picks };

  export { ProductionFlows as ProductionFlows };

  export { ProductionRuns as ProductionRuns };

  export {
    ProductionSteps as ProductionSteps,
    type ListProductionStep as ListProductionStep,
    type ProductionStep as ProductionStep,
  };

  export { PurchaseOrders as PurchaseOrders };

  export { ReceivingOrders as ReceivingOrders };

  export {
    ScanningStations as ScanningStations,
    type ListScanningStation as ListScanningStation,
    type ScanningStation as ScanningStation,
    type ScanningStationDeleteResponse as ScanningStationDeleteResponse,
    type ScanningStationRetrieveParams as ScanningStationRetrieveParams,
    type ScanningStationUpdateParams as ScanningStationUpdateParams,
    type ScanningStationRetrieveScanningStationsParams as ScanningStationRetrieveScanningStationsParams,
    type ScanningStationScanningStationsParams as ScanningStationScanningStationsParams,
  };

  export { Shipments as Shipments };

  export { ShippingCases as ShippingCases };

  export {
    ShippingTerms as ShippingTerms,
    type QuantityInput as QuantityInput,
    type ShippingTerm as ShippingTerm,
    type ShippingTermDeleteResponse as ShippingTermDeleteResponse,
    type ShippingTermRetrieveShippingTermsResponse as ShippingTermRetrieveShippingTermsResponse,
    type ShippingTermRetrieveParams as ShippingTermRetrieveParams,
    type ShippingTermUpdateParams as ShippingTermUpdateParams,
    type ShippingTermRetrieveShippingTermsParams as ShippingTermRetrieveShippingTermsParams,
    type ShippingTermShippingTermsParams as ShippingTermShippingTermsParams,
  };

  export { Suppliers as Suppliers };
}
