import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Answer=(props:any)=>{
  return(
    <View style = {styles.container}>
      <Text style={styles.answer}>{props.answer}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: 'yellow',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  },
  answer:{
    fontSize: 20,
    fontWeight: "400"
  }
});
export default Answer;