// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MaterialsAPI from './materials';
import {
  CreateMaterialRequest,
  ListMaterial,
  Material,
  MaterialCreateParams,
  MaterialListParams,
  MaterialRetrieveParams,
  MaterialUpdateParams,
  Materials,
  QuantityInputRequest,
  RateInput,
  UpdateMaterialRequest,
} from './materials';
import * as PartsAPI from './parts';
import {
  CreatePartRequest,
  ListPart,
  Part,
  PartCreateParams,
  PartListParams,
  PartRetrieveParams,
  PartUpdateParams,
  Parts,
  UpdatePartRequest,
} from './parts';
import * as ProductLinesAPI from './product-lines';
import {
  CreateProductLineRequest,
  ListProductLine,
  ProductLine,
  ProductLineCreateParams,
  ProductLineDeleteResponse,
  ProductLineListParams,
  ProductLineRetrieveParams,
  ProductLineUpdateParams,
  ProductLines,
  UpdateProductLineRequest,
} from './product-lines';
import * as ProductsAPI from './products';
import {
  CreateProductRequest,
  ListProduct,
  Product,
  ProductChangeProductLineParams,
  ProductCreateParams,
  ProductDeleteParams,
  ProductListParams,
  ProductRetrieveParams,
  ProductUpdateParams,
  Products,
  UpdateProductRequest,
} from './products';
import * as UnitsAPI from './units';
import {
  CreateUnitRequest,
  ListUnit,
  Unit,
  UnitCreateParams,
  UnitDeleteResponse,
  UnitListParams,
  UnitRetrieveParams,
  UnitUpdateParams,
  Units,
  UpdateUnitRequest,
} from './units';
import * as ItemCategoriesAPI from './item-categories/item-categories';
import {
  CreateItemCategoryRequest,
  ItemCategories,
  ItemCategoryChangeUnitGroupParams,
  ItemCategoryChangeUnitGroupResponse,
  ItemCategoryCreateParams,
  ItemCategoryDeleteResponse,
  ItemCategoryListParams,
  ItemCategoryRetrieveParams,
  ItemCategoryUpdateParams,
  ListItemCategory,
  UpdateItemCategoryRequest,
} from './item-categories/item-categories';
import * as ItemsAPI from './items/items';
import {
  Item,
  ItemCategory,
  ItemChangeCategoryParams,
  ItemInventory,
  ItemListParams,
  ItemRetrieveInventoryParams,
  ItemRetrieveParams,
  Items,
  ListItem,
  Quantity,
  Rate,
} from './items/items';
import * as PropertiesAPI from './properties/properties';
import {
  Attribute,
  CreatePropertyRequest,
  ListAttribute,
  ListProperty,
  Properties,
  Property,
  PropertyCreateParams,
  PropertyDeleteResponse,
  PropertyListParams,
  PropertyRetrieveParams,
  PropertyUpdateParams,
  UpdatePropertyRequest,
} from './properties/properties';
import * as UnitGroupsAPI from './unit-groups/unit-groups';
import {
  CreateUnitGroupRequest,
  CreateUnitGroupUnitParam,
  ListUnitGroup,
  ListUnitGroupUnit,
  UnitGroup,
  UnitGroupCreateParams,
  UnitGroupDeleteResponse,
  UnitGroupListParams,
  UnitGroupRetrieveParams,
  UnitGroupUnit,
  UnitGroupUpdateParams,
  UnitGroups,
  UpdateUnitGroupRequest,
} from './unit-groups/unit-groups';

export class Catalog extends APIResource {
  units: UnitsAPI.Units = new UnitsAPI.Units(this._client);
  unitGroups: UnitGroupsAPI.UnitGroups = new UnitGroupsAPI.UnitGroups(this._client);
  properties: PropertiesAPI.Properties = new PropertiesAPI.Properties(this._client);
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);
  itemCategories: ItemCategoriesAPI.ItemCategories = new ItemCategoriesAPI.ItemCategories(this._client);
  materials: MaterialsAPI.Materials = new MaterialsAPI.Materials(this._client);
  parts: PartsAPI.Parts = new PartsAPI.Parts(this._client);
  productLines: ProductLinesAPI.ProductLines = new ProductLinesAPI.ProductLines(this._client);
  products: ProductsAPI.Products = new ProductsAPI.Products(this._client);
}

Catalog.Units = Units;
Catalog.UnitGroups = UnitGroups;
Catalog.Properties = Properties;
Catalog.Items = Items;
Catalog.ItemCategories = ItemCategories;
Catalog.Materials = Materials;
Catalog.Parts = Parts;
Catalog.ProductLines = ProductLines;
Catalog.Products = Products;

export declare namespace Catalog {
  export {
    Units as Units,
    type CreateUnitRequest as CreateUnitRequest,
    type ListUnit as ListUnit,
    type Unit as Unit,
    type UpdateUnitRequest as UpdateUnitRequest,
    type UnitDeleteResponse as UnitDeleteResponse,
    type UnitCreateParams as UnitCreateParams,
    type UnitRetrieveParams as UnitRetrieveParams,
    type UnitUpdateParams as UnitUpdateParams,
    type UnitListParams as UnitListParams,
  };

  export {
    UnitGroups as UnitGroups,
    type CreateUnitGroupRequest as CreateUnitGroupRequest,
    type CreateUnitGroupUnitParam as CreateUnitGroupUnitParam,
    type ListUnitGroup as ListUnitGroup,
    type ListUnitGroupUnit as ListUnitGroupUnit,
    type UnitGroup as UnitGroup,
    type UnitGroupUnit as UnitGroupUnit,
    type UpdateUnitGroupRequest as UpdateUnitGroupRequest,
    type UnitGroupDeleteResponse as UnitGroupDeleteResponse,
    type UnitGroupCreateParams as UnitGroupCreateParams,
    type UnitGroupRetrieveParams as UnitGroupRetrieveParams,
    type UnitGroupUpdateParams as UnitGroupUpdateParams,
    type UnitGroupListParams as UnitGroupListParams,
  };

  export {
    Properties as Properties,
    type Attribute as Attribute,
    type CreatePropertyRequest as CreatePropertyRequest,
    type ListAttribute as ListAttribute,
    type ListProperty as ListProperty,
    type Property as Property,
    type UpdatePropertyRequest as UpdatePropertyRequest,
    type PropertyDeleteResponse as PropertyDeleteResponse,
    type PropertyCreateParams as PropertyCreateParams,
    type PropertyRetrieveParams as PropertyRetrieveParams,
    type PropertyUpdateParams as PropertyUpdateParams,
    type PropertyListParams as PropertyListParams,
  };

  export {
    Items as Items,
    type Item as Item,
    type ItemCategory as ItemCategory,
    type ItemInventory as ItemInventory,
    type ListItem as ListItem,
    type Quantity as Quantity,
    type Rate as Rate,
    type ItemRetrieveParams as ItemRetrieveParams,
    type ItemListParams as ItemListParams,
    type ItemChangeCategoryParams as ItemChangeCategoryParams,
    type ItemRetrieveInventoryParams as ItemRetrieveInventoryParams,
  };

  export {
    ItemCategories as ItemCategories,
    type CreateItemCategoryRequest as CreateItemCategoryRequest,
    type ListItemCategory as ListItemCategory,
    type UpdateItemCategoryRequest as UpdateItemCategoryRequest,
    type ItemCategoryDeleteResponse as ItemCategoryDeleteResponse,
    type ItemCategoryChangeUnitGroupResponse as ItemCategoryChangeUnitGroupResponse,
    type ItemCategoryCreateParams as ItemCategoryCreateParams,
    type ItemCategoryRetrieveParams as ItemCategoryRetrieveParams,
    type ItemCategoryUpdateParams as ItemCategoryUpdateParams,
    type ItemCategoryListParams as ItemCategoryListParams,
    type ItemCategoryChangeUnitGroupParams as ItemCategoryChangeUnitGroupParams,
  };

  export {
    Materials as Materials,
    type CreateMaterialRequest as CreateMaterialRequest,
    type ListMaterial as ListMaterial,
    type Material as Material,
    type QuantityInputRequest as QuantityInputRequest,
    type RateInput as RateInput,
    type UpdateMaterialRequest as UpdateMaterialRequest,
    type MaterialCreateParams as MaterialCreateParams,
    type MaterialRetrieveParams as MaterialRetrieveParams,
    type MaterialUpdateParams as MaterialUpdateParams,
    type MaterialListParams as MaterialListParams,
  };

  export {
    Parts as Parts,
    type CreatePartRequest as CreatePartRequest,
    type ListPart as ListPart,
    type Part as Part,
    type UpdatePartRequest as UpdatePartRequest,
    type PartCreateParams as PartCreateParams,
    type PartRetrieveParams as PartRetrieveParams,
    type PartUpdateParams as PartUpdateParams,
    type PartListParams as PartListParams,
  };

  export {
    ProductLines as ProductLines,
    type CreateProductLineRequest as CreateProductLineRequest,
    type ListProductLine as ListProductLine,
    type ProductLine as ProductLine,
    type UpdateProductLineRequest as UpdateProductLineRequest,
    type ProductLineDeleteResponse as ProductLineDeleteResponse,
    type ProductLineCreateParams as ProductLineCreateParams,
    type ProductLineRetrieveParams as ProductLineRetrieveParams,
    type ProductLineUpdateParams as ProductLineUpdateParams,
    type ProductLineListParams as ProductLineListParams,
  };

  export {
    Products as Products,
    type CreateProductRequest as CreateProductRequest,
    type ListProduct as ListProduct,
    type Product as Product,
    type UpdateProductRequest as UpdateProductRequest,
    type ProductCreateParams as ProductCreateParams,
    type ProductRetrieveParams as ProductRetrieveParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
    type ProductDeleteParams as ProductDeleteParams,
    type ProductChangeProductLineParams as ProductChangeProductLineParams,
  };
}
