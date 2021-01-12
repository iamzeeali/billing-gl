import axios from "axios";
import { setAlert } from "./alertAction";
import * as types from "./types";

// Get current Customer Group
export const getCustomerGroup = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/customer-group/${id}`);

    dispatch({
      type: types.GET_CUSTOMER_GROUP,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: types.CUSTOMER_GROUP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Get all Customer Group
export const getCustomerGroups = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/customer-group");
    dispatch({
      type: types.GET_CUSTOMER_GROUPS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: types.CUSTOMER_GROUP_ERROR,
      payload: { status: err.response },
    });
  }
};

// Add Customer Group
export const addCustomerGroup = (formData, history) => async (dispatch) => {
  try {
    const res = await axios.post("/api/customer-group", formData);
    dispatch({
      type: types.ADD_CUSTOMER_GROUP,
      payload: res.data,
    });

    dispatch(setAlert("Customer Group Added", "success"));

    history.push("/customer-groups");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.CUSTOMER_GROUP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Edit Customer Group
export const editCustomerGroup = (formData, id, history) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.patch(
      `/api/customer-group/${id}`,
      formData,
      config
    );

    dispatch({
      type: types.GET_CUSTOMER_GROUP,
      payload: res.data,
    });

    dispatch(setAlert("Customer Group Updated", "success"));

    history.push("/customer-groups");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.CUSTOMER_GROUP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Set Current Customer Group
export const setCurrentCustomerGroup = (cg) => async (dispatch) => {
  dispatch({
    type: types.SET_CURRENT_CUSTOMER_GROUP,
    payload: cg,
  });
};

// Clear Customer Group
export const clearCustomerGroup = () => async (dispatch) => {
  dispatch({ type: types.CLEAR_CUSTOMER_GROUP });
};

//Filter Customer Group
export const filtercgrouo = (text) => async (dispatch) => {
  dispatch({ type: types.FILTER_CUSTOMER_GROUP, payload: text });
};

// Clear Filter
export const clearFilter = () => async (dispatch) => {
  dispatch({ type: types.CLEAR_FILTER });
};
