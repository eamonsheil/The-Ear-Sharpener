import * as Tone from 'tone';
import { useContext, useEffect, useState } from 'react';
import { PitchArray } from '../../utils/pitchArray';
import { MusicWave } from '../../components/MusicWave';
import { AnswerOptions } from '../../components/AnswerOptions';
import { ExerciseConfig } from '../../components/ExerciseConfig';
import { DATABASE_URL } from '../../App';
import { Frequency } from 'tone/build/esm/core/type/Units';
import { useAuth0 } from '@auth0/auth0-react';

export interface IPitchExProps {
  runSVGWave:boolean;
  setRunSVGWave: React.Dispatch<React.SetStateAction<boolean>>;
  piano: Tone.Sampler;
  pitchArr:PitchArray
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
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [pitchScores, setPitchScores] = useState<ScoresObj | null>(null);
  const [answer, setAnswer] = useState('C4');
  const [settingsConfig, setSettingsConfig] = useState(defPitchSettings);
  const [disabled, setDisabled] = useState<HTMLButtonElement[]>([])

  useEffect(() => {

    if (user && isAuthenticated) {
      fetch(DATABASE_URL + `api/scores/pitch`, {
        method:'GET',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then(res => res.json())
      .then(data => setPitchScores(data.rows[0]))
    }
  },[])


  // random number between 2 and 'num' - returned as a string
  function randNum(num: number): string {
    return Math.floor(Math.random() * num + 2).toString();
  }
  // "Next Note" event handler function
  // gets the next note from NoteArray, sets answer, and plays a chord progression followed by a note

  async function playSound() {
    if (Tone.context.state !== 'running') {
      await Tone.start();
    }
    const ans = `${pitchArr.nextNote() + randNum(5)}`
    setAnswer(ans)

    // determines whether an establishing chord progression will precede the note, and what key it should be in
    if (settingsConfig.establishKey) {
      setTimeout(() => setRunSVGWave(true), 3700);
      const note =`${settingsConfig.isChromatic ? pitchArr.nextNote() + '2' : 'C3'}`

      piano.triggerAttackRelease(Tone.Frequency(note).harmonize([0, 7, 12, 16]) as unknown as Frequency[], '4n', "+.5")
      piano.triggerAttackRelease(Tone.Frequency(note).harmonize([5, 9, 12, 17]) as unknown as Frequency[], '4n', "+1")
      piano.triggerAttackRelease(Tone.Frequency(note).harmonize([7, 11, 14, 19]) as unknown as Frequency[], '4n', "+1.5")
      piano.triggerAttackRelease(Tone.Frequency(note).harmonize([-5, 5, 11, 17]) as unknown as Frequency[], '4n', "+2")
      piano.triggerAttackRelease(Tone.Frequency(note).harmonize([0, 7, 12, 16]) as unknown as Frequency[], '2n', "+2.5")
      piano.triggerAttackRelease(Tone.Frequency(ans) as unknown as Frequency, "2n", "+3.7")
    }
    else {
      piano.triggerAttackRelease(ans, settingsConfig.noteDuration);
      setRunSVGWave(true);
    }
  }


  // checks user selection against the answer state object, updates score state object
  async function handleAnswer(e:Event, pitch: string) {

    let fetchConfig:ScoresObj
    if (pitch === answer.slice(0, -1)) {
      fetchConfig = {
        total_attempts: 1,
        num_correct: 1,
        num_incorrect: 0,
        current_streak: pitchScores?.current_streak
      }
      // console.log('correct', fetchConfig)
      disabled.forEach(el => el.disabled = false);
      // setDisabled([])
    }
    else {
      fetchConfig = {
        total_attempts: 1,
        num_correct: 0,
        num_incorrect: 1,
        current_streak: -1
      }      
      // console.log('incorrect', fetchConfig)
      if (e) {
        const target = e.target as HTMLButtonElement;
  	    target.disabled = true;
        setDisabled([...disabled, target]);
      }
    }
    if (user && isAuthenticated){
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
          playSound()
        }
      });
    } 
    else {
      if (pitch === answer.slice(0, -1)) {
        playSound()
      }
    }
  }

  // runs MusicWave animation, and plays the 'currNote', if there is one
  async function handleSVGClick() {
    if (Tone.context.state !== 'running') {
      await Tone.start();
    }
    setRunSVGWave(true);
    piano.triggerAttackRelease(answer, settingsConfig.noteDuration);
  }

  function resetConfig() {
    setSettingsConfig(defPitchSettings);
  }

  return (  
    <div className="exercise-container">
      <div className="exerciseScores">
      { user && isAuthenticated && pitchScores ? 
        <>
          <p>
            Total Attempts: {pitchScores.total_attempts} <br/> 
            Correct: {pitchScores.num_correct} <br/> 
            Incorrect: {pitchScores.num_incorrect} <br />
            Current Streak: {pitchScores.current_streak}
          </p>
        </> : <div className='exerciseScores'>
          Please login or create an account to save and track your progress
          </div>}
      </div>
      <div className="config">
        <ExerciseConfig resetConfig={resetConfig}>
        <div>
          <label htmlFor="establishKey" >
            Establish key?
            <input type="checkbox" 
              name="establishKey" 
              checked={settingsConfig.establishKey}
              onChange={() => setSettingsConfig({...settingsConfig, establishKey: !settingsConfig.establishKey})} />
          </label>
        </div>
        <div>
          <h4>Note Duration</h4>
          <label htmlFor="short" className="for"> Short:
            <input type="radio" 
              name="short" 
              checked={settingsConfig.noteDuration === '4n'}
              onChange={() => setSettingsConfig({...settingsConfig, noteDuration: '4n'})} />
          </label>
          <label htmlFor="medium" className="for"> Medium:
            <input type="radio" 
              name="medium" 
              checked={settingsConfig.noteDuration === '2n'}
              onChange={() => setSettingsConfig({...settingsConfig, noteDuration: '2n'})} />
          </label>
          <label htmlFor="long" className="for"> Long:
            <input type="radio" 
              name="long" 
              checked={settingsConfig.noteDuration === '1m'}
              onChange={() => setSettingsConfig({...settingsConfig, noteDuration: '1m'})} />
          </label>
        </div>
        <div>
          <label htmlFor="isChromatic" >
            Chromatic base note?
            <input type="checkbox" 
              name="isChromatic" 
              checked={settingsConfig.isChromatic}
              onChange={() => setSettingsConfig({...settingsConfig, isChromatic: !settingsConfig.isChromatic})} />
          </label>
        </div>
        </ExerciseConfig>
      </div>
      <div className="wave flex">
        <MusicWave run={runSVGWave} setRun={setRunSVGWave} handleClick={handleSVGClick}/>
      </div>
            
      <div className='answerOptions'>     
        <AnswerOptions handleAnswer={handleAnswer} data={pitchArr.data}/>
      </div>
      <div className='start-game flex'>
        <button 
          onClick={() => {
            disabled.forEach(el => el.disabled = false)
            playSound()}
          }>
            Next Note
        </button>
      </div>
    </div>
  );
}
