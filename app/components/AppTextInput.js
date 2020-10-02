import React from "react";
import { TextInput, View, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

const AppTextInput = ({ icon, keyboardType, ...rest }) => {
	return (
		<View style={styles.container}>
			{icon && (
				<MaterialCommunityIcons
					style={styles.icon}
					name={icon}
					size={20}
					color={colors.medium}
				/>
			)}
			<TextInput
				keyboardType={keyboardType}
				style={defaultStyles.text}
				{...rest}
			/>
		</View>
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
});

export default AppTextInput;
