import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false)
  const expenseFormData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.ceil(Math.random() * 20 + 1).toString(),
    }
    props.onAddExpense(expenseData)
    setDisplayForm(false)
  }

  const addNewExpenseHandler = () => {
    setDisplayForm(true)
  }

  const displayAddExpenseButton = () => {
    setDisplayForm(false)
  }

  return (
    <div className='new-expense'>
      {!displayForm && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
      {displayForm && (
        <ExpenseForm
          onSaveExpenseData={expenseFormData}
          onCancel={displayAddExpenseButton}
        />
      )}
    </div>
  )
}

export default NewExpense
