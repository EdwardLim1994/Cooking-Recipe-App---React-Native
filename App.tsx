import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import CategoriesPage from "./screens/CategoriesPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealOverviewScreen from "./screens/MealOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<StatusBar style='light' />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: {
							backgroundColor: "#453838",
						},
						headerTintColor: "white",
						contentStyle: {
							backgroundColor: "#615858",
						},
					}}
				>
					<Stack.Screen
						name='Categories'
						component={CategoriesPage}
						options={{
							title: "All Category",
						}}
					/>
					<Stack.Screen name='Meal' component={MealOverviewScreen} />
					<Stack.Screen
						name='MealDetail'
						component={MealDetailScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
