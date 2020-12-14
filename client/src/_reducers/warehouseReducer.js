import * as types from "../_actions/types";

const initialState = {
  warehouse: null,
  warehouses: [],
  error: {},
  filtered: null,
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_WAREHOUSE:
      return {
        ...state,
        warehouse: payload,
        loading: false
      };
    case types.GET_WAREHOUSES:
      return {
        ...state,
        warehouses: payload,
        loading: false
      };
    case types.ADD_WAREHOUSE:
      return {
        ...state,
        warehouse: payload,
        loading: false
      };
    case types.SET_CURRENT_WAREHOUSE:
      return {
        ...state,
        warehouse: action.payload
      };
    case types.CLEAR_WAREHOUSE:
      return {
        ...state,
        warehouse: null,
        loading: false
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
        filtered: null
      };
    case types.DELETE_WAREHOUSE:
      return {
        ...state,
        warehouses: state.warehouses.filter(wh => wh._id !== action.payload),
        loading: false
      };
    case types.WAREHOUSE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
