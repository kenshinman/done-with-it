// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

//my components
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

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

		// <ListingDetailsScreen />
		// <ViewImageScreen />
		<MessagesScreen />
	);
}

const styles = StyleSheet.create({});
