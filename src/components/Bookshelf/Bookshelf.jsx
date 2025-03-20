// src/components/Bookshelf/Bookshelf.jsx

import { useState } from 'react';

const Bookshelf = () => {

    const [books, setBooks] = useState([]);

    const [newBook, setNewBook] = useState({
        title: '',
        author: ''
    });

    const handleInputChange = (event) => {
        setNewBook({ ...newBook, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if ((newBook.title !== '') && (newBook.author !== '')) {
            setBooks([...books, newBook]);
            setNewBook({
                title: '',
                author: ''
            });
        };
    };

    return (
        <div className="bookshelfDiv">

            <div className="formDiv">

                <h3>Add a Book</h3>

                <form onSubmit={handleSubmit} >

                    <label htmlFor="title">Title: </label>
                    <input
                        id="title"
                        name="title"
                        value={newBook.title}
                        onChange={handleInputChange}
                    />

                    <br />

                    <label htmlFor="author">Author: </label>
                    <input
                        id="author"
                        name="author"
                        value={newBook.author}
                        onChange={handleInputChange}
                    />

                    <br />

                    <button type="submit">Add new book</button>

                </form>

            </div>

            <h3>My Books</h3>
            <div className="bookCardsDiv">
                <ul>
                {books.map((book, index) => (
                    <li>
                    <div className="bookCard">
                        Title: {book.title}
                        <br />
                        by
                        <br />
                        Author: {book.author}
                    </div>
                    </li>
                ))}
                </ul>
            </div>

        </div>
    );
};

export default Bookshelf;
