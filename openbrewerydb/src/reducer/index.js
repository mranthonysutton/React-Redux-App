import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

const initialState = {
  breweryData: [],
  isLoading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, breweryData: [], isLoading: true, error: null };

    case FETCH_SUCCESS:
      return {
        ...state,
        breweryData: action.payload,
        isLoading: false,
        error: null
      };

    case FETCH_FAILURE:
      return {
        ...state,
        breweryData: [],
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
