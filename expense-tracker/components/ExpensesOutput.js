import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import DummyExpenses from "../data/dummyExpenses";

function ExpensesOutput({ periodName }) {
  return (
    <View>
      <ExpensesSummary
        expenses={DummyExpenses}
        periodName={periodName}
      ></ExpensesSummary>
      <ExpensesList expenses={DummyExpenses}></ExpensesList>
    </View>
  );
}

export default ExpensesOutput;
