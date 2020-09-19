import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import ReactCountUp from "react-countup-v2";
import cx from "classnames";

import styles from "./Cards.module.css";

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  const onReady = (instance, CountUp) => {};
  const onComplete = (instance, CountUp) => {};
  const onUpdate = (instance, CountUp) => {};
  const onError = (error) => console.error(error);
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.total)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Total Confirmed
            </Typography>

            <Typography variant="h5" component="h2">
              <ReactCountUp
                delay={10}
                endVal={confirmed.value}
                onReady={onReady}
                onComplete={onComplete}
                onUpdate={onUpdate}
                onError={onError}
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of Total cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Active
            </Typography>

            <Typography variant="h5" component="h2">
              <ReactCountUp
                delay={10}
                endVal={confirmed.value - recovered.value - deaths.value}
                onReady={onReady}
                onComplete={onComplete}
                onUpdate={onUpdate}
                onError={onError}
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of active cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5" component="h2">
              <ReactCountUp
                delay={10}
                endVal={recovered.value}
                onReady={onReady}
                onComplete={onComplete}
                onUpdate={onUpdate}
                onError={onError}
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of recoveries from COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <br />
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" component="h2">
              <ReactCountUp
                delay={10}
                endVal={deaths.value}
                onReady={onReady}
                onComplete={onComplete}
                onUpdate={onUpdate}
                onError={onError}
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of deaths caused by COVID-19.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Info;
