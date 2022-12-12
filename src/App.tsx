import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import {Analytics} from '@vercel/analytics/react'
import { Home } from './pages/home/Home';
import { ChordEx } from './pages/chord-exercise/ChordEx';
import { PitchEx } from './pages/pitch-exercise/PitchEx';
import { Piano } from './components/Piano';
import { useState, useMemo } from 'react';
import './styles.css';
import { usePiano } from './hooks/usePiano';
import { PitchArray } from './utils/pitchArray';
import { LoginPage } from './pages/login/LoginPage';

export const DATABASE_URL = 'http://localhost:3000/'

// 'https://expressjs-postgres-production-382e.up.railway.app/'

const App = () => {
    // TODO :
    // this state variable may serve better as a useRef, the point is to call the animate function from outside MusicWave
    const [runSVGWave, setRunSVGWave] = useState(false);
    const [pageLoading, setPageLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    // const [showMenu, setShowMenu] = useState(false);
    const pitchArr = useMemo(() => new PitchArray(['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B']), []);
    
  
    const piano = usePiano(setPageLoading);

   
  return (
    <div className="app">
      {pageLoading ? <div className='loadingSamples'>
        Loading Piano sounds...
      </div>: null}

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
        
        <section className='mainContent'>
          <Routes>
            <Route path='/login' element={<LoginPage/>}/>
              <Route path="/" element={ <Home /> }/>
              <Route path="/chord_practice" 
                element={<ChordEx runSVGWave={runSVGWave} setRunSVGWave={setRunSVGWave} piano={piano} pitchArr={pitchArr}/> } 
                />
              <Route path="/pitch_practice" 
                element={<PitchEx runSVGWave={runSVGWave} setRunSVGWave={setRunSVGWave} piano={piano} pitchArr={pitchArr} /> } 
                />            
          </Routes>
        </section>
      </BrowserRouter>
      <Piano piano={piano}/>
      <Analytics/>
    </div>
  );
};

export default App;
