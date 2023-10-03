import { StyleSheet,View,Text, SafeAreaView, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Category from '../components/category';

const HomeScreen = () =>{
    const categories = [
    {
        id:"9",
        title: "Mathematics",
        image: require('../assets/maths.jpg'),
    },
    {
        id:"10",
        title: "Sports",
        image: require('../assets/Sports.jpg'),
    },
    {
        id:"11",
        title: "Technology",
        image: require('../assets/tech.jpg'),
    },
    {
        id:"12",
        title: "Politics",
        image: require('../assets/Politics.jpg'),
    },
    {
        id:"13",
        title: "Music",
        image: require('../assets/music.png'),
    },
    {
        id:"14",
        title: "Geography",
        image: require('../assets/geography.jpg'),
    },
    {
        id:"15",
        title: "Science",
        image: require('../assets/science.png'),
    }
]
    return(
        <SafeAreaView>
            
            <FlatList
             data={categories}
             renderItem={({item})=><Category image={item.image} title={item.title} id={item.id}/>}
             keyExtractor={(item)=>item.id}
            //  showsVerticalScrollIndicator={false}
            />
            
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({

})
