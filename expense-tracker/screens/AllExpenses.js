import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput";
import { ExpensesContext } from "../store/ExpensesContext";

const AllExpenses = () => {
  const context = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={context.expenses}
      fallbackText="No expenses"
    ></ExpensesOutput>
  );
};

export default AllExpenses;
