import {View, Text, StatusBar, StyleSheet, Dimensions, Button} from "react-native";

const screenWidth = Dimensions.get('window').width;

export default function Day1() {
    return(
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={'#000'}/>
            <Text style={styles.text}>Basics of React Expo 💕</Text>
            <Text style={styles.subtext}>Covers all topics of View, Text, StatusBar, StyleSheet, Dimensions, Button</Text>
            <Button title="complete" onPress={() => alert("Day1 Completed")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000',
    },
    text:{
        fontSize:27,
        fontWeight:'bold',
        color:'#ffffff',
    },
    subtext:{
        fontSize:17,
        color:'#00ff21',
        textAlign:'center',
        paddingTop:10,
        marginBottom:20,
        lineHeight:25,
        width:screenWidth,
    },
})