import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
	{
		id: 1,
		title: "T1",
		description: "D1",
		image: require("../assets/mosh.jpg"),
	},
	{
		id: 2,
		title: "T2",
		description: "D2",
		image: require("../assets/mosh.jpg"),
	},
	{
		id: 3,
		title: "T3",
		description: "D3",
		image: require("../assets/mosh.jpg"),
	},
];
const MessagesScreen = () => {
	const [messages, setMessages] = useState(initialMessages);

	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = (msg) => {
		setMessages(messages.filter((message) => message.id !== msg.id));
	};

	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(message) => `${message.id}`}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.description}
						image={item.image}
						onPress={() => console.log("Pressed", item.id)}
						renderRightActions={() => (
							<ListItemDeleteAction onPress={() => handleDelete(item)} />
						)}
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
				refreshing={refreshing}
				onRefresh={() => setMessages(initialMessages)}
			/>
		</Screen>
	);
};

const styles = StyleSheet.create({});

export default MessagesScreen;
