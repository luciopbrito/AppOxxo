// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { Alert, type AlertButton } from 'react-native';

const warning = (title: string, message: string): void => {
	Alert.alert(title, message);
};

const messageOptions = (
	title: string,
	message: string,
	btns: AlertButton[]
): void => {
	Alert.alert(title, message, btns);
};

export const usePopup = { warning, messageOptions };
