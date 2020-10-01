// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//my components
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
	return (
		// <View
		// 	style={{ paddingTop: 40, backgroundColor: "#f8f4f4", paddingBottom: 20 }}>
		// 	<Card
		// 		title="Red jacket for sale!"
		// 		subTitle="$200"
		// 		image={require("./app/assets/jacket.jpg")}
		// 	/>
		// 	<Card
		// 		title="Red jacket for sale!"
		// 		subTitle="$200"
		// 		image={require("./app/assets/jacket.jpg")}
		// 	/>
		// </View>

		// <WelcomeScreen />

		<ListingDetailsScreen />
	);
}

const styles = StyleSheet.create({});
