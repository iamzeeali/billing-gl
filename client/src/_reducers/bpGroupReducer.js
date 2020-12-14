import * as types from "../_actions/types";

const initialState = {
  bpGroup: null,
  bpGroups: [],
  error: {},
  filtered: null,
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_BP_GROUP:
      return {
        ...state,
        bpGroup: payload,
        loading: false
      };
    case types.GET_BP_GROUPS:
      return {
        ...state,
        bpGroups: payload,
        loading: false
      };
    case types.ADD_BP_GROUP:
      return {
        ...state,
        bpGroup: payload,
        loading: false
      };
    case types.SET_CURRENT_BP_GROUP:
      return {
        ...state,
        bpGroup: action.payload
      };
    case types.CLEAR_BP_GROUP:
      return {
        ...state,
        bpGroup: null,
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
    case types.DELETE_BP_GROUP:
      return {
        ...state,
        bpGroups: state.bpGroups.filter(bpg => bpg._id !== action.payload),
        loading: false
      };
    case types.BP_GROUP_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
