import ChordsLeaderboard from './ChordsLeaderboard';
import ExerciseCompleteModal from './modals/ExerciseCompleteModal';
import * as Tone from 'tone';
import Button from '@mui/material/Button';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import Snackbar from '@mui/material/Snackbar';
import { useState, useEffect, useMemo } from 'react';

const answerObj = { chordAnswer: [], correctAns: "" }

function ChordTraining({ user,  setShowLeaderboard, showLeaderboard, chordParams, useInversions, setInChordEx}) {
    const [answer, setAnswer] = useState(answerObj);
    const [score, setScore] = useState(0);
    const [totalQs, setTotalQs] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(5);
    const [isGameOn, setIsGameOn] = useState(false);
    const [userScore, setUserScore] = useState(0);
    const [showExerciseCompleteModal, setShowExerciseCompleteModal] = useState(false);
    const [disableBtn, setDisableBtn] = useState(true);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const chordsKeys = ['major', 'minor', 'augmented', 'diminished_triad', 'major_7th', 'dominant_7th', 'minor_7th', 'diminished', 'half_diminished']
    
    const inversions = {
        major: [[0, 4, 7], [0, 3, 8], [0, 5, 9]], 
        minor: [[0, 3, 7], [0, 4, 9], [0, 5, 8]], 
        augmented: [[0, 4, 8]], 
        diminished_triad: [[0, 3, 6], [0, 3, 9], [0, 6, 9]], 
        major_7th: [[0, 4, 7, 11], [0, 3, 7, 8], [0, 4, 5, 9], [0, 1, 5, 8]], 
        dominant_7th: [[0, 4, 7, 10], [0, 3, 6, 8], [0, 3, 5, 9], [0, 2, 6, 9]], 
        minor_7th: [[0, 3, 7, 10], [0, 4, 7, 9], [0, 3, 5, 8], [0, 2, 5, 9]], 
        diminished: [[0, 3, 6, 9]], 
        half_diminished: [[0, 3, 6, 10], [0, 3, 7, 9], [0, 4, 6, 9], [0, 2, 5, 8]]  
    }

    const synth = useMemo(() => {
        return  new Tone.Sampler({
            urls: {
                C3: "C3.mp3",
                "D#3": "Ds3.mp3",
                "F#3": "Fs3.mp3",
                A3: "A3.mp3",
                C4: "C4.mp3",
                "D#4": "Ds4.mp3",
                "F#4": "Fs4.mp3",
                A4: "A4.mp3",
                C5: "C5.mp3",
                "D#5": "Ds5.mp3",
                "F#5": "Fs5.mp3",
                A5: "A5.mp3",
            }, 
            baseUrl: "https://tonejs.github.io/audio/salamander/"
            }).toDestination();
        }, 
    [])

    console.log(Tone.context.state)

    useEffect(() => {
        setInChordEx(true)
        if (!user) {
            return undefined;
        }
        else {
            fetch(`/api/totals/all/${user._id}`)
            .then( res => res.json())
            .then( data => {
                console.log(data)
                setScore(data.totalChordsCorrect);
                setTotalQs(data.totalChordsAttempted);
                })
            .catch( error => console.log(error.message));
        }
    },[user])

    function randNum(num) {
        return Math.floor(Math.random()*num)
    }
   
    function getRandomChord() {
        const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"]
        let randomNote = notes[Math.floor(Math.random() * 12)]

        const chords = {
            major: Tone.Frequency(`${randomNote}3`).harmonize(useInversions ? inversions.major[randNum(3)] : [0, 4, 7]),
            minor: Tone.Frequency(`${randomNote}3`).harmonize(useInversions ? inversions.minor[randNum(3)] : [0, 3, 7]),
            augmented: Tone.Frequency(`${randomNote}3`).harmonize([0, 4, 8]),
            diminished_triad: Tone.Frequency(`${randomNote}3`).harmonize(useInversions ? inversions.diminished_triad[randNum(3)] : [0, 3, 6]), 
            major_7th: Tone.Frequency(`${randomNote}3`).harmonize(useInversions ? inversions.major_7th[randNum(4)] : [0, 4, 7, 11]),
            dominant_7th: Tone.Frequency(`${randomNote}3`).harmonize(useInversions ? inversions.dominant_7th[randNum(4)] : [0, 4, 7, 10]),
            minor_7th: Tone.Frequency(`${randomNote}3`).harmonize(useInversions ? inversions.minor_7th[randNum(4)] : [0, 3, 7, 10]),
            diminished: Tone.Frequency(`${randomNote}3`).harmonize([0, 3, 6, 9]),
            half_diminished: Tone.Frequency(`${randomNote}3`).harmonize(useInversions ? inversions.half_diminished[randNum(4)] : [0, 3, 6, 10]) 
        }
        const chordsKeys = Object.keys(chords)
        const chordQuality = chordsKeys[Math.floor(Math.random() * chordsKeys.length)]
        let randomChord = {currentChord: chords[chordQuality], chordQuality: chordQuality, randomNote: randomNote}
        return randomChord;
    }

    // play chords 
    function playSound() {
        setDisableBtn(false)
        setTimeout(setTotalQs(prev => (prev + 1)), 300);
        Tone.start()
        let chord = getRandomChord()
        // chords[chordQuality]
        console.log(chord.randomNote, chord.chordQuality)
        synth.triggerAttackRelease(chord.currentChord, chordParams.duration)

        setAnswer({ chord: chord.currentChord, correctAns: chord.chordQuality })
        
        console.log(Tone.context.state)
    }
    // play a chord, then start a 5 second interval where chords play continuously
        // TODO: end the tmimeout after a minute, and allow user to adjust total game length up to 5 mins (60000)
    

    function  startGame() {
        // Tone.start()
        // console.log(user)
        setIsGameOn(true);
            playSound()
        
        setTimeout(() => {
            clearInterval(playSoundInterval)
            clearInterval(timerInterval)

            setIsGameOn(false);

            if (chordParams.totalGameTime !== Infinity)
                handleEndOfGame()
            
        }, chordParams.totalGameTime);

        const timerInterval = setInterval(() => {
            if (timeRemaining > 0) {
                setTimeRemaining((prev) => (prev - 1))
            }
        }, 1000)
        
        const playSoundInterval = setInterval(() => {
            playSound(); 
            
            setTimeRemaining(chordParams.interval/1000)
        }, chordParams.interval)
    }


    function chordSelection({ target: { value } }) {
        if (value === answer.correctAns) {
        setScore(prev => (prev + 1));
        setUserScore(score => score + timeRemaining)
        setDisableBtn(true)
            
            if (chordParams.totalGameTime === Infinity){
                updateTotals()
                playSound()
            }
        }
        else {
            setOpenSnackbar(true)
            setTotalQs(prev => (prev + 1));
        }
    }

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
            setOpenSnackbar(false);
        };

    function handleEndOfGame() {
        setShowExerciseCompleteModal(true)
    };

    function resetGame() {
        setUserScore(0);
        setShowExerciseCompleteModal(false);
        setTimeRemaining(chordParams.interval/1000);
        
       updateTotals()
    };

    function updateTotals() {
        let totalsObj = {
            totalAttempted: totalQs,
            totalCorrect: (chordParams.totalGameTime === Infinity) ? score + 1 : score
        }
        fetch(`/api/totals/chords/${user._id}`, {
            method: "PATCH",
            headers: {
                 Authorization: 'Bearer ' + localStorage.getItem("token"),
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(totalsObj)
        })
        .then( res => res.json())
        .then( data => console.log("data:", data))
    };

    return ( 
        <div className='exercise-container'>         
            <div className='score-data'>
                <h3>Total answered: {score} out of {totalQs}</h3>
                <p>lifetime score: {Math.round(score/totalQs * 10000)/100}%</p>
            </div>
            {showLeaderboard 
            ? <ChordsLeaderboard/> 
            : <div className='answerOptions'>
                    <div className='exercise-info'>
                        <h2>Which chord just played?</h2>
                        {isGameOn && chordParams.totalGameTime !== Infinity ? timeRemaining : null}
                    </div>
                    <div className='exercise'>
                        {(chordParams.totalGameTime === Infinity) 
                        ? <div className='play-buttons'>
                            <Button variant='contained' onClick={() => synth.triggerAttackRelease(answer.chord, '2n')}>Play Chord Again</Button> 
                        </div>
                        : null}
                        <div className='chord-options'>
                            {chordsKeys.map(chord => {
                                const correctedName = chord.split('_')
                                const corrected = correctedName[0][0].toUpperCase() + correctedName[0].substring(1) + " " + (correctedName.length === 2 ? correctedName[1][0].toUpperCase() + correctedName[1].substring(1) : "")
                                    return <Button variant='contained' className='chord-button' style={{textTransform:'none'}}
                                    size="large"
                                    key={chord}
                                    value={chord} name={chord}
                                    disabled={disableBtn}
                                    onClick={chordSelection}>{corrected}</Button>
                                })
                            }
                        </div>
                        <div className='play-buttons'>
                            <Button 
                                variant='contained'
                                disabled={showExerciseCompleteModal || isGameOn}
                                size="medium" className="start-game-btn" onClick={() =>startGame()}>{chordParams.totalGameTime !== Infinity ? "Begin" : "New Chord"}
                            </Button>
                        </div>
                    </div>
                    {showExerciseCompleteModal 
                            ? <ExerciseCompleteModal 
                                user={user} 
                                userScore={userScore}
                                resetGame={resetGame}
                                chordParams={chordParams}
                                /> 
                            : null}
                </div>}
                <div className='leaderboard-link'>
                    <a href="#" className="icon-button" onClick={() => setShowLeaderboard(prev => !prev)}>
                        {showLeaderboard ? "Return to Exercise" : <LeaderboardIcon/>}
                    </a>
                </div>
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                    message="Incorrect!"
                    anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                    severity="error"
                    />
            </div>

     );
}

export default ChordTraining;