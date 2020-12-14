import axios from "axios";
import { setAlert } from "./alertAction";
import * as types from "./types";

// Get current Warehouse
export const getWarehouse = id => async dispatch => {
  try {
    const res = await axios.get(`/api/warehouse/${id}`);

    dispatch({
      type: types.GET_WAREHOUSE,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: types.WAREHOUSE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get all Warehouses
export const getWarehouses = () => async dispatch => {
  try {
    const res = await axios.get("/api/warehouse");
    dispatch({
      type: types.GET_WAREHOUSES,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: types.WAREHOUSE_ERROR,
      payload: { status: err.response }
    });
  }
};

// Add Warehouse
export const addWarehouse = (formData, history) => async dispatch => {
  console.log(formData);
  try {
    const res = await axios.post("/api/warehouse", formData);
    dispatch({
      type: types.ADD_WAREHOUSE,
      payload: res.data
    });

    dispatch(setAlert("Warehouse Added", "success"));

    history.push("/warehouses");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.WAREHOUSE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Edit Warehouse
export const editWarehouse = (formData, id, history) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.patch(`/api/warehouse/${id}`, formData, config);

    dispatch({
      type: types.GET_WAREHOUSE,
      payload: res.data
    });

    dispatch(setAlert("Warehouse Updated", "success"));

    history.push("/warehouses");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.WAREHOUSE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Set Current Warehouse
export const setCurrentWarehouse = warehouse => async dispatch => {
  dispatch({
    type: types.SET_CURRENT_WAREHOUSE,
    payload: warehouse
  });
};

// Clear Warehouse
export const clearWarehouse = () => async dispatch => {
  dispatch({ type: types.CLEAR_WAREHOUSE });
};

//Filter Warehouse
export const filterWarehouse = text => async dispatch => {
  dispatch({ type: types.FILTER_WAREHOUSE, payload: text });
};

// Clear Filter
export const clearFilter = () => async dispatch => {
  dispatch({ type: types.CLEAR_FILTER });
};
