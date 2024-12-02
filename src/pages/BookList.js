import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/books')
            .then(response => setBooks(response.data))
            .catch(error => console.error('Error fetching books:', error));
    }, []);

    return (
        <div>
            <h1>Book List</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <Link to={`/books/${book.id}`}>{book.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;
