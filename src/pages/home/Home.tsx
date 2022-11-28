import { Link } from 'react-router-dom';
import { TrebleClef } from './TrebleClef';
import "./home.styles.css";

export interface IHomeProps {
  placeholder?: undefined;
}

export function Home() {
  return (
    <div className="home-container">
      <div className="flex titleFlag">
        <TrebleClef/>
        <h1 className='appTitle'>The Ear Sharpener</h1>
      </div>
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
