import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import Question from '../components/question';
import Answer from '../components/answer';
import { useEffect, useState } from 'react';
interface QuestionData {
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }
const QuizScreen=()=>{
  const[questions,setQuestions] = useState<QuestionData[]>([]);
  const[currQuestion, setCurrentQuestion] = useState(0);
  
  useEffect(()=>{
    fetch('https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple',{
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

  return(
    <SafeAreaView>
      {questions.length > 0 && 
      <Question question={questions[0].question}/>}
      {<Answer answer={questions[0].correct_answer}/>}
      {questions[0].incorrect_answers.map((item: any, index: any) =>
      (<Answer answer={item} key={index} />)
  )}
      <Answer/>
      <Answer/>
      <Answer/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    
});
export default QuizScreen;