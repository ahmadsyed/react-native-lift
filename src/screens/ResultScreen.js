import * as React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    TouchableOpacity
  } from 'react-native';
  import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';
const ResultScreen = ({ route, navigation }) => {
    const {result}=route.params;
    return (
        <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
            <View style={styles.result}>
                <Text>{"Lift stop Order->"} </Text>
                <Text>{JSON.stringify(result)}</Text>
            </View>
        </SafeAreaView>
        </>
    )
  };
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        backgroundColor:Colors.lighter
      },
      result:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'center',
        textAlign: "center",
        backgroundColor:'orange',
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
      }
})
export default ResultScreen;