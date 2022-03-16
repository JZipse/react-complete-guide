import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({onAddExpense}) => {

    const saveExpenseHandler = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString()
        };
        onAddExpense(expenseData)
        //console.log(expenseData)
    }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
