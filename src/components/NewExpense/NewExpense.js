import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({onAddExpense}) => {

    const [showForm, setShowForm] = useState(false)

    const displayForm = (e) => {
      setShowForm(!showForm)
    }

    const saveExpenseHandler = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString()
        };
        console.log("IN NEWEXPENSE.JS")
        console.log(expenseData)
        onAddExpense(expenseData)
    }

    if(!showForm) {
      return ( 
        <div className="new-expense">
          <button onClick={displayForm}>Add Expense</button>
        </div>
        
      )
    }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler} showForm={displayForm} />
    </div>
  );
};

export default NewExpense;
