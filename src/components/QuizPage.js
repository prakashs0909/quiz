import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
  const { questions, loading, score, setScore, currentQuestion, setCurrentQuestion } = useContext(QuizContext);
  const navigate = useNavigate();

  if (loading) return <h2>Loading quiz data...</h2>;
  if (!questions || questions.length === 0) return <h2>No questions available.</h2>;

  const currentQ = questions[currentQuestion];

  // console.log("Current Question:", currentQ); 

  const options = currentQ?.options || currentQ?.choices || [];

  const handleAnswer = (selectedOption) => {
    const isCorrect = selectedOption.is_correct; 
    console.log("User selected:", selectedOption.description, "isCorrect:", isCorrect);

    if (isCorrect) {
      setScore((prevScore) => prevScore + 4);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/result");
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-xl font-bold">{currentQ?.description || "Question not available"}</h2>
      
      <div className="mt-5">
        {options.length > 0 ? (
          options.map((option, index) => (
            <button 
              key={index} 
              onClick={() => handleAnswer(option)} 
              className="block mt-2 px-4 py-2 bg-gray-300 hover:bg-gray-500 rounded"
            >
              {option.description || "No option text"}
            </button>
          ))
        ) : (
          <p>No options available</p>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
