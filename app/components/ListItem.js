import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import Swipable from "react-native-gesture-handler/Swipeable";
import colors from "../config/colors";
import AppText from "./AppText";

const ListItem = ({ title, subTitle, image, onPress, renderRightActions }) => {
	return (
		<Swipable renderRightActions={renderRightActions}>
			<TouchableHighlight
				underlayColor={colors.lignt}
				onPress={onPress}
				style={styles.container}>
				<>
					<Image style={styles.image} source={image} />
					<View>
						<AppText style={styles.title}>{title}</AppText>
						<AppText style={styles.subTitle}>{subTitle}</AppText>
					</View>
				</>
			</TouchableHighlight>
		</Swipable>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 20,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
		marginRight: 10,
	},
	title: {
		fontWeight: "500",
		fontSize: 18,
	},
	subTitle: {
		color: colors.medium,
	},
});

export default ListItem;
