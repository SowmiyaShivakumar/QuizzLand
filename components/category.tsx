import { View,Text,StyleSheet, Image, ImageSourcePropType, SafeAreaView, Pressable  } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
const Category = (props: { image: ImageSourcePropType; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined ; categoryId:string | number}) =>{
    const navigation = useNavigation();
    const gotoQuiz = ()=>{
        navigation.navigate("Playground", {
            categoryId: props.id,
          } );
    };
    return(
        <SafeAreaView style={styles.page}>
        <View style={styles.full}>
        <Pressable style={styles.container} onPress={gotoQuiz}>
           <Image source={props.image}
           style={styles.images}/>
           <Text style={styles.title}>{props.title}</Text>
        
        </Pressable>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page:{
        backgroundColor: 'black',
        opacity: 0.9
    },
    full:{
        marginTop: 19,  
    },
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'grey',
        opacity: 0.8,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 25
    },
    images:{
        height: 70,
        width: 70,
        margin: 10,
        borderRadius: 20
    },
    title:{
        fontSize:25,
        fontWeight: 'bold',
        marginLeft: 15,
    }
})

export default Category;