import { Button } from './App.styled';
import { GlobalStyled } from './GlobalStyled';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  onNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  onBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <>
        <GlobalStyled />
        <h2>Please leave feedback</h2>
        <div>
          <Button type="button" onClick={this.onGood}>
            Good
          </Button>
          <Button type="button" onClick={this.onNeutral}>
            Neutral
          </Button>
          <Button type="button" onClick={this.onBad}>
            Bad
          </Button>
        </div>
        <h2 style={{ marginBottom: 20 }}>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
      </>
    );
  }
}
