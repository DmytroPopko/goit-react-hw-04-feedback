import React from 'react';

const Value = ({ valueName, value }) => (
  <span className="Counter__value">
    {valueName}: {value} {valueName === 'Positive feedback' ? ' %' : ''}
  </span>
);

export default Value;
