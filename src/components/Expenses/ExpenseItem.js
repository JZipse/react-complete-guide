import React, {useState} from 'react'
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"

const ExpenseItem = ({ title, amount, date }) => {

  const [t, setT] = useState(title);

  const clickHandler = () => {
    console.log('Clicked')
    setT('Updated')
  }  

  return (
    <Card className="expense-item">
    <ExpenseDate date={date} /> 
      <div>
        <h2 className="expense-item__description">{t}</h2>
      </div>
      <div className="expense-item__price">${amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
