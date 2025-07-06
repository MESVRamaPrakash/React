import {View, Text, StatusBar, StyleSheet} from "react-native";

export default function Day1() {
    return(
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={'#000'}/>
            <Text style={styles.text}>Basics of React Expo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
    },
    text:{
        fontSize:27,
        fontWeight:'bold',
    },
})