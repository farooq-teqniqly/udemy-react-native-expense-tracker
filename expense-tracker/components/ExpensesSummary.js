import { View, Text, StyleSheet } from "react-native";
import Theme from "../constants/themes";

export default function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 14,
    fontWeight: "bold",
    color: Theme.colors.text,
  },
  sum: {
    fontSize: 14,
    fontWeight: "bold",
    color: Theme.colors.error,
  },
});
