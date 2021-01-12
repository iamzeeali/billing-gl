import axios from "axios";
import { setAlert } from "./alertAction";
import * as types from "./types";

// Get current Supplier Group
export const getSupplierGroup = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/supplier-group/${id}`);

    dispatch({
      type: types.GET_SUPPLIER_GROUP,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: types.SUPPLIER_GROUP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Get all Supplier Group
export const getSupplierGroups = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/supplier-group");
    dispatch({
      type: types.GET_SUPPLIER_GROUPS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: types.SUPPLIER_GROUP_ERROR,
      payload: { status: err.response },
    });
  }
};

// Add Supplier Group
export const addSupplierGroup = (formData, history) => async (dispatch) => {
  try {
    const res = await axios.post("/api/supplier-group", formData);
    dispatch({
      type: types.ADD_SUPPLIER_GROUP,
      payload: res.data,
    });

    dispatch(setAlert("Supplier Group Added", "success"));

    history.push("/supplier-groups");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.SUPPLIER_GROUP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Edit Supplier Group
export const editSupplierGroup = (formData, id, history) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.patch(
      `/api/supplier-group/${id}`,
      formData,
      config
    );

    dispatch({
      type: types.GET_SUPPLIER_GROUP,
      payload: res.data,
    });

    dispatch(setAlert("Supplier Group Updated", "success"));

    history.push("/supplier-groups");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.SUPPLIER_GROUP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Set Current Supplier Group
export const setCurrentSupplierGroup = (sg) => async (dispatch) => {
  dispatch({
    type: types.SET_CURRENT_SUPPLIER_GROUP,
    payload: sg,
  });
};

// Clear Supplier Group
export const clearSupplierGroup = () => async (dispatch) => {
  dispatch({ type: types.CLEAR_SUPPLIER_GROUP });
};

//Filter Supplier Group
export const filtersgrouo = (text) => async (dispatch) => {
  dispatch({ type: types.FILTER_SUPPLIER_GROUP, payload: text });
};

// Clear Filter
export const clearFilter = () => async (dispatch) => {
  dispatch({ type: types.CLEAR_FILTER });
};
