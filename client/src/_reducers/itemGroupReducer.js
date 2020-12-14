import * as types from "../_actions/types";

const initialState = {
  itemGroup: null,
  itemGroups: [],
  error: {},
  filtered: null,
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_ITEM_GROUP:
      return {
        ...state,
        itemGroup: payload,
        loading: false
      };
    case types.GET_ITEM_GROUPS:
      return {
        ...state,
        itemGroups: payload,
        loading: false
      };
    case types.ADD_ITEM_GROUP:
      return {
        ...state,
        itemGroup: payload,
        loading: false
      };
    case types.SET_CURRENT_ITEM_GROUP:
      return {
        ...state,
        itemGroup: action.payload
      };
    case types.CLEAR_ITEM_GROUP:
      return {
        ...state,
        itemGroup: null,
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
    case types.DELETE_ITEM_GROUP:
      return {
        ...state,
        itemGroups: state.itemGroups.filter(
          itmgrp => itmgrp._id !== action.payload
        ),
        loading: false
      };
    case types.ITEM_GROUP_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
