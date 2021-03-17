import axios from "axios";
import { setAlert } from "./alertAction";
import * as types from "./types";

// Get current PQ
export const getPurchaseQuotation = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/purchase-quotation/${id}`);

    dispatch({
      type: types.GET_PURCHASE_QUOTATION,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: types.PURCHASE_QUOTATION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Get all PurchaseQuotations
export const getPurchaseQuotations = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/purchase-quotation");
    dispatch({
      type: types.GET_PURCHASE_QUOTATIONS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: types.PURCHASE_QUOTATION_ERROR,
      payload: { status: err.response },
    });
  }
};

// Add PurchaseQuotation
export const addPurchaseQuotation = (formData, history) => async (dispatch) => {
  try {
    const res = await axios.post("/api/purchase-quotation", formData);
    dispatch({
      type: types.ADD_PURCHASE_QUOTATION,
      payload: res.data,
    });

    dispatch(setAlert("Purchase Quotation Added", "success"));

    history.push("/purchase-quotation");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.PURCHASE_QUOTATION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Edit PurchaseQuotation
export const editPurchaseQuotation = (formData, id, history) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.patch(
      `/api/purchase-quotation/${id}`,
      formData,
      config
    );

    dispatch({
      type: types.GET_PURCHASE_QUOTATION,
      payload: res.data,
    });

    dispatch(setAlert("Purchase Quotation Updated", "success"));

    // history.push("/purchase-quotation");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.PURCHASE_QUOTATION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Set Current PurchaseQuotation
export const setCurrentPurchaseQuotation = (PurchaseQuotation) => async (
  dispatch
) => {
  dispatch({
    type: types.SET_CURRENT_PURCHASE_QUOTATION,
    payload: PurchaseQuotation,
  });
};

// Clear PurchaseQuotation
export const clearPurchaseQuotation = () => async (dispatch) => {
  dispatch({ type: types.CLEAR_PURCHASE_QUOTATION });
};

//Filter PurchaseQuotation
export const filterPurchaseQuotation = (text) => async (dispatch) => {
  dispatch({ type: types.FILTER_PURCHASE_QUOTATION, payload: text });
};

// Clear Filter
export const clearFilter = () => async (dispatch) => {
  dispatch({ type: types.CLEAR_FILTER });
};
