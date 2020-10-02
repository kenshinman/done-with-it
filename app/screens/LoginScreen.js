import React from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "../components/Screen";
import * as yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = yup.object().shape({
	email: yup.string().required().email().label("Email"),
	password: yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require("../assets/logo-red.png")} />
			<AppForm
				initialValues={{ email: "", password: "" }}
				validationSchema={validationSchema}
				onSubmit={(data) => {
					console.log(data);
				}}>
				<AppFormField
					placeholder="Email"
					icon="email"
					autoCapitalize="none"
					keyboardType="email-address"
					textContentType="emailAddress"
					autoCorrect={false}
					name="email"
				/>
				<AppFormField
					autoCapitalize="none"
					autoCorrect={false}
					icon="lock"
					placeholder="Password"
					secureTextEntry
					textContentType="password"
					name="password"
				/>
				<SubmitButton title="login" />
			</AppForm>
		</Screen>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: "center",
		marginTop: 50,
		marginBottom: 20,
	},
});

export default LoginScreen;
