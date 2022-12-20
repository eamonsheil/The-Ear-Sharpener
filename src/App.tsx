import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { Analytics } from '@vercel/analytics/react'
import { Home } from './pages/home/Home';
import { ChordEx } from './pages/chord-exercise/ChordEx';
import { PitchEx } from './pages/pitch-exercise/PitchEx';
import { Piano } from './components/Piano';
import { useState, useMemo, useEffect, useContext } from 'react';
import './styles.css';
import { usePiano } from './hooks/usePiano';
import { PitchArray } from './utils/pitchArray';
import { Register } from './pages/Login/Register';
import { Login } from './pages/Login/Login';
import { UserContext } from './context/user.context';


export const DATABASE_URL = 'https://expressjs-postgres-production-382e.up.railway.app/';
// 'http://localhost:3000/'



const App = () => {
  const userContext = useContext(UserContext);
    // TODO :
    // this state variable may serve better as a useRef, the point is to call the animate function from outside MusicWave
    const [runSVGWave, setRunSVGWave] = useState(false);
    const [pageLoading, setPageLoading] = useState(true);
    // const [isChromatic, setIsChromatic] = useState(true);

    // const [showMenu, setShowMenu] = useState(false);
    const pitchArr = useMemo(() => new PitchArray(['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'] ), []);
    
  
    const piano = usePiano(setPageLoading);


    useEffect(() => {
      fetch(DATABASE_URL + 'api/student/me', {
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
  
      })
      .then(res => res.json())
      .then(data => userContext?.setUser(data.rows[0]))
    }, [])
   
  return (
    <div className="app flex">
      {pageLoading ? <div className='loadingSamples'>
        Loading Piano sounds...
      </div>: null}

      <BrowserRouter>
        <nav className="navbar">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/chord_practice">
            Chord <br/>Exercise
          </Link>
          <Link className="nav-link" to="/pitch_practice">
            Pitch <br/>Exercise
          </Link>
          {userContext?.user ? 
          <div>
            <button onClick={userContext?.handleLogout}>Logout</button>
          </div>
          :<div className="flex loginLinks">
            <Link className="flex login-link" to="/login">
              Login
            </Link>
            <Link className="flex login-link" to="/register">
              Register
            </Link>
          </div>}
        </nav>
        <section className='mainContent'>
          <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register/>}/>
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
      {/* <Piano piano={piano}/> */}
      <Analytics/>
    </div>
  );
};

export default App;
