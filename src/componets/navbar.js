import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";

function Navbar() {
    return (
        <>
            <Router>
                <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary">
                    <div className="container">
                        <a className="navbar-brand" href="#">Fake Store Api</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/about">About</Link>
                                    </li>
                            </ul>
                            <span className="navbar-text">
                                Navbar text with an inline element
                            </span>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        </>
    )
}

export default Navbar;