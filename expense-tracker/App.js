import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import Theme from "./constants/themes";
import IconButton from "./components/ui/IconButton";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function configureIcon(name, color, size) {
  return <Ionicons name={name} size={size} color={color}></Ionicons>;
}

function BottomTabsNavigator() {
  return (
    <BottomTabs.Navigator
      screenOptions={
        {
          // headerStyle: { backgroundColor: Theme.colors.primary },
          // headerTintColor: Theme.colors.background,
          // tabBarActiveTintColor: Theme.colors.primary,
          // tabBarStyle: { backgroundColor: Theme.colors.primary },
          // tabBarActiveTintColor: Theme.colors.background,
        }
      }
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent Expenses",
          tabBarIcon: ({ color, size }) =>
            configureIcon("hourglass", color, size),
        }}
      ></BottomTabs.Screen>
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) =>
            configureIcon("calendar", color, size),
        }}
      ></BottomTabs.Screen>
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Theme.colors.primary },
            // headerTintColor: Theme.colors.primary,
          }}
        >
          <Stack.Screen
            name="ExpensesOverview"
            component={BottomTabsNavigator}
            options={({ navigation }) => ({
              title: "Expense Tracker",
              headerShown: true,
              headerRight: () => (
                <IconButton
                  icon="add"
                  size={36}
                  color={Theme.colors.secondary}
                  onPress={() => {
                    navigation.navigate("ManageExpense");
                  }}
                ></IconButton>
              ),
            })}
          ></Stack.Screen>
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpense}
            options={{
              title: "Manage Expense",
            }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
