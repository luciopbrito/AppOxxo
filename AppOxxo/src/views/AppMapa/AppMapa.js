import React from "react";
import { Image, StyleSheet, View } from "react-native";
import MapView from 'react-native-maps';

export default function AppMapa() {

    return (

        <View style={Styles.container}>
            <View style={Styles.boxLogo}>
                <Image style={Styles.image_logo} source={require('../../../assets/logo.png')} />
            </View>

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
        </View>

    )
}


//===== CSS =======///



const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f00",
        justifyContent: 'center',
        paddingHorizontal: 2,
    },
    map: {
        height: "90%",


    },
    boxLogo: {
        height: "15%",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,


    },
    image_logo: {
        borderRadius: 5,
        height: '45%',
        width: '20%'


    },



})