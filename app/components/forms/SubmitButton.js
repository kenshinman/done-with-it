import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

const SubmitButton = ({ title }) => {
	const { handleSubmit } = useFormikContext();
	return <AppButton text={title} onPress={handleSubmit} color="primary" />;
};

export default SubmitButton;
