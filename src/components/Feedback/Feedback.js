import React, { useState } from 'react';
import Statistics from './Statistics';
import './Counter.css';
import { FeedbackOptions } from './FeedbackOptions';
import { SectionTitle } from './SectionTitle';
import { NotificationMessage } from './NotificationMessage';

export default function Feedback() {
  const [options, setOptions] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = e => {
    const { name } = e.target;
    setOptions(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  };

  const totalFeedback = options.good + options.neutral + options.bad;

  const countPositiveFeedbackPercentage = total => {
    return Math.round((options.good * 100) / total);
  };

  const positivePercentage = countPositiveFeedbackPercentage(totalFeedback);

  return (
    <div className="Feedback">
      <SectionTitle title={'Please leave feedback'}>
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
      </SectionTitle>
      <SectionTitle title={'Statictics'}>
        {totalFeedback > 0 ? (
          <Statistics
            value={{ ...options, totalFeedback, positivePercentage }}
          />
        ) : (
          <NotificationMessage message="There is no feedback" />
        )}
      </SectionTitle>
    </div>
  );
}

// class Feedback extends Component {
//   static defaultProps = {
//     initialValue: 0,
//   };

//   state = {
//     good: this.props.initialValue,
//     neutral: this.props.initialValue,
//     bad: this.props.initialValue,
//   };

//   onLeaveFeedback = e => {
//     const { name } = e.target;
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = total => {
//     return Math.round((this.state.good * 100) / total);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage(total);

//     return (
//       <div className="Feedback">
//         <SectionTitle title={'Please leave feedback'}>
//           <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
//         </SectionTitle>
//         <SectionTitle title={'Statictics'}>
//           {total > 0 ? (
//             <Statistics
//               value={{ good, neutral, bad, total, positivePercentage }}
//             />
//           ) : (
//             <NotificationMessage message="There is no feedback" />
//           )}
//         </SectionTitle>
//       </div>
//     );
//   }
// }

// export default Feedback;
