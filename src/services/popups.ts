import React from "react";
import { Alert, AlertButton } from "react-native";

const warning = (title: string, message: string) => {
	return Alert.alert(title, message)
}

const messageOptions = (title: string, message: string, btns: AlertButton[]) => {
	return Alert.alert(title, message, btns)
}

export const usePopup = { warning, messageOptions };
