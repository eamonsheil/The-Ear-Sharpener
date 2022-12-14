import * as React from 'react';

export interface IChordOptionsProps {
  handleAnswer: Function
  data: string[]
}

export function AnswerOptions ({handleAnswer, data}: IChordOptionsProps) {
  
    // const chords = ["major", "minor", "augmented", "diminished_triad", "major_7th", "dominant_7th", "minor_7th", "diminished", "half_diminished"];
    // const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];
    

    const mapData = ():JSX.Element[] => {
      return data.map(el => {
        return <button key={el} onClick={() => handleAnswer(el)}>{el}</button>
        })
    }
  return (
    <div className='chord-options'>
      {mapData()}
    </div>
  );
}
