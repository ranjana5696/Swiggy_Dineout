import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route

} from "react-router-dom";
import Home from './components/Home';
import BookATable from './components/BookATable';
import Blog from './components/Blog'
import ApiContextData from './components/ApiContextData';


const Routers = () => {
    return (
        <ApiContextData>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/restaurants" element={<BookATable />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </Router>
        </ApiContextData>
    )
}

export default Routers
