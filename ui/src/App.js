import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import Page2 from "./Page2";

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <div>
                        <Link className="App-link" to="/">Home</Link>
                        &nbsp;
                        <Link className="App-link" to="/page2">Page2</Link>
                    </div>

                    <img src={logo} className="App-logo" alt="logo" />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/page2" element={<Page2 />} />
                    </Routes>
                </BrowserRouter>
            </header>

        </div>
    );
}

export default App;
