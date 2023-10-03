import React from 'react';
import { StyleSheet, Text, View, Alert,Pressable } from 'react-native';

const Answer=(props:any)=>{
    const isTrue =()=>{
        if(props.answer==props.correct_answer){
            // Alert.alert("Right");
            props.setScore((prev: number) => prev+1);
        }
        else{
            // Alert.alert("Wrong");
        }
        // props.nextQuestion();
    }
  return(
    <Pressable style = {styles.container} onPress={isTrue}>
      <Text style={styles.answer}>{props.answer}</Text>
    </Pressable>
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