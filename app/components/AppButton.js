import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../config/colors";

const AppButton = ({ text, color }) => {
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: colors[color] }]}>
			<Text style={styles.btnText}>{text}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		width: "100%",
		height: 60,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30,
		marginVertical: 10,
	},
	btnText: {
		color: colors.white,
		textTransform: "uppercase",
		fontSize: 18,
		fontWeight: "bold",
	},
});

export default AppButton;
