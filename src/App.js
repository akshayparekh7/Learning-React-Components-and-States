import { useState } from 'react';
import Expenses from './components/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
    {
      title: "Test 1",
      amount: "234",
      date: new Date()
    },
    {
      title: "Test 2",
      amount: "7456",
      date: new Date()
    },
    {
      title: "Test 1",
      amount: "645",
      date: new Date()
    }
  ];

function App() {  

  const [expenseData, setExpenseData] = useState(INITIAL_EXPENSES)

  const saveAppExpenseHandler = (enteredExpenseData) => {
    setExpenseData(prevExpenses => {
      return [enteredExpenseData, ...prevExpenses];
      }
    )
  };

  return ( 
    <div>
      <NewExpense onSaveAppExpense={saveAppExpenseHandler} />
      <Expenses expenses={expenseData}/>
    </div>
  );
}

export default App;
