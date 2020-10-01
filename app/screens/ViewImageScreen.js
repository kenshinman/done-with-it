import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewImageScreen = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.closeIcon}>
				<MaterialCommunityIcons name="close" color="white" size={35} />
			</View>
			<View style={styles.deleteIcon}>
				<MaterialCommunityIcons
					name="trash-can-outline"
					color="white"
					size={35}
				/>
			</View>
			<Image style={styles.image} source={require("../assets/chair.jpg")} />
		</View>
	);
};

const styles = StyleSheet.create({
	closeIcon: {
		top: 40,
		left: 30,
		position: "absolute",
	},
	container: {
		flex: 1,
		backgroundColor: "black",
	},
	deleteIcon: {
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
