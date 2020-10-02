import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Icon from "../components/Icon";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";

const menuItems = [
	{
		title: "My Listings",
		icon: {
			name: "format-list-bulleted",
			backgroundColor: colors.primary,
		},
	},
	{
		title: "My Messages",
		icon: {
			name: "email",
			backgroundColor: colors.secondary,
		},
	},
];

const AccountScreen = () => {
	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title="Kehinde Orilogbon"
					subTitle="programmer@kenshin.com"
					image={require("../assets/mosh.jpg")}
				/>
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					ItemSeparatorComponent={ListItemSeparator}
					keyExtractor={(menuItem) => menuItem.title}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							IconComponent={
								<Icon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
						/>
					)}
				/>
			</View>
			<ListItem
				title="Log Out"
				IconComponent={<Icon name="logout" backgroundColor={colors.yellow} />}
			/>
		</Screen>
	);
};

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
	},
});

export default AccountScreen;
