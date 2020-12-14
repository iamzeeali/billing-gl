import axios from "axios";
import { setAlert } from "./alertAction";
import * as types from "./types";

// Get current Item
export const getItem = id => async dispatch => {
  try {
    const res = await axios.get(`/api/item/${id}`);

    dispatch({
      type: types.GET_ITEM,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: types.ITEM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get all Items
export const getItems = () => async dispatch => {
  try {
    const res = await axios.get("/api/item");
    dispatch({
      type: types.GET_ITEMS,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: types.ITEM_ERROR,
      payload: { status: err.response }
    });
  }
};

// Add Business Partner
export const addItem = (formData, history) => async dispatch => {
  console.log(formData);
  try {
    const res = await axios.post("/api/item", formData);
    dispatch({
      type: types.ADD_ITEM,
      payload: res.data
    });

    dispatch(setAlert("Item Added", "success"));

    history.push("/items");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.ITEM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Edit Item
export const editItem = (formData, id, history) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.patch(`/api/item/${id}`, formData, config);

    dispatch({
      type: types.GET_ITEM,
      payload: res.data
    });

    dispatch(setAlert("Item Updated", "success"));

    history.push("/items");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.ITEM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Set Current business partner
export const setCurrentItem = item => async dispatch => {
  dispatch({
    type: types.SET_CURRENT_ITEM,
    payload: item
  });
};

// Clear business partner
export const clearItem = () => async dispatch => {
  dispatch({ type: types.CLEAR_ITEM });
};

//Filter business partner
export const filterItem = text => async dispatch => {
  dispatch({ type: types.FILTER_ITEM, payload: text });
};

// Clear Filter
export const clearFilter = () => async dispatch => {
  dispatch({ type: types.CLEAR_FILTER });
};
