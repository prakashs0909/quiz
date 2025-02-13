import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QuizProvider } from "./context/QuizContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QuizProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QuizProvider>
);

reportWebVitals();
