import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
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

const App = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 9;

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const indexOfLastCard = (currentPage + 1) * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = topics.slice(indexOfFirstCard, indexOfLastCard);

    return (
        <div>
            <div className="container">
                {currentCards.map((topic, index) => (
                    <div key={index} className="card">
                        {/* Прямоугольная карточка с названием темы */}
                        <div className="card-content">
                            <h3>{topic}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <ReactPaginate
                previousLabel={'←'}
                nextLabel={'→'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={Math.ceil(topics.length / cardsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
        </div>
    );
};

export default App;
