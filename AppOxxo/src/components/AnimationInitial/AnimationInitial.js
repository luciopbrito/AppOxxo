import React, { useEffect, useLayoutEffect, useState } from "react";
import { Animated, View, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native'
import icon from '../../../assets/logo.png'
import { Box, NativeBaseProvider } from "native-base";

const AnimationInitial = () => {
  const [animate, setAnimate] = useState(new Animated.Value(0))
  const [showAnimation, setShowAnimation] = useState(true)
  const navigation = useNavigation();

  // remove title of view/component
  useLayoutEffect(() => {
    navigation.setOptions({ title: '' })
  }, [navigation]);

  useEffect(() => {
    Animation();
  }, []);

  const Animation = () => {
    Animated.timing(animate, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => setShowAnimation(false));
  }

  return (
    <NativeBaseProvider>
      <Box style={styles.container}>
        {showAnimation ? (
          <Animated.View style={{ opacity: animate }}>
            <Image source={icon} />
          </Animated.View>
        ) : navigation.navigate('Login', { type: 'cliente' })}
      </Box>
    </NativeBaseProvider>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
});

export default AnimationInitial;
