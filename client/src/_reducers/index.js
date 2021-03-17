import { combineReducers } from "redux";
import auth from "./authReducer";
import alert from "./alertReducer";
import customer from "./customerReducer";
import supplier from "./supplierReducer";
import item from "./itemReducer";
import itemGroup from "./itemGroupReducer";
import warehouse from "./warehouseReducer";
import uom from "./uomReducer";
import customerGroup from "./customerGroupReducer";
import supplierGroup from "./supplierGroupReducer";
import inventory from "./inventoryReducer";
import purchaseQuotation from "./purchaseQuotationReducer";

export default combineReducers({
  auth,
  alert,
  customer,
  supplier,
  item,
  itemGroup,
  warehouse,
  uom,
  customerGroup,
  supplierGroup,
  inventory,
  purchaseQuotation,
});
