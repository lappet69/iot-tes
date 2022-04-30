import {
  SET_ITEM,
  RESET_ITEM,
  GET_DATA,
  SET_CHART,
} from "../actions/api.actions";

const initialState = {
  reduxState: [],
  API_DATA: [],
  CHART: [],
};
export const api_reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEM:
      return {...state,reduxState: action.payload};
    case SET_CHART:
      return {...state,CHART: action.payload};
    case GET_DATA:
      return {...state,API_DATA: action.payload};
    case RESET_ITEM:
      return initialState;
    default:
      return state;
  }
};

export default api_reducer;
