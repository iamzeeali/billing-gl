import * as types from "../_actions/types";

const initialState = {
  supplierGroup: null,
  supplierGroups: [],
  error: {},
  filtered: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_SUPPLIER_GROUP:
      return {
        ...state,
        supplierGroup: payload,
        loading: false,
      };
    case types.GET_SUPPLIER_GROUPS:
      return {
        ...state,
        supplierGroups: payload,
        loading: false,
      };
    case types.ADD_SUPPLIER_GROUP:
      return {
        ...state,
        supplierGroup: payload,
        loading: false,
      };
    case types.SET_CURRENT_SUPPLIER_GROUP:
      return {
        ...state,
        supplierGroup: action.payload,
      };
    case types.CLEAR_SUPPLIER_GROUP:
      return {
        ...state,
        supplierGroup: null,
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
    case types.DELETE_SUPPLIER_GROUP:
      return {
        ...state,
        supplierGroups: state.supplierGroups.filter(
          (sg) => sg._id !== action.payload
        ),
        loading: false,
      };
    case types.SUPPLIER_GROUP_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
