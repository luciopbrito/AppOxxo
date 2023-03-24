import React, { useEffect, useLayoutEffect, useState } from "react";
import { Animated, View, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native'
import icon from '../../../assets/oxxo_logo.png'
import { Text } from "react-native";

const AnimationInitial = ({ navigation }) => {
    const [animate, setAnimate] = useState(new Animated.Value(0))
    const [showAnimation, setShowAnimation] = useState(true)
    const optionsNavigation = useNavigation();

    // remove title of view/component
    useLayoutEffect(() => {
        optionsNavigation.setOptions({title: ''})
    }, [optionsNavigation]);


    useEffect(() => {
        Animation()
    },[]);


    const Animation = () => {
        Animated.timing(animate, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
        }).start(() => {
           setShowAnimation(false)
        });
    }
    
    if (showAnimation) {
        return (
            <View style={styles.container}>
                <Animated.View style={{ opacity: animate }}>
                    <Image source={icon} />
                </Animated.View>
            </View>
        );
    }
    else {
        return (
            <View>
                <Text>Login</Text>
            </View>
        )   
    }

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
});

export default AnimationInitial;