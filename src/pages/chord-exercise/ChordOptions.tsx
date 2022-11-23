import * as React from 'react';

export interface IChordOptionsProps {
  handleAnswer: Function
}

export function ChordOptions ({handleAnswer}: IChordOptionsProps) {
  
    const options = ["major", "minor", "augmented", "diminished_triad", "major_7th", "dominant_7th", "minor_7th", "diminished", "half_diminished"];

    
  return (
    <div className='chord-options'>
      {options.map(chord => {
         return <button onClick={(e) => handleAnswer(chord)}>{chord}</button>
         })}
        
    </div>
  );
}
