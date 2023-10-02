import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Question=( props:any )=>{
  return(
    <View style = {styles.container}>
        <Text style = {styles.question}>{props.question}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
   backgroundColor: 'pink',
   height: 250,
   padding: 10,
   alignItems: 'center',
   justifyContent: 'center',
  },
  question:{
   fontSize: 28,
   fontWeight:"500"
  }
});
export default Question;