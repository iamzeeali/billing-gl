import axios from "axios";
import { setAlert } from "./alertAction";
import * as types from "./types";

// Get current Inv
export const getInventory = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/inventory/${id}`);

    dispatch({
      type: types.GET_INVENTORY,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: types.INVENTORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Get all Inv
export const getInventories = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/inventory");
    dispatch({
      type: types.GET_INVENTORIES,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: types.INVENTORY_ERROR,
      payload: { status: err.response },
    });
  }
};

// Add Inv
export const addInventory = (formData, history) => async (dispatch) => {
  try {
    const res = await axios.post("/api/inventory", formData);
    dispatch({
      type: types.ADD_INVENTORY,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.INVENTORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Edit Inv
export const editInv = (formData, id, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.patch(`/api/inventory/${id}`, formData, config);

    dispatch({
      type: types.GET_INVENTORY,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.INVENTORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Set Current Inv
export const setCurrentInv = (inv) => async (dispatch) => {
  dispatch({
    type: types.SET_CURRENT_INVENTORY,
    payload: inv,
  });
};

// Clear inv
export const clearInventory = () => async (dispatch) => {
  dispatch({ type: types.CLEAR_INVENTORY });
};

//Filter INV
export const filterInv = (text) => async (dispatch) => {
  dispatch({ type: types.FILTER_INVENTORY, payload: text });
};

// Clear Filter
export const clearFilter = () => async (dispatch) => {
  dispatch({ type: types.CLEAR_FILTER });
};
