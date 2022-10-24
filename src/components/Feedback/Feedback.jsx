import Buttons from 'components/Buttons/Buttons';
import Statistics from 'components/Statistics/Statistics';
import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    initialValue: 0,
    good: 0,
    neutral: 0,
    bad: 0,
    goodPercent: 0,
  };

  handleIncrementGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
    this.calcGoodPercent(this.state);
  };
  handleIncrementNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
    this.calcGoodPercent(this.state);
  };
  handleIncrementBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
    this.calcGoodPercent(this.state);
  };

  calcGoodPercent = ({ good, neutral, bad }) => {
    const calculated = (good /(good + neutral + bad)) * 100;
    return calculated.toFixed(0)
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <Buttons onClickGood={this.handleIncrementGood} onClickNeutral={this.handleIncrementNeutral} onClickBad={this.handleIncrementBad}/>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          calcGood = {this.calcGoodPercent(this.state)}
        />
      </div>
    );
  }
}

export default Feedback;
