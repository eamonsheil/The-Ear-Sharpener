import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { ChordEx } from './pages/chord-exercise/ChordEx';
import { PitchEx } from './pages/pitch-exercise/PitchEx';
import { useState } from 'react';
import './styles.css';
import { usePiano } from './hooks/usePiano';
import { Piano } from './components/Piano';

const App = () => {
    // TODO :
    // this state variable may serve better as a useRef, the point is to call the annimate funnction from outside MusicWave
    const [run, setRun] = useState(false);

    const piano = usePiano();
   
  return (
    <div className="app">
      <BrowserRouter>
        <nav className="navbar">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/chord_practice">
            Chord Exercise
          </Link>
          <Link className="nav-link" to="/pitch_practice">
            Pitch Exercise
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chord_practice" element={<ChordEx run={run} setRun={setRun} piano={piano}/>} />
          <Route path="/pitch_practice" element={<PitchEx run={run} setRun={setRun} piano={piano}/>} />
        </Routes>
      </BrowserRouter>
      <Piano piano={piano}/>
    </div>
  );
};

export default App;
