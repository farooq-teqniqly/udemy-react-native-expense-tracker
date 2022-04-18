import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function BottomTabsNavigator() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
      ></BottomTabs.Screen>
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
      ></BottomTabs.Screen>
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="ExpensesOverview"
            component={BottomTabsNavigator}
          ></Stack.Screen>
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpense}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
