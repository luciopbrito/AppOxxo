import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Box, HStack, Icon, NativeBaseProvider } from "native-base";
import React from "react";
import { Pressable } from "react-native";
import { Image, StyleSheet, View } from "react-native";
import MapView from 'react-native-maps';
import Logo from '../../../assets/logo.png'

export default function AppMapaScreen({ navigation }) {
    return (
        <NativeBaseProvider>
            <HStack background={'#f00'} marginTop='10' paddingTop={5} width="100%" h='auto' display={'flex'} alignItems="center" justifyContent="space-between">
                <Box>
                    <Pressable>
                        <Icon
                            as={Feather}
                            name="menu"
                            size={10}
                            color="#fff"
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
            <Tabs navigation={navigation}></Tabs>
        </NativeBaseProvider >
    )
}

const Tabs = ({ navigation }) => {

    return (
        <Box paddingTop='5' paddingBottom='5' height='10%' width='100%' display='flex' justifyContent='space-around' flexDirection='row' backgroundColor="#808080">
            <Box Box style={Styles.buttonScreen} >
                <Icon
                    as={Feather}
                    name="shopping-cart"
                    size={10}
                    color="#fff"
                    onPress={() => { navigation.navigate("ProdutosScreen") }}
                />
            </Box>
            <Box style={Styles.buttonScreen}>
                <Icon
                    as={Feather}
                    name="map"
                    size={10}
                    color="#fff"
                    onPress={() => { navigation.navigate("AppMapaScreen") }}
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
        height: "100%",
    },
    buttonScreen: {

    }
})
