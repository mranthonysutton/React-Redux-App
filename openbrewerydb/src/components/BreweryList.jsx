import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBreweryData } from "../actions";
import Brewery from "./Brewery";

const BreweryList = props => {
  useEffect(() => {
    props.fetchBreweryData();
  }, []);

  if (props.isLoading) {
    return <h3>🍺 Brewery Data Loading... 🍺</h3>;
  }

  return (
    <div>
      {props.error && <p>Error Loading List Of Breweries...</p>}
      {props.breweryData.map(data => (
        <Brewery key={data.id} name={data.name} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    breweryData: state.breweryData,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchBreweryData }
)(BreweryList);
