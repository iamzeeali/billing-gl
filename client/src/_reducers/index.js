import { combineReducers } from "redux";
import auth from "./authReducer";
import alert from "./alertReducer";
import bp from "./bpReducer";
import item from "./itemReducer";
import itemGroup from "./itemGroupReducer";
import warehouse from "./warehouseReducer";
import uom from "./uomReducer";
import bpGroup from "./bpGroupReducer";
import inventory from "./inventoryReducer";

export default combineReducers({
  auth,
  alert,
  bp,
  item,
  itemGroup,
  warehouse,
  uom,
  bpGroup,
  inventory,
});
