import React, { Component } from 'react';
import Statistics from './Statistics';
import './Counter.css';
import { FeedbackOptions } from './FeedbackOptions';
import { SectionTitle } from './SectionTitle';
import { NotificationMessage } from './NotificationMessage';

class Feedback extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  onLeaveFeedback = e => {
    const { name } = e.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = total => {
    return Math.round((this.state.good * 100) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);

    return (
      <div className="Feedback">
        <SectionTitle title={'Please leave feedback'}>
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        </SectionTitle>
        <SectionTitle title={'Statictics'}>
          {total > 0 ? (
            <Statistics
              value={{ good, neutral, bad, total, positivePercentage }}
            />
          ) : (
            <NotificationMessage message="There is no feedback" />
          )}
        </SectionTitle>
      </div>
    );
  }
}
export default Feedback;
