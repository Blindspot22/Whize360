// BudgetChart.js

import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';


const BudgetChart = ({ data }) => {
  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
      <Legend />
      <Line type="monotone" dataKey="income" stroke="#8884d8" />
      <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
    </LineChart>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`Date: ${payload[0].payload.date}`}</p>
        <p>{`Income: $${payload[0].payload.income}`}</p>
        <p>{`Expenses: $${payload[0].payload.expenses}`}</p>
      </div>
    );
  }

  return null;
};

export default BudgetChart;
