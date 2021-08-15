import React, { useState } from 'react'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
  const { items } = props

  const [filteredYear, setFilteredYear] = useState('2021')

  const filterYear = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          onChangeFilter={filterYear}
          filteredYear={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses
