import Card from './Card';
import ExpenseFilter from './ExpenseFilter'
import './Expenses.css'
import { useState } from 'react';
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

function Expenses(props) {
  const [filteredValue, setFilteredValue] = useState('2020');

  const filterValue = selectedYear => {
    setFilteredValue(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredValue;
  })

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter selected={filteredValue} onFilterValue={filterValue}/>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;