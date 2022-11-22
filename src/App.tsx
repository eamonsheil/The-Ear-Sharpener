
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from './pages/home/Home';
import { ChordEx } from './pages/chord-exercise/ChordEx';
import { PitchEx } from './pages/pitch-exercise/PitchEx';
import './styles.css';

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <nav className="navbar">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/chord_practice">Chord Exercise</Link>
                    <Link className="nav-link" to="/pitch_practice">Pitch Exercise</Link>
                </nav>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/chord_practice' element={<ChordEx />} />
                    <Route path='/pitch_practice' element={<PitchEx />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;