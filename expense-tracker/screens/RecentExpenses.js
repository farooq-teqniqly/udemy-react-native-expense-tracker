import React from "react";
import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput";

const RecentExpenses = () => {
  return (
    <ExpensesOutput periodName="Expenses for the last 7 days"></ExpensesOutput>
  );
};

export default RecentExpenses;
