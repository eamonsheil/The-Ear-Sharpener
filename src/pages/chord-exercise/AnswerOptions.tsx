import * as React from 'react';

export interface IChordOptionsProps {
  handleAnswer: Function
  type: string
}

export function AnswerOptions ({handleAnswer, type}: IChordOptionsProps) {
  
    const chords = ["major", "minor", "augmented", "diminished_triad", "major_7th", "dominant_7th", "minor_7th", "diminished", "half_diminished"];
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];
    

    const mapData = (data: string[]) => {
      return data.map(el => {
        return <button onClick={(e) => handleAnswer(el)}>{el}</button>
        })
    }
  return (
    <div className='chord-options'>
      {type === "chord" ? mapData(chords) : mapData(notes)}
         
         
        
    </div>
  );
}
