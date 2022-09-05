import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [filteredItems, setFilteredItems] = useState([]);

  const filterChangeHandler = (filteredYear) => {
    setFilteredItems(
      props.items.filter(
        (item) => item.date.getFullYear() === Number(filteredYear)
      )
    );
    setFilteredYear(filteredYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>
        {filteredItems.map((element) => {
          return (
            <ExpenseItem
              key={element.id}
              title={element.title}
              amount={element.amount}
              date={element.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
