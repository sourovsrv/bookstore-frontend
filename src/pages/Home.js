import { Link } from 'react-router-dom';
import React from 'react';

function Home() {
    return (
        <div>
            <h1>Welcome to the Bookstore</h1>
            <p>Your one-stop shop for amazing books!</p>
            <Link to="/books">
                <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
                    Browse Books
                </button>
            </Link>
        </div>
    );
}

export default Home;
