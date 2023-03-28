import { Feather } from "@expo/vector-icons";
import { Box, Icon } from "native-base";
import { StyleSheet } from "react-native";

const Tabs = ({ navigation }) => {
    return (
        <Box style={styles.container}>
            <Box Box style={styles.buttonTab} >
                <Icon
                    as={Feather}
                    name="shopping-cart"
                    size={10}
                    color="#fff"
                    onPress={() => { navigation.navigate("ProdutosScreen") }}
                />
            </Box>
            <Box style={styles.buttonTab}>
                <Icon
                    as={Feather}
                    name="map"
                    size={10}
                    color="#fff"
                    onPress={() => { navigation.navigate("HomeScreen") }}
                >
                </Icon>
            </Box>
        </Box >
    )
}

export default Tabs;

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: "#f00",
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2
        }
    },
    buttonTab: {
        padding: 10,
        display: 'flex',
        justifyContent: 'center'
    },
})
