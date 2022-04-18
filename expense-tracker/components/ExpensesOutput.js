import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import DummyExpenses from "../data/dummyExpenses";
import Theme from "../constants/themes";

function ExpensesOutput({ periodName }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary
        expenses={DummyExpenses}
        periodName={periodName}
      ></ExpensesSummary>
      <View style={styles.list}>
        <ExpensesList expenses={DummyExpenses}></ExpensesList>
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
