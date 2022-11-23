import * as Tone from 'tone';
import { useMemo, useState } from 'react';
import { Piano } from '../../components/Piano';
import { usePiano } from '../../hooks/usePiano';
import { PitchArray } from '../../utils/pitchArray';
import { MusicWave } from '../../components/MusicWave';
import { AnswerOptions } from '../../components/AnswerOptions';

export interface IPitchExProps {
  run:boolean;
  setRun: React.Dispatch<React.SetStateAction<boolean>>;
}

const scoreObj = {
  totalQs: 0,
  correct: 0,
  incorrect: 0
}

export function PitchEx({run, setRun}:IPitchExProps) {
  const [score, setScore] = useState(scoreObj);
  const [answer, setAnswer] = useState('');

  const piano = usePiano();
  const arr = useMemo(() => new PitchArray(), []);

  function handleClick() {
    const curr = arr.nextNote();
    // console.log(arr.data,arr.length)
    // console.log(curr);

    playSound(curr)
  }

  function randNum(num: number): string {
    return Math.floor(Math.random() * num + 2).toString();
  }
  
  function playSound(note?: string) {
    if (Tone.context.state !== 'running') {
      Tone.start();
    }
    if (!note) {
      return
    }
    const ans = `${note + randNum(5)}`
    setAnswer(ans)
    // trigger svg animation
    setRun(true);
    
    piano.triggerAttackRelease(ans, '4n');
  }


  function handleAnswer(pitch: string) {
    if (pitch === answer.slice(0, -1)) {
      setScore({...score, totalQs: score.totalQs + 1, correct: score.correct + 1});
      const curr = arr.nextNote();
      playSound(curr);
    } else {
      setScore({...score, totalQs: score.totalQs + 1, incorrect: score.incorrect + 1});
    }
  }

  function handleSVGClick() {
    setRun(true);
    piano.triggerAttackRelease(answer, '4n');
  }

  return (  
    <div>
      <h4>Score:</h4>
      <p>Total Attempts: {score.totalQs} <br/> Correct: {score.correct} <br/> Incorrect: {score.incorrect}</p>
      <br />
      <MusicWave run={run} setRun={setRun} handleClick={handleSVGClick}/>
      <button onClick={() => handleClick()}>next Note</button>
      <AnswerOptions handleAnswer={handleAnswer} type="pitch"/>
      <Piano />
    </div>
    );
}
