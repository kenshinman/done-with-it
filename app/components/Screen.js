import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Contants from "expo-constants";

const Screen = ({ children }) => {
	return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
	screen: {
		paddingTop: Contants.statusBarHeight,
		flex: 1,
	},
});

export default Screen;
