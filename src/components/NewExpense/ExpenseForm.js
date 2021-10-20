import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amoountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(new Date(event.target.value));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: enteredDate
    }

    props.onSaveExpenseData(expenseData);
    setEnteredAmount('');
    setEnteredTitle('');
    setEnteredDate('');
    props.onHandleCancel(true);
  };

  const cancelClickHandler = () => {
    props.onHandleCancel(true);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new_expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amoountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2021-01-01" value={enteredDate} max="2022-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div>
        <div className="new-expense__actions">
          <button type="submit">Submit</button>
          <button onClick={cancelClickHandler}>Cancel</button>
        </div>
        <div className="new_expense__cancel">
          
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;


