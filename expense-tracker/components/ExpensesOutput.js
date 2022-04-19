import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import Theme from "../constants/themes";

function ExpensesOutput({ expenses, periodName }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary
        expenses={expenses}
        periodName={periodName}
      ></ExpensesSummary>
      <View style={styles.list}>
        <ExpensesList expenses={expenses}></ExpensesList>
      </View>
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
});
