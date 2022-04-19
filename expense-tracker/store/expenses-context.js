import { createContext, useReducer } from "react";
import DummyExpenses from "../data/dummyExpenses";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const expenseToUpdateIndex = state.findIndex((expense) => {
        return expense.id === action.payload.id;
      });

      const expenseToUpdate = state[expenseToUpdateIndex];
      const updatedExpense = { ...expenseToUpdate, ...action.payload.data };
      const updatedExpenses = [...state];

      updatedExpenses[expenseToUpdateIndex] = updatedExpense;

      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [state, dispatch] = useReducer(expensesReducer, DummyExpenses);

  function addExpense(expense) {
    dispatch({ type: "ADD", payload: expense });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expense) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expense } });
  }

  const value = {
    expenses: state,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
