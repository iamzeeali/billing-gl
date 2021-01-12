import * as types from "../_actions/types";

const initialState = {
  supplier: null,
  suppliers: [],
  error: {},
  filtered: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_SUPPLIER:
      return {
        ...state,
        supplier: payload,
        loading: false,
      };
    case types.GET_SUPPLIERS:
      return {
        ...state,
        suppliers: payload,
        loading: false,
      };
    case types.ADD_SUPPLIER:
      return {
        ...state,
        supplier: payload,
        loading: false,
      };
    case types.SET_CURRENT_SUPPLIER:
      return {
        ...state,
        supplier: action.payload,
      };
    case types.CLEAR_SUPPLIER:
      return {
        ...state,
        supplier: null,
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
    case types.DELETE_SUPPLIER:
      return {
        ...state,
        suppliers: state.suppliers.filter(
          (supplier) => supplier._id !== action.payload
        ),
        loading: false,
      };
    case types.SUPPLIER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
