import { Feather } from "@expo/vector-icons";
import { Avatar, Box, HStack, Icon, NativeBaseProvider, Text } from "native-base";
import React from "react";
import { Pressable } from "react-native";
import { Image, StyleSheet, View } from "react-native";
import MapView from 'react-native-maps';
import Logo from '../../../assets/logo.png'

export default function AppMapaScreen() {

    return (
        <NativeBaseProvider>
            <HStack background={'#f00'} marginTop='10' paddingTop={5} width="100%" h='auto' display={'flex'} alignItems="center" justifyContent="space-between">
                <Box>
                    <Pressable>
                        <Icon
                            as={Feather}
                            name="menu"
                            size={10}
                            color="#000"
                        >
                        </Icon>
                    </Pressable>
                </Box>
                <Box display='flex' alignItems="center">
                    <Image source={Logo} alt='Image Logo Oxxo' />
                </Box>
                <Box>
                    <Avatar source={{ uri: 'https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png' }} />
                </Box>
            </HStack>
            <Box style={Styles.container} safeArea>
                <View>
                    <MapView style={Styles.map}
                        initialRegion={{
                            latitude: -23.464363,
                            longitude: -46.523467,
                            latitudeDelta: 0.00922,
                            longitudeDelta: 0.00421,
                        }}
                    >
                    </MapView>
                </View>
            </Box>
            <Tabs></Tabs>
        </NativeBaseProvider >
    )
}

const Tabs = () => {
    return (
        <Box paddingTop='5' paddingBottom='5' height='10 % ' width='100 % ' display='flex' justifyContent='space-around' flexDirection='row' backgroundColor="#000">
            <Box Box style={Styles.buttonScreen} >
                <Icon
                    as={Feather}
                    name="shopping-cart"
                    size={10}
                    color="#000"
                />
            </Box>
            <Box style={Styles.buttonScreen}>
                <Icon
                    as={Feather}
                    name="map"
                    size={10}
                    color="#000"
                >
                </Icon>
            </Box>
        </Box >
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#f00",
        justifyContent: 'center',
    },
    map: {
        height: "90%",
    },
    buttonScreen: {
        borderWidth: 1,
        borderRadius: 5
    }
})
