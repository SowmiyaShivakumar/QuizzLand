import React from 'react';
import {StyleSheet, Text, SafeAreaView,Button, Pressable} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
const FinishScreen =()=>{
    const nav = useNavigation();
    const route = useRoute();
    const goHomePage = ()=>{
        nav.reset({
            index: 0,
            routes: [{ name: "Home"}],
        });
    };
    const mark = route.params?.score;
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.scores}>Your SCORE is {mark}/10</Text>
            
            <Pressable onPress={goHomePage} style={styles.finish_btn}><Text>Finish</Text></Pressable>
        </SafeAreaView> 
    )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    scores:{
        fontSize: 30,
        fontWeight: "500"
    },
    finish_btn:{
        color: 'white',
        backgroundColor: 'green'
    }
});

export default FinishScreen;