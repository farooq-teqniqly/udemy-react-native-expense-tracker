import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput";
import { ExpensesContext } from "../store/ExpensesContext";
import { dateSubtract } from "../utils/date"
import { ExpensePeriodContext } from "../store/ExpensePeriodContext";

const RecentExpenses = () => {
  const context = useContext(ExpensesContext);
  const expensePeriodContext = useContext(ExpensePeriodContext);
  console.log(expensePeriodContext.period);

  const recentExpenses = context.expenses.filter((expense) => {
    return (
      expense.date >
      dateSubtract(new Date(), expensePeriodContext.period)
    );
  });

  const periodName = `Expenses for the last ${expensePeriodContext.period} days`;

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      periodName={periodName}
      fallbackText="No expenses"
    ></ExpensesOutput>
  );
};

export default RecentExpenses;
