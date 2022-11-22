
import { Route, Routes } from "react-router-dom";
import { Home } from './pages/home/Home';
import { ChordEx } from './pages/chord-exercise/ChordEx';
import { PitchEx } from './pages/pitch-exercise/PitchEx';
import './styles.css';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/exercises/chord_practice' element={<ChordEx />} />
                <Route path='/exercises/pitch-practice' element={<PitchEx />} />
            </Routes>
        </div>
    );
}

export default App;