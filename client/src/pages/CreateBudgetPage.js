// src/pages/CreateBudgetPage.js
import React from 'react';
import './CreateBudgetPage.css'; // Linking the CSS file

const CreateBudgetPage = () => {
  return (
    <div>
      <h1>Create a New Budget</h1>
      {/* Budget Name Input */}
      <label htmlFor="budgetName">Budget Name:</label>
      <input type="text" id="budgetName" name="budgetName" />

      {/* Time Period Input */}
      <label htmlFor="timePeriod">Time Period:</label>
      <select id="timePeriod" name="timePeriod">
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>

      {/* Submit Button */}
      <button type="submit">Create Budget</button>
    </div>
  );
};

export default CreateBudgetPage;

