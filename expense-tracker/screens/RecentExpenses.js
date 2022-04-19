import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { dateSubtract } from "../utils/date";

const RecentExpenses = () => {
  const context = useContext(ExpensesContext);

  const recentExpenses = context.expenses.filter((expense) => {
    return expense.date > dateSubtract(new Date(), 7);
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      periodName="Expenses for the last 7 days"
    ></ExpensesOutput>
  );
};

export default RecentExpenses;
