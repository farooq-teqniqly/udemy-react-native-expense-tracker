import { View, Text, Pressable, StyleSheet } from "react-native";
import Theme from "../constants/themes";
import { getFormattedDate } from "../utils/date";

export default function ExpenseItem({ description, amount, date }) {
  function expensePressHandler() {}

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: Theme.colors.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
  },
  textBase: {
    color: Theme.colors.text,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: Theme.colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  amount: {
    color: Theme.colors.text,
    fontWeight: "bold",
    minWidth: 60,
    textAlign: "right",
  },
  pressed: {
    opacity: 0.75,
  },
});
