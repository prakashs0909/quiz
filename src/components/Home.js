import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold">Welcome to the Quiz!</h1>
      <h3 className="text-1xl"> 1 Question contain 4 marks and No negative marking.</h3>
      <Link to="/quiz">
        <button className="mt-5 px-6 py-2 bg-blue-500 text-white rounded">Start Quiz</button>
      </Link>
    </div>
  );
};

export default Home;
