import * as types from "../_actions/types";

const initialState = {
  purchaseQuotation: null,
  purchaseQuotations: [],
  error: {},
  filtered: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_PURCHASE_QUOTATION:
      return {
        ...state,
        purchaseQuotation: payload,
        loading: false,
      };
    case types.GET_PURCHASE_QUOTATIONS:
      return {
        ...state,
        purchaseQuotations: payload,
        loading: false,
      };
    case types.ADD_PURCHASE_QUOTATION:
      return {
        ...state,
        purchaseQuotation: payload,
        loading: false,
      };
    case types.SET_CURRENT_PURCHASE_QUOTATION:
      return {
        ...state,
        purchaseQuotation: action.payload,
      };
    case types.CLEAR_PURCHASE_QUOTATION:
      return {
        ...state,
        purchaseQuotation: null,
        loading: false,
      };

    // case types.FILTER_ACTIVITY:
    //   return {
    //     ...state,
    //     filtered: state.activities.filter(activity => {
    //       const regex = new RegExp(`${action.payload}`, "gi");
    //       return (
    //         staff.firstName.match(regex) ||
    //         staff.lastName.match(regex) ||
    //         staff.email.match(regex) ||
    //         staff.mobile.match(regex) ||
    //         staff.username.match(regex)
    //       );
    //     })
    //   };
    case types.CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case types.DELETE_PURCHASE_QUOTATION:
      return {
        ...state,
        purchaseQuotations: state.purchaseQuotations.filter(
          (pq) => pq._id !== action.payload
        ),
        loading: false,
      };
    case types.PURCHASE_QUOTATION_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
