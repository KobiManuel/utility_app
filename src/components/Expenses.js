import { useState } from "react";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import "../stylesheets/Expenses.css";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
   const filteredExpenses = props.items.filter(expense => {
     return expense.date.getFullYear().toString() === filteredYear;
   })
  
  /*const filteredCategory = props.items.reduce (
      (acc, displayedDate) => 
       acc.includes(displayedDate.selectedYear) ? acc : acc.concat(displayedDate.selectedYear),
       []
  ); */

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
       <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;

/* return (
        <div className="expenses">
             {expenses.map(({ title, amount, date, id}) => (
         <ExpenseItem title={title} amount={amount} date={date} key={id}  />
     ))}
        </div>
    )
}
export default Expenses 

{props.items.map(({ title, amount, date, id}) => (
         <ExpenseItem title={title} amount={amount} date={date} key={id}  />
     ))}

 another code for reference  {filteredExpenses.length === 0 && <p> no expenses found </p>}
        {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        ))} 
*/
