import { Link } from 'react-router-dom';
import "./home.styles.css";

export interface IHomeProps {
  placeholder?: undefined;
}

export function Home() {
  return (
    <div className="home-container">
      <div className="app-title">
        <h1>Ear Sharpener</h1>
      </div>
      <div className="flex exercise-links-container">
        <div className="chord-link">
          <Link to="./chord_practice" className="home-link">
            Chord Exercise
          </Link>
        </div>
        <div className="pitch-link">
          <Link to="/pitch_practice" className="home-link">
            Pitch Exercise
          </Link>
        </div>
      </div>
    </div>
  );
}
