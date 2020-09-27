/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState } from 'react';
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

const HomeScreen = ({ navigation }) => {
    //Record series in state
    const [currentFloor,SetCurrentFloor] = useState(0);
    var events = [];

    //floors in building
    const floors = [6,5,4,3,2,1,0];
    
    //record up direction press
    const handelUpPress  = (box)  =>{
        events.push(box);
    }

    //record down direction press
    const handelDownPress  = (box)  =>{
        events.push(-Math.abs(box));
    }

    //run the lift
    const startRun = () => {
        //sort all  event
        let sorted = events.sort(function(a,b){return a-b});
        var positiveVal = sorted.filter((val)=>{ return val>=0;});
        var negativeVal = sorted.filter((val)=>{ return val<0;});

        //create final run series
        var finalArr = positiveVal.concat(negativeVal);

        //move lift to next  floor at every 2 sec
        var i = 0;
        var interval = setInterval(function(){
            SetCurrentFloor(Math.abs(finalArr[i]));
            console.log(finalArr[i])
            i++;
            if(i === finalArr.length){
            //reset everything
            clearInterval(interval);
            setTimeout(function(){
                events=[];
            SetCurrentFloor(0);
                navigation.navigate('Result', { result: finalArr }) //wait for last floor
            },2000)
            } 
        }, 2000);
    }

    //render floors component
    const renderSectonBoxes = 
        floors.map(box  => {
        return (
        <View style={currentFloor==box ? styles.current:styles.sectionBoxes}>
            <Text>{box}</Text>
        </View>
        )
    });

    //render button component
    const renderButtonBoxes = 
    floors.map((box,index)  => {
      return (
        <View style={{flexDirection:'row'}}>
          {index >  0 && (
            <TouchableOpacity style={styles.buttonBoxes} onPress={() => handelUpPress(box)} >
              <Text>{"\u2191"}</Text>
              <Text>{'Lift Floor '+ (box==0?'Ground':box)}</Text>
            </TouchableOpacity>
          )}
          {index < (floors.length)-1  && (
          <TouchableOpacity style={styles.buttonBoxes} onPress={() => handelDownPress(box)}>
              <Text>{"\u2193"}</Text>
              <Text>{'Lift Floor '+ (box==0?'Ground':box)}</Text>
          </TouchableOpacity>
          )}
        </View>
      )
    })

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.leftSections}>
          {renderSectonBoxes}
        </View>
        <View style={styles.rightSection}>
          {renderButtonBoxes}
          <TouchableOpacity onPress={startRun}>
            <Text style={styles.run}>Start Run</Text></TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    backgroundColor:Colors.lighter
  },
  leftSections:{
    flex:1,
    justifyContent: 'space-between',
  },
  rightSection:{
    flex:3,
    justifyContent: 'space-around',
  },
  sectionBoxes:{
    padding:38,
    backgroundColor:'gray',
    borderColor: "#20232a",
    borderRadius: 6,
  },
  buttonBoxes:{
    flex:1,
    padding:38,
    backgroundColor:'yellow',
    borderWidth: 2,
    borderColor: "#20232a",
    borderRadius: 6,
  },
  current: {
    padding:40,
    backgroundColor:'green',
    borderWidth: 4,
    borderColor: "orange",
    borderRadius: 6,
  },
  run: {
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
});

export default HomeScreen;
