import * as Tone from 'tone';
import { useEffect, useMemo, useState } from 'react';
import { PitchArray } from '../../utils/pitchArray';
import { MusicWave } from '../../components/MusicWave';
import { AnswerOptions } from '../../components/AnswerOptions';
import { ExerciseConfig } from '../../components/ExerciseConfig';
import { DATABASE_URL } from '../../App';

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

const defPitchSettings = {
  // should the establishing key be in c major, or any key
  isChromatic: true,

  // how long will the note play for
  noteDuration: '4n',

  // should a chord progression precede the note to establish a key
  establishKey: true,
}

export function PitchEx({runSVGWave, setRunSVGWave, piano, pitchArr}:IPitchExProps) {
  const [score, setScore] = useState(scoreObj);
  const [pitchScores, setPitchScores] = useState<ScoresObj | null>(null);
  const [answer, setAnswer] = useState('C4');
  const [settingsConfig, setSettingsConfig] = useState(defPitchSettings);

  useEffect(() => {
    fetch(DATABASE_URL + `api/scores/pitch`, {
      method:'GET',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setPitchScores(data.rows[0])})
  },[])


  // random number between 2 and 'num' - returned as a string
  function randNum(num: number): string {
    return Math.floor(Math.random() * num + 2).toString();
  }
  
  // "Next Note" event handler function
  // gets the next note from NoteArray, passes it
  // sets answer, and calls triggerAttackRelease method
  async function playSound(note?: string) {
    if (Tone.context.state !== 'running') {
      await Tone.start();
    }
   
    // if (settingsConfig.establishKey) {
    //   piano.triggerAttackRelease(Tone.Frequency(`${settingsConfig.isChromatic ? note + '2' : 'C3'}`).harmonize([0, 7, 12, 16]), '4n', "+.5")
    //   piano.triggerAttackRelease(Tone.Frequency(`${settingsConfig.isChromatic ? note + '2' : 'C3'}`).harmonize([5, 9, 12, 17]), '4n', "+1")
    //   piano.triggerAttackRelease(Tone.Frequency(`${settingsConfig.isChromatic ? note + '2' : 'C3'}`).harmonize([7, 11, 14, 19]), '4n', "+1.5")
    //   piano.triggerAttackRelease(Tone.Frequency(`${settingsConfig.isChromatic ? note + '2' : 'C3'}`).harmonize([-5, 5, 11, 17]), '4n', "+2")
    //   piano.triggerAttackRelease(Tone.Frequency(`${settingsConfig.isChromatic ? note + '2' : 'C3'}`).harmonize([0, 7, 12, 16]), '2n', "+2.5")
    //   piano.triggerAttackRelease(Tone.Frequency(`${note}3`), "2n", "+3.7")
    // }
    const ans = `${pitchArr.nextNote() + randNum(5)}`
    setAnswer(ans)
    // trigger svg animation
    setRunSVGWave(true);
    
    piano.triggerAttackRelease(ans, '4n');
  }


  // checks user selection against the answer state object, updates score state object
  async function handleAnswer(pitch: string) {

    let fetchConfig:ScoresObj
    if (pitch === answer.slice(0, -1)) {
      fetchConfig = {
        total_attempts: 1,
        num_correct: 1,
        num_incorrect: 0,
        current_streak: 1 
      }
      console.log('correct', fetchConfig)
    } 
    else {
      fetchConfig = {
        total_attempts: 1,
        num_correct: 0,
        num_incorrect: 1,
        current_streak: 0
      }      
      console.log('incorrect', fetchConfig)
    }
    await fetch(DATABASE_URL + "api/scores/pitch", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(fetchConfig)
    })
    .then(res => res.json())

    .then(data => setPitchScores(data.rows[0]))
    .then(() => {
      if (pitch === answer.slice(0, -1)) {
      const curr = pitchArr.nextNote();
      playSound(curr)
      }
    })
  }

  // runs MusicWave animation, and plays the 'currNote', if there is one
  async function handleSVGClick() {
    if (Tone.context.state !== 'running') {
      await Tone.start();
    }
    setRunSVGWave(true);
    piano.triggerAttackRelease(answer, '4n');
  }

  function resetConfig() {
    setSettingsConfig(defPitchSettings);
  }

  return (  
    <div className="exercise-container">
      <div className="exerciseScores">
      { pitchScores ? 
        <>
          <h4>Score:</h4>
          <p>
            Total Attempts: {pitchScores.total_attempts} <br/> 
            Correct: {pitchScores.num_correct} <br/> 
            Incorrect: {pitchScores.num_incorrect} <br />
            Current Streak: {pitchScores.current_streak}
          </p>
        </> : <div/>}
      </div>
      <div className="config">
        <ExerciseConfig resetConfig={resetConfig}>

        </ExerciseConfig>
      </div>
      <div className="wave flex">
        <MusicWave run={runSVGWave} setRun={setRunSVGWave} handleClick={handleSVGClick}/>
      </div>
            
      <div className='answerOptions'>     
        <AnswerOptions handleAnswer={handleAnswer} data={pitchArr.data}/>
      </div>
      <div className='start-game flex'>
        <button onClick={() => playSound()}>Begin</button>
      </div>
    </div>
  );
}
