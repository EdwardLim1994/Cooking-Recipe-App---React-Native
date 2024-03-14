import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {
	iconName?: string;
	size?: number;
	color?: string;
	onPress: () => void;
};

export default function IconButton(props: Props) {
	return (
		<Pressable
			onPress={props.onPress}
			style={({ pressed }) => (pressed ? styles.pressed : null)}
		>
			<Ionicons
				name={props.iconName ?? "star"}
				size={props.size ?? 24}
				color={props.color ?? "white"}
			/>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	pressed: {
		opacity: 0.5,
	},
});
