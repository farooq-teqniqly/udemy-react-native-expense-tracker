import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
  return (
    <ExpenseItem
      id={itemData.item.id}
      description={itemData.item.description}
      amount={itemData.item.amount}
      date={itemData.item.date}
    ></ExpenseItem>
  );
}

export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    ></FlatList>
  );
}
