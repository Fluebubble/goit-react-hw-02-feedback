import React from 'react';
import { Notification } from 'components/Notification/Notification';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, calcGood }) => {
  return (
    <>
      {good + neutral + bad > 0 ? (
        <>
          <h2>Statistics</h2>
          <p>
            Good:<span> {good}</span>
          </p>
          <p>
            Neutral:<span> {neutral}</span>
          </p>
          <p>
            Bad:<span> {bad}</span>
          </p>
          <p>
            Total:
            <span> {bad + neutral + good}</span>
          </p>
          <p>
            Positive feedback: <span>{calcGood}%</span>
          </p>
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  calcGood: PropTypes.string.isRequired,
};

export default Statistics;
