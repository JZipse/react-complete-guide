import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 2,
    title: "Medical Bill",
    amount: 177.93,
    date: new Date(2022, 7, 2),
  },
  { id: 3, 
    title: "Home Loan", 
    amount: 400.43, 
    date: new Date(2022, 0, 19) 
  },
  { id: 4, 
    title: "Spotify", 
    amount: 12.99, 
    date: new Date(2022, 3, 18) 
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) =>{
    console.log("IN APP.JS")
    console.log(expense)
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
