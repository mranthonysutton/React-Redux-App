import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBreweryData } from "../actions";
import Brewery from "./Brewery";
import { Container, Box } from "@material-ui/core";

const BreweryList = props => {
  useEffect(() => {
    props.fetchBreweryData();
  }, []);

  if (props.isLoading) {
    return <h3>🍺 Brewery Data Loading... 🍺</h3>;
  }

  return (
    <Container>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignContent="space-beetween"
      >
        {props.error && <p>Error Loading List Of Breweries...</p>}
        {props.breweryData.map(data => (
          <Brewery
            key={data.id}
            name={data.name}
            url={data.website_url}
            streetAddress={data.street}
            city={data.city}
            state={data.state}
            zipcode={data.postal_code}
            brewType={data.brewery_type}
          />
        ))}
      </Box>
    </Container>
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
