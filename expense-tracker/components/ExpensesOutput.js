import { View, StyleSheet, Text } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import Theme from "../constants/themes";

function ExpensesOutput({ expenses, periodName, fallbackText }) {
  let content = <Text style={styles.fallbackText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses}></ExpensesList>;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary
        expenses={expenses}
        periodName={periodName}
      ></ExpensesSummary>
      <View style={styles.list}>{content}</View>
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Theme.colors.background,
  },
  list: {
    marginTop: 10,
  },
  fallbackText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
