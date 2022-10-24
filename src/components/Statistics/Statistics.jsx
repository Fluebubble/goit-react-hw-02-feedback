import React, { Component } from 'react';
import { Notification } from 'components/Notification/Notification';
export class Statistics extends Component {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  render() {
    return (
      <>
        {this.props.good + this.props.neutral + this.props.bad > 0 ? (
          <>
            <h2>Statistics</h2>
            <p>
              Good:<span> {this.props.good}</span>
            </p>
            <p>
              Neutral:<span> {this.props.neutral}</span>
            </p>
            <p>
              Bad:<span> {this.props.bad}</span>
            </p>
            <p>
              Total:
              <span>
                {' '}
                {this.props.bad + this.props.neutral + this.props.good}
              </span>
            </p>
            <p>
              Positive feedback: <span>{this.props.calcGood}%</span>
            </p>
          </>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}

export default Statistics;
