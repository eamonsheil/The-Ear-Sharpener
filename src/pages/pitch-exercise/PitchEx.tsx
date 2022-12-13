import * as Tone from 'tone';
import { useMemo, useState } from 'react';
import { PitchArray } from '../../utils/pitchArray';
import { MusicWave } from '../../components/MusicWave';
import { AnswerOptions } from '../../components/AnswerOptions';
import { ExerciseConfig } from '../../components/settingsMenu/ExerciseConfig';

export interface IPitchExProps {
  runSVGWave:boolean;
  setRunSVGWave: React.Dispatch<React.SetStateAction<boolean>>;
  piano: Tone.Sampler;
  pitchArr:PitchArray
}

const scoreObj = {
  totalQs: 0,
  correct: 0,
  incorrect: 0
}

export function PitchEx({runSVGWave, setRunSVGWave, piano, pitchArr}:IPitchExProps) {
  const [score, setScore] = useState(scoreObj);
  const [answer, setAnswer] = useState('C4');

  // const piano = usePiano();
  // const arr = useMemo(() => new PitchArray(), []);


   

  // random number between 2 and 'num' - returned as a string
  function randNum(num: number): string {
    return Math.floor(Math.random() * num + 2).toString();
  }
  
  // "Next Note" event handler function
  // gets the next note from NoteArray, passes it
  // sets answer, and calls triggerAttackRelease method
  async function playSound(note?: string) {
    // if (!note) {
    //   return
    // }
    // const curr = arr.nextNote();
    if (Tone.context.state !== 'running') {
      await Tone.start();
    }
    const ans = `${pitchArr.nextNote() + randNum(5)}`
    setAnswer(ans)
    // trigger svg animation
    setRunSVGWave(true);
    
    piano.triggerAttackRelease(ans, '4n');
  }


  // checks user selection against the answer state object, updates score state object
  function handleAnswer(pitch: string) {
    if (pitch === answer.slice(0, -1)) {
      setScore({...score, totalQs: score.totalQs + 1, correct: score.correct + 1});
      const curr = pitchArr.nextNote();
      playSound(curr);
    } else {
      setScore({...score, totalQs: score.totalQs + 1, incorrect: score.incorrect + 1});
    }
  }

  // runs MusicWave animation, and plays the 'currNote', if there is one
  async function handleSVGClick() {
    if (Tone.context.state !== 'running') {
      await Tone.start();
    }
    setRunSVGWave(true);
    piano.triggerAttackRelease(answer, '4n');
  }

  return (  
    <div className="exercise-container">
      <div className="exerciseScores">
        <h4>Score:</h4>
        <p>
          Total Attempts: {score.totalQs} <br/> 
          Correct: {score.correct} <br/>
          Incorrect: {score.incorrect}
        </p>
      </div>
      <div className="config">
        <ExerciseConfig/>
      </div>
      <div className="wave">
        <MusicWave run={runSVGWave} setRun={setRunSVGWave} handleClick={handleSVGClick}/>
      </div>
            
      <div className='answerOptions'>     
        <AnswerOptions handleAnswer={handleAnswer} type="pitch"/>
      </div>
      <div className='start-game'>
        <button onClick={() => playSound()}>Begin</button>
      </div>
    </div>
  );
}
