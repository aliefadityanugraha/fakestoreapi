
import "./App.css";
import Navbar from "./componets/navbar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import {GetOneData} from "./handler/api";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/details/:id" element={<GetOneData />} />
            </Routes>
        </Router>
    );
}

export default App;
