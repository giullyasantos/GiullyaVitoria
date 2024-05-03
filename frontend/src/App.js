import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Work from './pages/Work'; // Adjust the path as necessary
import Landing from './pages/Landing';
import Blank from './pages/blank';
import './App.css'; // Import your CSS file with transition styles

function App() {
    return (
        <Router>
            <div className="app-container"> {/* Wrap your Routes in a container */}
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/blank" element={<Blank />} />
                    {/* other routes can also be added here */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
