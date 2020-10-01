import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import AppButton from "../components/AppButton";

const WelcomeScreen = () => {
	return (
		<ImageBackground
			style={styles.background}
			source={require("../assets/background.jpg")}>
			<View style={styles.logoContainer}>
				<Image source={require("../assets/logo-red.png")} style={styles.logo} />
				<Text>Sell what you don't need</Text>
			</View>
			<View style={styles.btnContainer}>
				<AppButton text="login" color="primary" />
				<AppButton text="register" color="secondary" />
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
		backgroundColor: "red",
		width: "100%",
	},
	loginButton: {
		width: "100%",
		height: 70,
		backgroundColor: "#fc5c65",
	},
	registerButton: {
		width: "100%",
		height: 70,
		backgroundColor: "#4ecdc4",
	},
	logo: { width: 100, height: 100 },
	logoContainer: {
		position: "absolute",
		top: 70,
		alignItems: "center",
	},
	btnContainer: {
		padding: 20,
		width: "100%",
	},
});

export default WelcomeScreen;
