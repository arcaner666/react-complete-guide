import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // Birbiriyle ilişkili stateler alttaki gibi beraber tutulabileceği gibi
  //   const [enteredUserInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });
  //   const titleChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //       return { ...enteredUserInput, enteredTitle: event.target.value };
  //     });
  //   };
  //   const amountChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //       return { ...enteredUserInput, enteredAmount: event.target.value };
  //     });
  //   };
  //   const dateChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //       return { ...enteredUserInput, enteredDate: event.target.value };
  //     });
  //   };

  // ayrı ayrı da tutulabilir. Bu önerilen yöntemdir.
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
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
