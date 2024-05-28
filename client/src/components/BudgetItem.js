// BudgetItem.js

import React, { useState } from 'react';
import CategoryDropdown from './CategoryDropdown';

const BudgetItem = ({ income, onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onCategorySelect(income, category);
  };

  return (
    <div>
      <p>{income.name}</p>
      <p>Amount: ${income.amount}</p>
      <CategoryDropdown categories={['Salary', 'Freelance']} onSelectCategory={handleCategorySelect} />
    </div>
  );
};

export default BudgetItem;
