import React from "react";
import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput";

const RecentExpenses = () => {
  return <ExpensesOutput periodName="Last 7 Days"></ExpensesOutput>;
};

export default RecentExpenses;
