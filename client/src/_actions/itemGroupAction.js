import axios from "axios";
import { setAlert } from "./alertAction";
import * as types from "./types";

// Get current Item Group
export const getItemGroup = id => async dispatch => {
  try {
    const res = await axios.get(`/api/item-group/${id}`);

    dispatch({
      type: types.GET_ITEM_GROUP,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: types.ITEM_GROUP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get all Item Groups
export const getItemGroups = () => async dispatch => {
  try {
    const res = await axios.get("/api/item-group");
    dispatch({
      type: types.GET_ITEM_GROUPS,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: types.ITEM_GROUP_ERROR,
      payload: { status: err.response }
    });
  }
};

// Add Item Group
export const addItemGroup = (formData, history) => async dispatch => {
  console.log(formData);
  try {
    const res = await axios.post("/api/item-group", formData);
    dispatch({
      type: types.ADD_ITEM_GROUP,
      payload: res.data
    });

    dispatch(setAlert("Item Group Added", "success"));

    history.push("/item-groups");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.ITEM_GROUP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Edit Item Group
export const editItemGroup = (formData, id, history) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.patch(`/api/item-group/${id}`, formData, config);

    dispatch({
      type: types.GET_ITEM_GROUP,
      payload: res.data
    });

    dispatch(setAlert("Item Group Updated", "success"));

    history.push("/item-groups");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.ITEM_GROUP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Set Current Item Group
export const setCurrentItemGroup = itemGroup => async dispatch => {
  dispatch({
    type: types.SET_CURRENT_ITEM_GROUP,
    payload: itemGroup
  });
};

// Clear Item Group
export const clearItemGroup = () => async dispatch => {
  dispatch({ type: types.CLEAR_ITEM_GROUP });
};

//Filter Item Group
export const filterItemGrouo = text => async dispatch => {
  dispatch({ type: types.FILTER_ITEM_GROUP, payload: text });
};

// Clear Filter
export const clearFilter = () => async dispatch => {
  dispatch({ type: types.CLEAR_FILTER });
};
