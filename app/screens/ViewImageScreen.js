import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";

const ViewImageScreen = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.closeIcon}></View>
			<View style={styles.deleteIcon}></View>
			<Image style={styles.image} source={require("../assets/chair.jpg")} />
		</View>
	);
};

const styles = StyleSheet.create({
	closeIcon: {
		height: 50,
		width: 50,
		backgroundColor: colors.primary,
		top: 40,
		left: 30,
	},
	container: {
		flex: 1,
		backgroundColor: "black",
	},
	deleteIcon: {
		height: 50,
		width: 50,
		backgroundColor: colors.secondary,
		top: 40,
		right: 30,
		position: "absolute",
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",
	},
});

export default ViewImageScreen;
