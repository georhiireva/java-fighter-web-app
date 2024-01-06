import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Файл со стилями

const questions = [
    'Вопрос 1',
    'Вопрос 2',
    'Вопрос 3',
    // Добавьте любые другие вопросы, которые хотите отобразить
];

const ArticlePage = ({ match }) => {
    const articleTitle = match.params.title; // Получаем название статьи из URL
    const handleButtonClick = (topic) => {
        // Действия при нажатии на кнопку
        alert(`Выбрана тема: ${topic}`);
    };
    return (
        <div className="container">
            <div className="container">
                <h1>{articleTitle}</h1>
            </div>
            <div className="container">
                {questions.map((question, index) => (
                    <button
                        key={index}
                        className="button"
                        onClick={() => handleButtonClick(question)}
                    >{question}</button>
            ))}
        </div>
        </div>
    );
};

export default ArticlePage;