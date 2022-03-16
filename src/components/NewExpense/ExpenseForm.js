import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({onSaveExpense}) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const submitHandler = (e) => {
      e.preventDefault();
      const expenseData = {
          title: title,
          amount: amount,
          date: new Date(date)
      }
      onSaveExpense(expenseData)
      setTitle('')
      setAmount('')
      setDate('')
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            min="0.01"
            step="0.01"
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
