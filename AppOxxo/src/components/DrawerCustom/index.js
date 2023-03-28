import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const DrawerCustom = (props) => {
    return (
        <View>
            <DrawerContentScrollView {...props} >
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    );
}

export default DrawerCustom;
