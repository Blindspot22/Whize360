// CategoryDropdown.js

import React from 'react';

const CategoryDropdown = ({ categories, onSelectCategory }) => {
  return (
    <select onChange={(e) => onSelectCategory(e.target.value)}>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryDropdown;
