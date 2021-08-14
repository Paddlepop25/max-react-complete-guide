import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'

const Expenses = (props) => {
  const { items } = props

  const [filteredYear, setFilteredYear] = useState('2019')

  const filterYear = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          onChangeFilter={filterYear}
          filteredYear={filteredYear}
        />
        <ExpenseItem
          title={items[0].title}
          amount={items[0].amount}
          date={items[0].date}
        />
        <ExpenseItem
          title={items[1].title}
          amount={items[1].amount}
          date={items[1].date}
        />
        <ExpenseItem
          title={items[2].title}
          amount={items[2].amount}
          date={items[2].date}
        />
        <ExpenseItem
          title={items[3].title}
          amount={items[3].amount}
          date={items[3].date}
        />
      </Card>
    </div>
  )
}

export default Expenses
