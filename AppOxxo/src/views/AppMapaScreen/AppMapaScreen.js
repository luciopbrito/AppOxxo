import React, { useState } from "react";
import { Box, NativeBaseProvider, Text, ScrotexllView, Image } from "native-base";
import { StyleSheet } from "react-native";
import image_logo from "../../../assets/logo.png";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject } from "expo-location";

export default function AppMapaScreen() {

    return (
        <NativeBaseProvider>
            <Box style={Styles.box_background}>
                <Box style={[Styles.image_logo]}>
                    <Image borderRadius={5} source={image_logo} alt="logo_da_oxxo" />
                </Box>
                <Box>
                    <Text fontSize={50}>Deu bom</Text>
                </Box>
            </Box>
        </NativeBaseProvider >

    )


}






//======Styles=======//

const Styles = StyleSheet.create({
    box_background: {
        backgroundColor: "#f00",
        width: "100%"


    },
    image_logo: {
        margin: 20,
        alignItems: 'center',




    },

})
