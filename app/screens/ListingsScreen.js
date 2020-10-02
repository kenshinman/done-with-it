import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

const listings = [
	{
		id: 1,
		title: "Red jacket for sale",
		price: 100,
		image: require("../assets/jacket.jpg"),
	},
	{
		id: 2,
		title: "Used car for sale",
		price: 1340,
		image: require("../assets/car.jpg"),
	},
	{
		id: 3,
		title: "Couch ingreat condition for sale",
		price: 1190,
		image: require("../assets/couch.jpg"),
	},
];

const ListingsScreen = () => {
	return (
		<Screen>
			<FlatList
				data={listings}
				keyExtractor={(listing) => `${listing.id}`}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subTitle={`$${item.price}`}
						image={item.image}
					/>
				)}
			/>
		</Screen>
	);
};

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
	},
});

export default ListingsScreen;
