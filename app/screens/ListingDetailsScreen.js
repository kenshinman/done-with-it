import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";

const ListingDetailsScreen = () => {
	return (
		<View>
			<Image style={styles.image} source={require("../assets/jacket.jpg")} />
			<AppText style={styles.title}>Red jacket for sale</AppText>
			<AppText style={styles.subTitle}>$100</AppText>
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 300,
	},
	title: { color: colors.black },
});

export default ListingDetailsScreen;
