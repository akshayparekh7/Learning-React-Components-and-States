import React from 'react';
import './ExpenseFilter.css'

const ExpenseFilter = (props) => {

  const selectionChangeHandler = (event) => {
    props.onFilterValue(event.target.value)
  };

  return (
    <div className="expenses-filter">
      <div>
        <label>Choose the year</label>
      </div>
      <select name="filter" onChange={selectionChangeHandler}>
        <option>2020</option>
        <option>2021</option>
        <option>2022</option>
        <option>2023</option>
        <option>2024</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;