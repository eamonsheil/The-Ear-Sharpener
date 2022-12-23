import { useContext, useEffect, useMemo, useState } from 'react';
import * as Tone from 'tone';
import { PitchArray } from '../../utils/pitchArray';
import { MusicWave } from '../../components/MusicWave';
import { AnswerOptions } from '../../components/AnswerOptions';
import { ExerciseConfig } from '../../components/ExerciseConfig';
import "./chordEx.styles.css"
import { DATABASE_URL } from '../../App';
import { UserContext } from '../../context/user.context';



export interface IChordExProps {
  runSVGWave:boolean;
  setRunSVGWave: React.Dispatch<React.SetStateAction<boolean>>;
  piano: Tone.Sampler;
  pitchArr: PitchArray
}

const inversions: ChordArr = {
  major: [[0, 4, 7], [0, 3, 8], [0, 5, 9]],
  minor: [[0, 3, 7], [0, 4, 9], [0, 5, 8]],
  augmented: [[0, 4, 8]],
  diminished_triad: [[0, 3, 6], [0, 3, 9], [0, 6, 9]],
  major_7th: [[0, 4, 7, 11], [0, 3, 7, 8], [0, 4, 5, 9], [0, 1, 5, 8]],
  dominant_7th: [[0, 4, 7, 10], [0, 3, 6, 8], [0, 3, 5, 9], [0, 2, 6, 9]],
  minor_7th: [[0, 3, 7, 10], [0, 4, 7, 9], [0, 3, 5, 8], [0, 2, 5, 9]],
  diminished: [[0, 3, 6, 9]],
  half_diminished: [[0, 3, 6, 10], [0, 3, 7, 9], [0, 4, 6, 9], [0, 2, 5, 8]]
};

type AnswerObj = {
  chord: string[], 
  correctAns: string
};

const defaultObj = {
  chord: [], 
  correctAns: ''
};

const scoreObj = {
  totalQs: 0,
  correct: 0,
  incorrect: 0
};
const defChordSettings = {
  useInversions: false,
  noteDuration: '2n',
  ansOptions: ["major", "minor", "augmented", "diminished_triad", "major_7th", "dominant_7th", "minor_7th", "diminished", "half_diminished"],
  isChromatic: false
};

export function ChordEx({runSVGWave, setRunSVGWave, piano, pitchArr}: IChordExProps) {
  const userContext = useContext(UserContext);


  const [chordScores, setChordScores] = useState<ScoresObj | null>(null);
  // const [currentNote, setCurrentNote] = useState<string | undefined>('');
  const [useInversions, setUseInversions] = useState(false);
  const [answer, setAnswer] = useState<AnswerObj>(defaultObj);
  const [score, setScore] = useState(scoreObj);
  const [settingsConfig, setSettingsConfig] = useState(defChordSettings);

  const chordArr = useMemo(() => new PitchArray(settingsConfig.ansOptions), [settingsConfig.ansOptions]);

  useEffect(() => {
    fetch(DATABASE_URL + `api/scores/chord`, {
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
      setChordScores(data.rows[0])})
  },[])


  // onClick, the next note value from our PitchArray is popped off
  const handleClick = () => {
    const curr = pitchArr.nextNote();
    // setCurrentNote(curr);
    playSound(curr);
  };

  async function playSound(note?: string) {
    // setTimeout(setTotalQs(prev => (prev + 1)), 300);
    if (Tone.context.state !== 'running') {
      await Tone.start();
    }
    // trigger svg animation
    setRunSVGWave(true);

    const chord = getRandomChord(note);

    piano.triggerAttackRelease(chord.currentChord, '4n');

    setAnswer({ chord: chord.currentChord, correctAns: chord.chordQuality });
  }

  function randNum(num: number) {
    return Math.floor(Math.random() * num);
  }

   // returns object containing chord data
  function getRandomChord(note?: string): ChordObj {
    const nextChord = chordArr.nextNote();
    
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

    return {
      currentChord: chords[nextChord as keyof typeof chords],
      chordQuality: nextChord as string,
      note: note,
    };
  }


  async function handleAnswer(chord: string) {
    console.log(chord)
    // contents of fetchConfig correspond to table columns, and will be added to the values stored in the tables
    let fetchConfig:ScoresObj
    if (chord === answer.correctAns) {
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
    await fetch(DATABASE_URL + "api/scores/chord", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(fetchConfig)
    })
    .then(res => res.json())
    .then(data => setChordScores(data.rows[0]))
    .then(() => {
      if (chord === answer.correctAns) {
      const curr = pitchArr.nextNote();
      playSound(curr)
    }
    })
  }

  async function handleSVGClick() {
    if (Tone.context.state !== 'running') {
      await Tone.start();
    }

    setRunSVGWave(true);
    piano.triggerAttackRelease(answer.chord, '4n');
  }

  function resetConfig() {
    setSettingsConfig(defChordSettings);
  }

  const chordOptionsCheckboxes = defChordSettings.ansOptions
    .map((chord) => {
      const active = settingsConfig.ansOptions.indexOf(chord) != -1
      return (
        <div className='flex chordOption' key={chord}>
          <input type="checkbox" name={chord} 
            checked={active} 
            onChange={() => setSettingsConfig({
              ...settingsConfig,
               ansOptions: active ? settingsConfig.ansOptions.filter(el => el != chord)
                : [...settingsConfig.ansOptions, chord]
              })
            }
            />
          <label htmlFor={chord}>{chord}</label>
        </div>
      );
    });


  return (
    <div className='exercise-container'>
      <div className='gridDumbDiv1'/>
      <div className="exerciseScores">
        { chordScores ? 
        <>
          <h4>Score:</h4>
          <p>
            Total Attempts: {chordScores.total_attempts} <br/> 
            Correct: {chordScores.num_correct} <br/> 
            Incorrect: {chordScores.num_incorrect} <br />
            Current Streak: {chordScores.current_streak}
          </p>
        </> : <div/>}
      </div>

      <div className="config">

        <ExerciseConfig resetConfig={resetConfig}>

        <h4>Select chords to be tested on</h4>
          <div className="flex chordOptions">
            
            {chordOptionsCheckboxes}
          </div>

        </ExerciseConfig>

      </div>

      <div className="wave flex">
        <MusicWave run={runSVGWave} setRun={setRunSVGWave} handleClick={handleSVGClick}/>
      </div>
      
      <div className='answerOptions'>     
        <AnswerOptions handleAnswer={handleAnswer} data={settingsConfig.ansOptions}/>

      </div>
      <div className='start-game flex'>
        <button onClick={handleClick}>Begin</button>
      </div>
    </div>
  );
}
