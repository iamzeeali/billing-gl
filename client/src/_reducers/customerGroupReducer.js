import * as types from "../_actions/types";

const initialState = {
  customerGroup: null,
  customerGroups: [],
  error: {},
  filtered: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_CUSTOMER_GROUP:
      return {
        ...state,
        customerGroup: payload,
        loading: false,
      };
    case types.GET_CUSTOMER_GROUPS:
      return {
        ...state,
        customerGroups: payload,
        loading: false,
      };
    case types.ADD_CUSTOMER_GROUP:
      return {
        ...state,
        customerGroup: payload,
        loading: false,
      };
    case types.SET_CURRENT_CUSTOMER_GROUP:
      return {
        ...state,
        customerGroup: action.payload,
      };
    case types.CLEAR_CUSTOMER_GROUP:
      return {
        ...state,
        customerGroup: null,
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
    case types.DELETE_CUSTOMER_GROUP:
      return {
        ...state,
        customerGroups: state.customerGroups.filter(
          (cg) => cg._id !== action.payload
        ),
        loading: false,
      };
    case types.CUSTOMER_GROUP_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
