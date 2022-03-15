import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    { id: 2, title: "Medical Bill", amount: 177.93, date: new Date(2022, 7, 2) },
    { id: 3, title: "Home Loan", amount: 400.43, date: new Date(2022, 0, 19) },
    { id: 4, title: "Spotify", amount: 12.99, date: new Date(2022, 3, 18) },
  ];

  return (
    <div className="App">
      <h1>Let's get started!</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
