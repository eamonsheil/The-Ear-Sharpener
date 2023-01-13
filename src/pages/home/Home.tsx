import { Link } from 'react-router-dom';
import { TrebleClef } from './TrebleClef';
import "./home.styles.css";
import { UserContext } from '../../context/user.context';
import { useContext } from 'react';

export interface IHomeProps {
  placeholder?: undefined;
}

export function Home() {
  const userContext = useContext(UserContext);
  return (
    <div className="home-container">
      <h2 className='appTitle'>The Ear Sharpener</h2>
      <div className='flex titleFlag'>
        <TrebleClef/>
      </div>
      {userContext?.user ?<p>Welcome back, {userContext?.user?.name}</p>: null}
      <div className="flex exercise-links-container">
        <div className="flex chord-link">
          <Link to="./chord_practice" className="flex home-link">
            Chord Exercise
          </Link>
        </div>
        <div className="flex pitch-link">
          <Link to="/pitch_practice" className="flex home-link">
            Pitch Exercise
          </Link>
        </div>
      </div>
    </div>
  );
}
