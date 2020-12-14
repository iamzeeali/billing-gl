import axios from "axios";
import { setAlert } from "./alertAction";
import * as types from "./types";

// Get current Bp Group
export const getBpGroup = id => async dispatch => {
  try {
    const res = await axios.get(`/api/bp-group/${id}`);

    dispatch({
      type: types.GET_BP_GROUP,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: types.BP_GROUP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get all BP Gorups
export const getBPGroups = () => async dispatch => {
  try {
    const res = await axios.get("/api/bp-group");
    dispatch({
      type: types.GET_BP_GROUPS,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: types.BP_GROUP_ERROR,
      payload: { status: err.response }
    });
  }
};

// Add BP Group
export const addBPGroup = (formData, history) => async dispatch => {
  try {
    const res = await axios.post("/api/bp-group", formData);
    dispatch({
      type: types.ADD_BP_GROUP,
      payload: res.data
    });

    dispatch(setAlert("BP Group Added", "success"));

    history.push("/bp-groups");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.BP_GROUP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Edit BP Group
export const editBpGroup = (formData, id, history) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.patch(`/api/bp-group/${id}`, formData, config);

    dispatch({
      type: types.GET_BP_GROUP,
      payload: res.data
    });

    dispatch(setAlert("BP Group Updated", "success"));

    history.push("/bp-groups");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.BP_GROUP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Set Current BP Group
export const setCurrentBpGroup = bpg => async dispatch => {
  dispatch({
    type: types.SET_CURRENT_BP_GROUP,
    payload: bpg
  });
};

// Clear BP Group
export const clearBpGroup = () => async dispatch => {
  dispatch({ type: types.CLEAR_BP_GROUP });
};

//Filter BP Group
export const filterBpGrouo = text => async dispatch => {
  dispatch({ type: types.FILTER_BP_GROUP, payload: text });
};

// Clear Filter
export const clearFilter = () => async dispatch => {
  dispatch({ type: types.CLEAR_FILTER });
};
