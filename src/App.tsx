import { useState, useMemo, useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { ChordEx } from './pages/chord-exercise/ChordEx';
import { PitchEx } from './pages/pitch-exercise/PitchEx';
import { Register } from './pages/Login/Register';
import { OauthLogin, LogoutButton } from './pages/Login/OauthLogin';
import { Footer } from './components/Footer';
import { PitchArray } from './utils/pitchArray';
import { usePiano } from './hooks/usePiano';
import { useAuth0 } from '@auth0/auth0-react';
import './styles.css';

export const DATABASE_URL = import.meta.env.VITE_DB_URL;

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user)

    // TODO :
    // this state variable may serve better as a useRef, the point is to call the animate function from outside MusicWave
    const [runSVGWave, setRunSVGWave] = useState(false);
    const [pageLoading, setPageLoading] = useState(true);

    // const [showMenu, setShowMenu] = useState(false);
    const pitchArr = useMemo(() => new PitchArray(['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'] ), []);
    const piano = usePiano(setPageLoading);

    useEffect(() => {
      const fetchUserData = async () => {
        if (user && isAuthenticated) {
            await fetch(DATABASE_URL + 'api/user/me', {
              method: 'POST',
              credentials: 'include',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(d => console.log(d))
            // .then(data => userContext?.setUser(data.rows[0]))
            }
        }

      fetchUserData()
        .catch(e => console.log(e))
    
    }, [user])
   
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
            Chord Exercise
          </Link>
          <Link className="nav-link" to="/pitch_practice">
            Pitch Exercise
          </Link>
            {user ? <LogoutButton/> :
              <>
                <OauthLogin/>
                <Link className="flex nav-link" to="/register">
                  Sign Up
                </Link>
              </>  
            }
        </nav>
        <section className='mainContent'>
          <Routes>
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
      <section className="footer">
        <Footer/>
      </section>
    </div>
  );
};

export default App;
