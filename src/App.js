import React, {useEffect, useState} from 'react';
import './App.css'; // Файл со стилями

const topics = [
    'Основы Java и не только',
    'Коллекции',
    'Потоки и параллелизм',
    'Объектно-ориентированное программирование',
    'Исключения и обработка ошибок',
    'JVM и Garbage Collection',
    'Паттерны проектирования',
    'Работа с файлами в Java',
    'Работа с файлами в Java',
    'Работа с файлами в Java',
    'Работа с файлами в Java',
    'Работа с файлами в Java',
    'Работа с файлами в Java',
    'Работа с файлами в Java',
    'Работа с файлами в Java',
    'Работа с файлами в Java',
    'Работа с файлами в Java',
    'Работа с файлами в Java',
    'Работа с файлами в Java',
    'Работа с файлами в Java',
    'Работа с файлами в Java',
    'Работа с файлами в Java',
    'Работа с файлами в Java',
    'Работа с файлами в Java',
    'Работа с файлами в Java',
];

const questions = {
    'Основы Java и не только': ['Вопрос 1', 'Вопрос 2', 'Вопрос 3'],
    'Коллекции': ['Вопрос 4', 'Вопрос 5', 'Вопрос 6'],
    'Потоки и параллелизм': ['Вопрос 7', 'Вопрос 8', 'Вопрос 9'],
    'Объектно-ориентированное программирование': ['Вопрос 10', 'Вопрос 11', 'Вопрос 12'],
    // ... вопросы для других тем
};

const articles = {
    'Вопрос 1': 'Это пример текста статьи по первому вопросу.',
    'Вопрос 2': 'Это пример текста статьи по второму вопросу.',
    'Вопрос 3': 'Это пример текста статьи по третьему вопросу.',
    // ... тексты статей для других вопросов
};

const App = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const updateWindowSize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', updateWindowSize);
        return () => {
            window.removeEventListener('resize', updateWindowSize);
        };
    }, []);

    const [selectedTopic, setSelectedTopic] = useState(null);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const handleTopicClick = (topic) => {
        setSelectedTopic(topic);
    }

    const handleQuestionClick = (question) => {
        setSelectedQuestion(question);
    };

    const handleBackClick = () => {
        setSelectedTopic(null);
    };

    return (
        <div>
            <div className="container">
                {selectedQuestion ? (
                    // Если выбран вопрос, отобразить статью
                    <div className="article">
                        <button className="back-button" onClick={() => setSelectedQuestion(null)}>Назад</button>
                        <h2>{selectedQuestion}</h2>
                        <p>{articles[selectedQuestion]}</p>
                    </div>
                ) : selectedTopic ? (
                    // Если выбрана тема, отобразить список вопросов
                    <div className="question-list">
                        <button className="back-button" onClick={() => setSelectedTopic(null)}>Назад к списку тем</button>
                        <h2>{selectedTopic}</h2>
                        <ul>
                            {questions[selectedTopic].map((question, index) => (
                                <li key={index} onClick={() => handleQuestionClick(question)}>
                                    {question}
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    // В противном случае, отобразить карточки с темами
                    topics.map((topic, index) => (
                        <div key={index} className="card" onClick={() => handleTopicClick(topic)}>
                            <div className="card-content">
                                <h3>{topic}</h3>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default App;
