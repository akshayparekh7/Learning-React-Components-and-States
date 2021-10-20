import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> No Expense found</h2>
  }

  return (
    <ul className="expenses-list">
      {props.items.map(expense => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            price={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul> 
  )
}

export default ExpensesList