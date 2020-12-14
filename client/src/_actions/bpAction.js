import axios from "axios";
import { setAlert } from "./alertAction";
import * as types from "./types";

// Get current businessPartner
export const getBusinessPartner = id => async dispatch => {
  try {
    const res = await axios.get(`/api/bp/${id}`);

    dispatch({
      type: types.GET_BUSINESS_PARTNER,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: types.BUSINESS_PARTNER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get all businessPartner
export const getBusinessPartners = () => async dispatch => {
  try {
    const res = await axios.get("/api/bp");
    dispatch({
      type: types.GET_BUSINESS_PARTNERS,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: types.BUSINESS_PARTNER_ERROR,
      payload: { status: err.response }
    });
  }
};

// Add Business Partner
export const addBusinessPartner = (formData, history) => async dispatch => {
  console.log(formData);
  try {
    const res = await axios.post("/api/bp", formData);
    dispatch({
      type: types.ADD_BUSINESS_PARTNER,
      payload: res.data
    });

    dispatch(setAlert("Business Partner Added", "success"));

    history.push("/business-partners");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.BUSINESS_PARTNER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Edit Business Partner
export const editBusinessPartner = (
  formData,
  id,
  history
) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.patch(`/api/bp/${id}`, formData, config);

    dispatch({
      type: types.GET_BUSINESS_PARTNER,
      payload: res.data
    });

    dispatch(setAlert("Business Partner Updated", "success"));

    history.push("/business-partners");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.BUSINESS_PARTNER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Set Current business partner
export const setCurrentBusinessPartner = businessPartner => async dispatch => {
  dispatch({
    type: types.SET_CURRENT_BUSINESS_PARTNER,
    payload: businessPartner
  });
};

// Clear business partner
export const clearBusinessPartner = () => async dispatch => {
  dispatch({ type: types.CLEAR_BUSINESS_PARTNER });
};

//Filter business partner
export const filterBusinessPartner = text => async dispatch => {
  dispatch({ type: types.FILTER_BUSINESS_PARTNER, payload: text });
};

// Clear Filter
export const clearFilter = () => async dispatch => {
  dispatch({ type: types.CLEAR_FILTER });
};
