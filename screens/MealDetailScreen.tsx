import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import IconButton from "../components/IconButton";

export default function MealDetailScreen() {
	const route = useRoute();
	const navigation = useNavigation();

	const meal = MEALS.find((m) => m.id === route?.params?.mealId);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => <IconButton onPress={() => {}} />,
		});
	}, []);

	return (
		<View>
			<Image
				style={styles.image}
				source={{
					uri: meal?.imageUrl,
				}}
			/>
			<Text
				style={{
					fontSize: 24,
					textAlign: "center",
					padding: 16,
					color: "white",
					backgroundColor: "#49565b",
				}}
			>
				{meal?.title}
			</Text>
			<View style={styles.info}>
				<Text style={styles.infoText}>{meal?.duration}</Text>
				<Text style={styles.infoText}>{meal?.complexity}</Text>
				<Text style={styles.infoText}>{meal?.affordability}</Text>
			</View>
			<ScrollView style={{ rowGap: 32, padding: 16 }}>
				<View>
					<Text
						style={{
							color: "white",
							opacity: 0.5,
							fontWeight: 500,
							fontSize: 18,
							marginBottom: 16,
						}}
					>
						Ingredients
					</Text>
					<View style={{ rowGap: 6 }}>
						{meal?.ingredients.map(
							(ingredient: string, index: number) => (
								<Text
									style={{ color: "white", fontSize: 16 }}
									key={`${meal.title}-ingredient-${index}`}
								>
									{ingredient}
								</Text>
							)
						)}
					</View>
				</View>
				<View>
					<Text
						style={{
							color: "white",
							opacity: 0.5,
							fontWeight: 500,
							fontSize: 18,
							marginVertical: 16,
						}}
					>
						Steps
					</Text>
					<View style={{ rowGap: 6 }}>
						{meal?.steps.map((step: string, index: number) => (
							<Text
								style={{ color: "white", fontSize: 16 }}
								key={`${meal.title}-step-${index}`}
							>
								{++index} - {step}
							</Text>
						))}
					</View>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 200,
	},
	info: {
		backgroundColor: "#879296",
		padding: 16,
		columnGap: 8,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	infoText: {
		fontSize: 12,
		fontWeight: "300",
		textTransform: "uppercase",
		fontStyle: "italic",
	},
});
