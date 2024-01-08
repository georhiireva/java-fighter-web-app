import React, {useEffect, useState} from 'react';
import './App.css'; // Файл со стилями
import WebApp from '@twa-dev/sdk'


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

    const [topics, setTopics] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [topicQuestions, setTopicQuestions] = useState([]);
    const handleTopicClick = (topic) => {
        setSelectedTopic(topic);

        fetch(`http://localhost:88/api/items/${topic.id}/articles`, {
            method: 'GET'
        }).then(response => response.json())
            .then(data => {
                setTopicQuestions(data)
            })
    }

    const handleQuestionClick = (question) => {
        setSelectedQuestion(question);
    };

    const handleBackClick = () => {
        setSelectedTopic(null);
    };

    useEffect(() => {
        // Запрос данных с сервера
        fetch('http://localhost:88/api/items', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                setTopics(data);
            })
            .catch(error => console.error('Ошибка при получении данных:', error));
    }, []);

    return (
        <div>
            <div className="container">
                {selectedQuestion ? (
                    // Если выбран вопрос, отобразить статью
                    <div className="article">
                        <button className="back-button" onClick={() => setSelectedQuestion(null)}>Назад</button>
                        <h2>{selectedQuestion.name}</h2>
                        <p>{selectedQuestion.body}</p>
                    </div>
                ) : selectedTopic ? (
                    // Если выбрана тема, отобразить список вопросов
                    <div className="question-list">
                        <button className="back-button" onClick={() => setSelectedTopic(null)}>Назад к списку тем</button>
                        <h2>{selectedTopic.name}</h2>
                        <ul>
                            {topicQuestions.map((question, index) => (
                                <li key={index} onClick={() => handleQuestionClick(question)}>
                                    {question.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    // В противном случае, отобразить карточки с темами
                    topics.map((topic, index) => (
                        <div key={index} className="card" onClick={() => handleTopicClick(topic)}>
                            <div className="card-content">
                                <h3>{topic.name}</h3>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="card">
                <button onClick={() => WebApp.showAlert(`Hello World! Current count`)}>
                    Show Alert
                </button>
            </div>
        </div>
    );
};

export default App;
