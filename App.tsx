/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import { StyleSheet, Text, View } from 'react-native';
// import HomeScreen from './screens/HomeScreen';
import QuizScreen from './screens/QuizScreen';
import Answer from './components/answer';

const App=()=>{
  
  return(
    <View style = {styles.container}>
      {/* <Text>Hello World</Text> */}
      {/* <HomeScreen/> */}
      <QuizScreen/>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
  }
});
export default App;