/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import { StyleSheet} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import QuizScreen from './screens/QuizScreen';
import FinishScreen from './screens/EndScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { ScreenStack } from 'react-native-screens';
const Stack = createNativeStackNavigator();
const App=()=>{
  
  return(
    // <View style = {styles.container}>
    //   {/* <Text>Hello World</Text> */}
    //   {/* <HomeScreen/> */}
    //   {/* <QuizScreen/> */}
    //   <FinishScreen/>
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Playground" component={QuizScreen} />
          <Stack.Screen name="End" component={FinishScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
  }
});
export default App;