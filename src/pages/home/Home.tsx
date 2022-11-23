import * as React from 'react';

export interface IHomeProps {
  placeholder?: undefined;
}

export function Home() {
  return (
    <div className="home-container">
      <div className="app-title">
        <h1>Ear Sharpener</h1>
      </div>
      <div className="exercise-links-container">
        <div className="exercises-link">
          <a href="/chord_practice" className="home-link">
            Chord Exercise
          </a>
          <div className="noot-1">&#9835;</div>
          <div className="noot-2">&#9833;</div>
          <div className="noot-3">&#9834;</div>
          <div className="noot-4">&#9836;</div>
          <div className="noot-5">&#9835;</div>
        </div>
        <div className="exercises-link">
          <a href="/pitch_practice" className="home-link">
            Pitch Exercise
          </a>
          <div className="noot-6">&#9835;</div>
          <div className="noot-7">&#9833;</div>
          <div className="noot-8">&#9834;</div>
          <div className="noot-9">&#9836;</div>
          <div className="noot-10">&#9833;</div>
        </div>
      </div>
    </div>
  );
}
