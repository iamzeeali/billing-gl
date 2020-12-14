import * as types from "../_actions/types";

const initialState = {
  inventory: null,
  inventories: [],
  error: {},
  filtered: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_INVENTORY:
      return {
        ...state,
        inventory: payload,
        loading: false,
      };
    case types.GET_INVENTORIES:
      return {
        ...state,
        inventories: payload,
        loading: false,
      };
    case types.ADD_INVENTORY:
      return {
        ...state,
        inventory: payload,
        loading: false,
      };
    case types.SET_CURRENT_INVENTORY:
      return {
        ...state,
        inventory: action.payload,
      };
    case types.CLEAR_INVENTORY:
      return {
        ...state,
        inventory: null,
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
    case types.DELETE_INVENTORY:
      return {
        ...state,
        inventories: state.inventories.filter(
          (inv) => inv._id !== action.payload
        ),
        loading: false,
      };
    case types.INVENTORY_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
