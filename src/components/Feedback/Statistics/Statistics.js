import React from 'react';
import PropTypes from 'prop-types';
import Value from '../Value';

const Statistics = ({
  value: { good, neutral, bad, totalFeedback, positivePercentage },
}) => (
  <div>
    <Value valueName={'Good'} value={good} />
    <Value valueName={'Neutral'} value={neutral} />
    <Value valueName={'Bad'} value={bad} />
    <Value valueName={'Total'} value={totalFeedback} />
    <Value
      valueName={'Positive feedback'}
      value={isNaN(positivePercentage) ? 0 : positivePercentage}
    />
  </div>
);

Statistics.propTypes = {
  value: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    totalFeedback: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }).isRequired,
};

export default Statistics;
