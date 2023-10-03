import React from 'react';
import { SafeAreaView, StyleSheet, Button, Text} from 'react-native';
import Question from '../components/question';
import Answer from '../components/answer';
import { useEffect, useState } from 'react';
// import HTML from 'react-native-render-html';
import he from 'he';
import { useNavigation, useRoute} from '@react-navigation/native';
interface QuestionData {
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }
const QuizScreen=()=>{
  const[questions,setQuestions] = useState<QuestionData[]>([]);
  const[currQuestion, setCurrentQuestion] = useState(0);
  const[score,setScore] = useState(0);
  const navigation = useNavigation();
  const route = useRoute();
  // let allOptions: string[]=[];
  // const windowDimensions = useWindowDimensions(); 
  // const questionWidth = windowDimensions.width * 0.9;
  useEffect(()=>{
    fetch(`https://opentdb.com/api.php?amount=10&category=${route.params?.categoryId}&difficulty=easy&type=multiple`,{
      method: 'GET'
    })
    .then((response) =>
       response.json())
    .then(response=>{
      console.log(response.results)
      setQuestions(response.results)})
    .catch((error)=>
      console.error("Error",error)
    );
  },[]);
  // const renderHTMLStyles = {
  //   p: {
  //     fontSize: 18,
  //     marginBottom: 20,
  //   },
  // };
  const nextQuestion = ()=>{
    if(currQuestion < 9){
      setCurrentQuestion(currQuestion+1);
    }
    else{
      navigation.navigate("End",{
        score: score
      });
    }
  }
  // if(questions){
  //   allOptions=[...questions[currQuestion]?.incorrect_answers, questions[currQuestion]?.correct_answer];
  //   allOptions=allOptions.sort();
  //   console.log(allOptions);
  // }
  return(
    <SafeAreaView>
      <Text style={styles.scores}>Score : {score}</Text>
      {questions && 
      <Question question={he.decode(questions[currQuestion]?.question)}/>}
       {/* <HTML
              source={{ html: he.decode(questions[currQuestion]?.question) }}
              tagsStyles={renderHTMLStyles}
              contentWidth={questionWidth}
            /> */}
      {/* {<Answer answer={questions[currQuestion]?.correct_answer} 
      correct_answer={questions[currQuestion]?.correct_answer}
      setScore={setScore}
      />} */}
      {/* Made changes here */}
      {questions && questions.length > 0 &&
        shuffleArray([...questions[currQuestion]?.incorrect_answers, questions[currQuestion]?.correct_answer]).map(
          (item: any, index: any) => (
            <Answer
              answer={item}
              key={index}
              correct_answer={questions[currQuestion]?.correct_answer}
              setScore={setScore}
              nextQuestion={nextQuestion}
            />
          )
        )}
      {/* {questions && questions[currQuestion]?.incorrect_answers.map((item: any, index: any) =>
      (<Answer answer={item}
         key={index} 
      correct_answer={questions[currQuestion]?.correct_answer}
      setScore={setScore}
      nextQuestion={nextQuestion}
      />)
  )} */}
      {/* <Answer/>
      <Answer/>
      <Answer/> */}
      <Button title="Next" onPress={nextQuestion}/>
    </SafeAreaView>
  );
}
const shuffleArray = (array: string[]) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};
// function shuffleArray(array: string[]) {
//   const shuffledArray = [...array];
//   for (let i = shuffledArray.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
//   }
//   return shuffledArray;
// }
const styles = StyleSheet.create({
    scores:{
      fontSize: 30,
      color: 'green',
      fontWeight: 'bold'
    }
});


export default QuizScreen;