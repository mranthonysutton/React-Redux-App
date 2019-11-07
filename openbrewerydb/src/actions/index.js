import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

// Need to set our axios call here

export const fetchBreweryData = () => dispatch => {
  dispatch({ type: FETCH_START });

  axios
    .get("https://api.openbrewerydb.org/breweries")
    .then(response => console.log(response))
    .catch(error => console.log(error));
};
