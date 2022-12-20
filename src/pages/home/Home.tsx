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
      <div className="flex titleFlag">
        <TrebleClef/>
        <h1 className='appTitle'>The Ear Sharpener</h1>
      </div>
      <p>Welcome back, {userContext?.user?.name}</p>
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
