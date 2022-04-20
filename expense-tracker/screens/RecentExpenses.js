import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput";
import { ExpensesContext } from "../store/ExpensesContext";
import { dateSubtract } from "../utils/date"
import { ExpensePeriodContext } from "../store/ExpensePeriodContext";
import ExpensePeriodPicker from "../components/ui/ExpensePeriodPicker";
import { Text, StyleSheet, View } from "react-native";
import Theme from "../constants/themes";

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

  const periodName = `Expense total for the last ${expensePeriodContext.period} days`;

  return (
    <>
    <View style={styles.pickerContainer}>
    <Text>Show expenses for the last</Text>
    <View style={styles.picker}>
    <ExpensePeriodPicker period={expensePeriodContext.period} setPeriod={expensePeriodContext.updatePeriod}></ExpensePeriodPicker>
    </View>
    
    </View>
    
      <ExpensesOutput
      expenses={recentExpenses}
      periodName={periodName}
      fallbackText="No expenses"
    ></ExpensesOutput>
    </>
    
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({
  pickerContainer : {
    backgroundColor: Theme.colors.background,
    padding: 20
  },
  picker: {
    marginLeft: 0
  }
});