import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

const ListingDetailsScreen = () => {
	return (
		<View>
			<Image style={styles.image} source={require("../assets/jacket.jpg")} />
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>Red jacket for sale</AppText>
				<AppText style={styles.price}>$100</AppText>
			</View>
			<View style={styles.userContainer}>
				<ListItem
					title="Kehinde Orilogbon"
					subTitle="5 Listings"
					image={require("../assets/mosh.jpg")}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 300,
	},
	title: {
		fontSize: 24,
		fontWeight: "500",
	},
	detailsContainer: {
		padding: 20,
	},
	price: {
		color: colors.secondary,
		fontWeight: "bold",
		fontSize: 20,
		marginVertical: 10,
	},
	userContainer: {
		paddingVertical: 40,
	},
});

export default ListingDetailsScreen;
