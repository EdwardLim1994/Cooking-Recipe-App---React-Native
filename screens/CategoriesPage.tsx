import { StyleSheet, FlatList } from "react-native";
import React from "react";

import { CATEGORIES } from "../data/dummy-data";
import GridTile from "../components/GridTile";

const MainPage = ({ navigation }: any) => {
	return (
		<FlatList
			data={CATEGORIES}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<GridTile
					onPress={() => {
						navigation.navigate("Meal", {
							categoryId: item.id,
						});
					}}
					title={item.title}
					color={item.color}
				/>
			)}
			numColumns={2}
		/>
	);
};

export default MainPage;

const styles = StyleSheet.create({
	container: {
		padding: 16,
		gap: 8,
		flex: 1,
	},
});
