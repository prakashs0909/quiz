import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);  
  const [loading, setLoading] = useState(true);    
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    axios.get("https://api.allorigins.win/get?url=" + encodeURIComponent("https://api.jsonserve.com/Uw5CrX"))
      .then((response) => {
        // console.log(JSON.parse(response.data.contents)); 
  
        const parsedData = JSON.parse(response.data.contents);
  
        if (Array.isArray(parsedData.questions) && parsedData.questions.length > 0) {
          setQuestions(parsedData.questions); 
          setLoading(false);
        } else {
          console.error("No questions found in API response OR questions is not an array");
          setQuestions([]); 
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(" Error fetching quiz data:", error);
        setLoading(false);
      });
  }, []);
  

  return (
    <QuizContext.Provider value={{ questions, loading, score, setScore, currentQuestion, setCurrentQuestion }}>
      {children}
    </QuizContext.Provider>
  );
};
