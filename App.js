// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

//my components
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";

const items = [
	{ label: "Furniture", value: 1 },
	{ label: "Clothing", value: 2 },
	{ label: "Food", value: 3 },
];

export default function App() {
	const [category, setCategory] = useState(null);

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
		// <MessagesScreen />
		// <Screen>
		// 	<ListItem
		// 		title="The Title"
		// 		subTitle="The subtitle"
		// 		IconComponent={
		// 			<Icon
		// 				name="email"
		// 				backgroundColor="red"
		// 				iconColor="white"
		// 				size={50}
		// 			/>
		// 		}
		// 	/>
		// </Screen>

		// <AccountScreen />
		// <ListingsScreen />
		// <Screen>
		// 	<AppPicker
		// 		selectedItem={category}
		// 		onSelectItem={(item) => setCategory(item)}
		// 		items={items}
		// 		icon="apps"
		// 		placeholder="Select category"
		// 	/>
		// 	<AppTextInput
		// 		keyboardType="email-address"
		// 		icon="email"
		// 		placeholder="Email"
		// 	/>
		// </Screen>
		<LoginScreen />
	);
}

const styles = StyleSheet.create({});
