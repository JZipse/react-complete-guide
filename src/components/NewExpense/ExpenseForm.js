import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({onSaveExpense, showForm}) => {
  const [iTitle, setITitle] = useState("");
  const [iDate, setIDate] = useState("");
  const [iAmount, setIAmount] = useState("");
  //const [showForm, setShowForm] = useState(false)

  const dateHandler = (e) => {
    setIDate(e.target.value);
  };

  const amountHandler = (e) => {
    setIAmount(e.target.value);
  };

  const titleHandler = (e) => {
    setITitle(e.target.value);
  };

  const submitHandler = (e) => {
      e.preventDefault();
      const expenseData = {
          title: iTitle,
          amount: +iAmount,
          date: new Date(iDate + 'T00:00:00')
      }
      console.log('EXPENSE FORM.JS')
      console.log(expenseData)
      onSaveExpense(expenseData)
      setITitle('')
      setIAmount('')
      setIDate('')
  };

  const closeForm = (e) => {
    showForm()
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={iTitle} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={iAmount}
            min="0.01"
            step="0.01"
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={iDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={closeForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
