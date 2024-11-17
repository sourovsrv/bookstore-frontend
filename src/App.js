import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import BookDetails from './pages/BookDetails';
import BookList from './pages/BookList.js';
import Home from './pages/Home';
import React from 'react';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<BookList />} />
                <Route path="/books/:id" element={<BookDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
