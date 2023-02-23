import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let dialogs = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Коля" },
  { id: 4, name: "Рашид" },
  { id: 5, name: "Аюуюакр" },
  { id: 6, name: "Евгений" },
];
let messages = [
  { id: 1, message: "Ты кто такой" },
  { id: 2, message: "Не хочешь заработать?" },
  { id: 3, message: "Заработок на р2р" },
];
let posts = [
  { id: 1, message: "Hey you, yes you! Fuck off!", likesCount: 2 },
  { id: 1, message: "and you fuck off too", likesCount: 3 },
  { id: 1, message: "and you", likesCount: 0 },
];
root.render(

  <React.StrictMode>
    <App dialogs = {dialogs} messages = {messages} posts = {posts}  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
