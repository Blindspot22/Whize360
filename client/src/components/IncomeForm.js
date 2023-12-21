// IncomeForm.js

import React, { useState } from 'react';

const IncomeForm = ({ onAddIncome }) => {
  const [incomeName, setIncomeName] = useState('');
  const [incomeAmount, setIncomeAmount] = useState('');

  const handleAddIncome = () => {
    const newIncome = {
      name: incomeName,
      amount: parseFloat(incomeAmount),
    };

    // Validate and prevent adding empty or invalid income
    if (incomeName.trim() !== '' && !isNaN(newIncome.amount)) {
      onAddIncome(newIncome);
      setIncomeName('');
      setIncomeAmount('');
    }
  };

  return (
    <div>
      <label>
        Income Source:
        <input type="text" value={incomeName} onChange={(e) => setIncomeName(e.target.value)} />
      </label>
      <label>
        Amount:
        <input type="number" value={incomeAmount} onChange={(e) => setIncomeAmount(e.target.value)} />
      </label>
      <button onClick={handleAddIncome}>Add Income</button>
    </div>
  );
};

export default IncomeForm;
