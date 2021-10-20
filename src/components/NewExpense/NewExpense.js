import React, {useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    props.onSaveAppExpense(enteredExpenseData);
    //console.log(expenseData);
  };

  const [showButton, setShowButton] = useState(true)

  const buttonClickHandler = prevState => {
    setShowButton(!prevState);
  }

  const cancelClickHandler = (booleanValue) => {
    setShowButton(booleanValue)
  }

  
  if (showButton) {
    return (
      <div className="new-expense">
        <button onClick={buttonClickHandler} >
          Click me for form
        </button>
      </div>
    )
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onHandleCancel={cancelClickHandler} />
    </div>
  );
}

export default NewExpense;