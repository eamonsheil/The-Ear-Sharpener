import { useMemo, useState } from 'react';
import * as Tone from 'tone';
import { PitchArray } from '../../utils/pitchArray';
import { usePiano } from '../../hooks/usePiano';
import { Piano } from '../../components/Piano';
import { animate, MusicWave } from '../../components/MusicWave';
import { AnswerOptions } from './AnswerOptions';
import { Frequency } from 'tone';

export interface IChordExProps {
  run:boolean;
  setRun: React.Dispatch<React.SetStateAction<boolean>>;
}

const inversions: ChordArr = {
  major: [
    [0, 4, 7],
    [0, 3, 8],
    [0, 5, 9],
  ],
  minor: [
    [0, 3, 7],
    [0, 4, 9],
    [0, 5, 8],
  ],
  augmented: [[0, 4, 8]],
  diminished_triad: [
    [0, 3, 6],
    [0, 3, 9],
    [0, 6, 9],
  ],
  major_7th: [
    [0, 4, 7, 11],
    [0, 3, 7, 8],
    [0, 4, 5, 9],
    [0, 1, 5, 8],
  ],
  dominant_7th: [
    [0, 4, 7, 10],
    [0, 3, 6, 8],
    [0, 3, 5, 9],
    [0, 2, 6, 9],
  ],
  minor_7th: [
    [0, 3, 7, 10],
    [0, 4, 7, 9],
    [0, 3, 5, 8],
    [0, 2, 5, 9],
  ],
  diminished: [[0, 3, 6, 9]],
  half_diminished: [
    [0, 3, 6, 10],
    [0, 3, 7, 9],
    [0, 4, 6, 9],
    [0, 2, 5, 8],
  ],
};

type AnswerObj = {
  chord: string[], 
  correctAns: string
};
const defaultObj = {
  chord: [], 
  correctAns: ''
}

const scoreObj = {
  totalQs: 0,
  correct: 0,
  incorrect: 0
}

export function ChordEx({run, setRun}: IChordExProps) {
  const [currentNote, setCurrentNote] = useState<string | undefined>('');
  const [useInversions, setUseInversions] = useState(false);
  const [answer, setAnswer] = useState<AnswerObj>(defaultObj);
  const [score, setScore] = useState(scoreObj);

  const piano = usePiano();
  const arr = useMemo(() => new PitchArray(), []);

  
  



  // onClick, the next note value from our PitchArray is popped off
  const handleClick = (): void => {
    const curr = arr.nextNote();
    playSound(curr);
    setCurrentNote(curr);
  };
  function playSound(note?: string) {
    // setDisableBtn(false)
    // setTimeout(setTotalQs(prev => (prev + 1)), 300);
    if (Tone.context.state !== 'running') {
      Tone.start();
    }
    // trigger svg animation
    setRun(true);
    let chord = getRandomChord(note);
    piano.triggerAttackRelease(chord.currentChord, '4n');

    setAnswer({ chord: chord.currentChord, correctAns: chord.chordQuality })
  }

  function randNum(num: number) {
    return Math.floor(Math.random() * num);
  }

  function getRandomChord(note?: string): ChordObj {
    const chords: ChordArr = {
      major: Tone.Frequency(`${note}3`).harmonize(
        useInversions ? inversions.major[randNum(3)] : [0, 4, 7],
      ),
      minor: Tone.Frequency(`${note}3`).harmonize(
        useInversions ? inversions.minor[randNum(3)] : [0, 3, 7],
      ),
      augmented: Tone.Frequency(`${note}3`).harmonize([0, 4, 8]),
      diminished_triad: Tone.Frequency(`${note}3`).harmonize(
        useInversions ? inversions.diminished_triad[randNum(3)] : [0, 3, 6],
      ),
      major_7th: Tone.Frequency(`${note}3`).harmonize(
        useInversions ? inversions.major_7th[randNum(4)] : [0, 4, 7, 11],
      ),
      dominant_7th: Tone.Frequency(`${note}3`).harmonize(
        useInversions ? inversions.dominant_7th[randNum(4)] : [0, 4, 7, 10],
      ),
      minor_7th: Tone.Frequency(`${note}3`).harmonize(
        useInversions ? inversions.minor_7th[randNum(4)] : [0, 3, 7, 10],
      ),
      diminished: Tone.Frequency(`${note}3`).harmonize([0, 3, 6, 9]),
      half_diminished: Tone.Frequency(`${note}3`).harmonize(
        useInversions ? inversions.half_diminished[randNum(4)] : [0, 3, 6, 10],
      ),
    };
    const chordsKeys = Object.keys(chords) as string[];
    const chordQuality = chordsKeys[Math.floor(Math.random() * chordsKeys.length)];
    
    return {
      currentChord: chords[chordQuality as keyof typeof chords],
      chordQuality: chordQuality,
      note: note,
    };
  }

  function handleAnswer(chord: string) {
    if (chord === answer.correctAns) {
      setScore({...score, totalQs: score.totalQs + 1, correct: score.correct + 1});
      const curr = arr.nextNote();
      playSound(curr);
    } else {
      setScore({...score, totalQs: score.totalQs + 1, incorrect: score.incorrect + 1});
    }
  }

  return (
    <div>
      <h4>Score:</h4>
      <p>Total Attempts: {score.totalQs} <br/> Correct: {score.correct} <br/> Incorrect: {score.incorrect}</p>{currentNote}
      <br />
      <MusicWave run={run} setRun={setRun}/>
      <AnswerOptions handleAnswer={handleAnswer} type="chord"/>
      
      <br />
      <button onClick={handleClick}>new note</button>

      <Piano />
    </div>
  );
}
