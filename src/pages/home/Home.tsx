import { Link } from 'react-router-dom';
import { TrebleClef } from './TrebleClef';
import "./home.styles.css";
import { useContext } from 'react';

export interface IHomeProps {
  placeholder?: undefined;
}

export function Home() {
  return (
    <div className="flex home-container">
      <h2 className='appTitle'>The Ear Sharpener</h2>
      <div className='flex titleFlag'>
        <TrebleClef/>
      </div>
      <div className="flex exercise-links-container">
        <div className="flex exercise-link">
          <Link to="./chord_practice" className="flex home-link">
            Chord Exercise
          </Link>
        </div>
        <div className="flex exercise-link">
          <Link to="/pitch_practice" className="flex home-link">
            Pitch Exercise
          </Link>
        </div>
      </div>
    </div>
  );
}
