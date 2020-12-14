import * as types from "../_actions/types";

const initialState = {
  businessPartner: null,
  businessPartners: [],
  error: {},
  filtered: null,
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_BUSINESS_PARTNER:
      return {
        ...state,
        businessPartner: payload,
        loading: false
      };
    case types.GET_BUSINESS_PARTNERS:
      return {
        ...state,
        businessPartners: payload,
        loading: false
      };
    case types.ADD_BUSINESS_PARTNER:
      return {
        ...state,
        businessPartner: payload,
        loading: false
      };
    case types.SET_CURRENT_BUSINESS_PARTNER:
      return {
        ...state,
        businessPartner: action.payload
      };
    case types.CLEAR_BUSINESS_PARTNER:
      return {
        ...state,
        businessPartner: null,
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
    case types.DELETE_BUSINESS_PARTNER:
      return {
        ...state,
        businessPartners: state.businessPartners.filter(
          businessPartner => businessPartner._id !== action.payload
        ),
        loading: false
      };
    case types.BUSINESS_PARTNER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
