import React from "react";
import { Button, Card, CardContent, Typography } from "@material-ui/core";

const Brewery = props => {
  return (
    <Card className="brewery-card">
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.name} ({props.brewType})
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className="margin-paragraph"
        >
          {props.streetAddress}, {props.city}, {props.state} {props.zipcode}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          target="_blank"
          href={props.url}
        >
          🍺 View Website 🍺
        </Button>
      </CardContent>
    </Card>
  );
};

export default Brewery;
