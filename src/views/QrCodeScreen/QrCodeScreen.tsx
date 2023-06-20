import { type RouteProp } from '@react-navigation/native';
import { NativeBaseProvider, VStack, Text } from 'native-base';
import React from 'react';
import { View } from 'react-native';
// import { RNCamera } from 'react-native-camera';
// import QRCodeScanner from 'react-native-qrcode-scanner';
import { type RoutesFlowCheckoutList } from '../../routes/routes.flow-checkout';
// import qrcode from "../../assets/qrCode.png";

// import { Container } from './styles';

// eslint-disable-next-line
type QrCodeScreenRouteProp = RouteProp<
	RoutesFlowCheckoutList,
	'CreditCardScreen'
>;

// eslint-disable-next-line
export interface QrCodeScreenParams {}

const QrCodeScreen: React.FC<QrCodeScreenParams> = () => {
	return (
		<View />
		// <QRCodeScanner
		// 	onRead={() => {}}
		// 	flashMode={RNCamera.Constants.FlashMode.off}
		// />
	);
};

export default QrCodeScreen;
