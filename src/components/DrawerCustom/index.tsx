import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NativeBaseProvider, View } from 'native-base';

interface Props {
	props: any;
}

const DrawerCustom: React.FC<Props> = ({ props }) => {
	return (
		<NativeBaseProvider>
			<View>
				<DrawerContentScrollView {...props} >
					<DrawerItemList {...props} />
				</DrawerContentScrollView>
			</View>
		</NativeBaseProvider>
	);
}

export default DrawerCustom;
