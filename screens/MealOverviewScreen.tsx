import {
	FlatList,
	Image,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function MealOverviewScreen() {
	const navigation = useNavigation();
	const route = useRoute();

	const selectedMeal = MEALS.filter(
		(item) => item.categoryIds.indexOf(route?.params?.categoryId) >= 0
	);

	useLayoutEffect(() => {
		navigation.setOptions({
			title: CATEGORIES.find((c) => c.id == route?.params?.categoryId)
				?.title,
		});
	}, [route?.param?.categoryId, navigation]);

	return (
		<View style={styles.container}>
			<FlatList
				data={selectedMeal}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => {
					return (
						<View style={styles.mealItem}>
							<Pressable
								style={({ pressed }) =>
									pressed ? styles.buttonPressed : null
								}
								onPress={() =>
									navigation.navigate("MealDetail", {
										mealId: item.id,
									})
								}
							>
								<View>
									<Image
										style={styles.image}
										source={{ uri: item.imageUrl }}
									/>
									<Text style={styles.text}>
										{item.title}
									</Text>
								</View>
								<View style={styles.info}>
									<Text style={styles.infoText}>
										{item.duration}
									</Text>
									<Text style={styles.infoText}>
										{item.complexity}
									</Text>
									<Text style={styles.infoText}>
										{item.affordability}
									</Text>
								</View>
							</Pressable>
						</View>
					);
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	image: {
		width: "100%",
		height: 200,
	},
	buttonPressed: {
		opacity: 0.5,
	},
	text: {
		fontWeight: "bold",
		textAlign: "center",
		padding: 16,
		fontSize: 18,
	},
	mealItem: {
		margin: 16,
		borderRadius: 8,
		overflow: "hidden",
		backgroundColor: "white",
	},
	info: {
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
