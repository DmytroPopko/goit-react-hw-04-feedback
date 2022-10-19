import React from 'react';
import PropTypes from 'prop-types';
import Value from '../Value';

const Statistics = ({
  value: { good, neutral, bad, total, positivePercentage },
}) => (
  <div>
    <Value valueName={'Good'} value={good} />
    <Value valueName={'Neutral'} value={neutral} />
    <Value valueName={'Bad'} value={bad} />
    <Value valueName={'Total'} value={total} />
    <Value
      valueName={'Positive feedback'}
      value={isNaN(positivePercentage) ? 0 : positivePercentage}
    />
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
