import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import he from 'he';
import HTML from 'react-native-render-html';

interface QuestionData {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'easy':
      return 'green';
    case 'medium':
      return 'orange';
    case 'tough':
      return 'red';
    default:
      return 'white';
  }
};
const QuizScreen = () => {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [currQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const windowDimensions = useWindowDimensions(); 

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        setQuestions(response.results);
      })
      .catch((error) => console.error('Error', error));
  }, []);

  const handleAnswerSelection = (selectedAnswer: string) => {
    const currentQuestionData = questions[currQuestion];
    if (selectedAnswer === currentQuestionData.correct_answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currQuestion + 1);
  };

  const renderHTMLStyles = {
    p: {
      fontSize: 18,
      marginBottom: 20,
    },
  };
  const questionWidth = windowDimensions.width * 0.9;
  const answerButtonWidth = windowDimensions.width * 0.8; 

  return (
    <SafeAreaView style={styles.container}>
      {currQuestion < questions.length ? (
        <View>
          <Text style={styles.progress}>Question {currQuestion + 1} of {questions.length}</Text>
          <Text style={styles.category}>{questions[currQuestion]?.category}</Text>
          <Text style={{ ...styles.difficulty, color: getDifficultyColor(questions[currQuestion]?.difficulty) }}>
            {questions[currQuestion]?.difficulty} Difficulty
          </Text>
          <View style={styles.questionContainer}>
            <HTML
              source={{ html: he.decode(questions[currQuestion]?.question) }}
              tagsStyles={renderHTMLStyles}
              contentWidth={questionWidth}
            />
          </View>
          <View style={styles.answerContainer}>
            {shuffleArray([...questions[currQuestion]?.incorrect_answers, questions[currQuestion]?.correct_answer]).map(
              (item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleAnswerSelection(item)}
                  style={styles.answerButton}
                >
                  <HTML
                    source={{ html: he.decode(item) }}
                    tagsStyles={renderHTMLStyles}
                    contentWidth={answerButtonWidth}
                  />
                </TouchableOpacity>
              )
            )}
          </View>
        </View>
      ) : (
        <View style={styles.quizCompleted}>
          <Text style={styles.completedText}>Quiz Completed!</Text>
          <Text style={styles.scoreText}>Your Score: {score}/{questions.length}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black', 
  },
  progress: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'red',
  },
  category: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white', 
  },
  difficulty: {
    fontSize: 14,
    marginBottom: 20,
    color: 'red', 
  },
  questionContainer: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: 'red',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.8, 
    shadowRadius: 10,  
    elevation: 10,
  },
  
  answerContainer: {
    alignItems: 'center',
  },
  answerButton: {
    backgroundColor: '#333',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 1,
  },
  quizCompleted: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  completedText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'red',
  },
  scoreText: {
    fontSize: 18,
    color: 'white',
  },
});

function shuffleArray(array: string[]) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default QuizScreen;
