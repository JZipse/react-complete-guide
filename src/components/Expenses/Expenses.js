import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import ExpensesChar from "./ExpensesChar";

const Expenses = ({ expenses }) => {
  const [year, setYear] = useState("2020");

  const yearFilter = (enteredData) => {
    setYear(enteredData);
  };

  const filteredExpenses = expenses.filter((item) => {
    return item.date.getFullYear().toString() === year;
  });



  return (
      <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onYearChange={yearFilter} />
        <ExpensesChar expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses}/>
      </Card>
      </div>
  );
};

export default Expenses;
