import React from "react";
import { Text, StyleSheet } from "react-native";

const AppText = ({ children }) => {
	return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
	text: {
		color: "tomato",
		ios: {
			fontSize: 20,
			fontFamily: "Avenir",
		},
	},
});

export default AppText;
