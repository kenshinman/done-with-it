import React, { useState } from "react";
import {
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	Modal,
	Text,
	Button,
	FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

const AppPicker = ({
	icon,
	placeholder,
	items,
	selectedItem,
	onSelectItem,
}) => {
	const [visible, setVisible] = useState(false);

	const selectItem = (item) => {
		setVisible(false);
	};

	return (
		<>
			<TouchableWithoutFeedback onPress={() => setVisible(true)}>
				<View style={styles.container}>
					{icon && (
						<MaterialCommunityIcons
							style={styles.icon}
							name={icon}
							size={20}
							color={colors.medium}
						/>
					)}
					<AppText style={styles.text}>
						{selectedItem ? selectedItem.label : placeholder}
					</AppText>
					<MaterialCommunityIcons
						name="chevron-down"
						size={20}
						color={colors.medium}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={visible} collapsable={true} animationType="slide">
				<Screen>
					<Button title="Close" onPress={() => setVisible(false)} />

					<FlatList
						data={items}
						keyExtractor={(item) => `${item.value}`}
						renderItem={({ item }) => (
							<PickerItem
								label={item.label}
								onPress={() => {
									setVisible(false);
									onSelectItem(item);
								}}
							/>
						)}
					/>
				</Screen>
			</Modal>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		borderRadius: 25,
		flexDirection: "row",
		width: "100%",
		padding: 15,
		marginVertical: 10,
		alignItems: "center",
	},
	icon: {
		marginRight: 10,
	},
	text: {
		flex: 1,
	},
});

export default AppPicker;
