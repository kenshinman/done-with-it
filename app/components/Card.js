import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../config/colors";

const Card = ({ title, subTitle, image }) => {
	return (
		<View style={styles.card}>
			<Image style={styles.cardImage} source={image} />
			<View style={styles.textArea}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.subTitle}>{subTitle}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		width: "90%",
		marginHorizontal: "5%",
		height: 320,
		borderRadius: 15,
		backgroundColor: colors.white,
		paddingBottom: 80,
		marginVertical: 10,
		overflow: "hidden",
	},
	cardImage: {
		width: "100%",
		height: 200,
	},
	subTitle: {
		color: colors.secondary,
		fontWeight: "bold",
		fontSize: 18,
		lineHeight: 24,
		marginTop: 10,
	},
	textArea: {
		padding: 20,
	},
	title: {
		fontSize: 20,
		lineHeight: 28,
	},
});

export default Card;
