import { NativeBaseProvider, Image } from "native-base";
import React from "react";
import { View } from "react-native";
import qrcode from "../../assets/qrCode.png";

// import { Container } from './styles';

export type QrCodeScreenParams = {};

const QrCodeScreen: React.FC<QrCodeScreenParams> = () => {
	return (
		<NativeBaseProvider>
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<Image
					source={{
						uri: "",
					}}
				/>
			</View>
		</NativeBaseProvider>
	);
};

export default QrCodeScreen;
