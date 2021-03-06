import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import StockGraph from '../StockGraph/stockGraph';
import { green } from '@material-ui/core/colors';

function StockListItem() {
  return (
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        style={{ borderTop: "3px solid black", padding: 10 }}
      >
            <Typography variant="h6" component="h6">
                AAPL
            </Typography>

            <StockGraph width={100} height={80}></StockGraph>

            <Typography style={{color: "green"}} variant="h6" component="h6">
                $303.65
            </Typography>

      </Grid>
  );
}

export default StockListItem;