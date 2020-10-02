import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import Swipable from "react-native-gesture-handler/Swipeable";
import colors from "../config/colors";
import AppText from "./AppText";

const ListItem = ({
	title,
	subTitle,
	image,
	onPress,
	renderRightActions,
	IconComponent,
}) => {
	return (
		<Swipable renderRightActions={renderRightActions}>
			<TouchableHighlight
				underlayColor={colors.lignt}
				onPress={onPress}
				style={styles.container}>
				<>
					{image && <Image style={styles.image} source={image} />}
					{IconComponent}
					<View style={styles.detailsContainer}>
						<AppText style={styles.title}>{title}</AppText>
						{subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
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
		backgroundColor: colors.white,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},
	title: {
		fontWeight: "500",
		fontSize: 18,
	},
	subTitle: {
		color: colors.medium,
	},
	detailsContainer: {
		marginLeft: 10,
		justifyContent: "center",
	},
});

export default ListItem;
