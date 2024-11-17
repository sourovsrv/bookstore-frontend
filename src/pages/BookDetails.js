import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';

function BookDetails() {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/books/${id}`)
            .then(response => setBook(response.data))
            .catch(error => console.error('Error fetching book details:', error));
    }, [id]);

    if (!book) return <h1>Loading...</h1>;

    return (
        <div>
            <h1>{book.title}</h1>
            <p>Author: {book.author}</p>
            <p>Price: ${book.price}</p>
        </div>
    );
}

export default BookDetails;
