import React, { PropsWithChildren, PropsWithRef } from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View } from 'native-base';

interface Props {
	props: any;
}

const DrawerCustom: React.FC<Props> = ({ props }) => {
	return (
		<View>
			<DrawerContentScrollView {...props} >
				<DrawerItemList {...props} />
			</DrawerContentScrollView>
		</View>
	);
}

export default DrawerCustom;
