import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { dateSubtract } from "../utils/date";
import AppConfig from "../config/appConfig";

const RecentExpenses = () => {
  const context = useContext(ExpensesContext);

  const recentExpenses = context.expenses.filter((expense) => {
    return (
      expense.date >
      dateSubtract(new Date(), parseInt(AppConfig.expensesPeriodInDays))
    );
  });

  const periodName = `Expenses for the last ${AppConfig.expensesPeriodInDays} days`;

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      periodName={periodName}
      fallbackText="No expenses"
    ></ExpensesOutput>
  );
};

export default RecentExpenses;
