import * as Tone from 'tone'
import Button from '@mui/material/Button';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import Snackbar from '@mui/material/Snackbar';
import PitchesLeaderboard from './PitchesLeaderboard';
import {useState, useEffect, useMemo} from 'react'


function GetInspired({user, playAllKeys, setInChordEx}) {
    const [currentNote, setCurrentNote] = useState("");
    const [correctAnswerStreak, setCorrectAnswerStreak] = useState(0);
    const [currentKey, setCurrentKey] = useState("Random");
    const [score, setScore] = useState(0);
    const [totalQs, setTotalQs] = useState(0);
    const [showLeaderboard, setShowLeaderboard] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    

    const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"]
    const piano = useMemo(() => {
        return new Tone.Sampler({
            urls: {
                C2: "C2.mp3",
                "D#2": "Ds2.mp3",
                "F#2": "Fs2.mp3",
                A2: "A2.mp3",
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
                C6: "C6.mp3",
                "D#6": "Ds6.mp3",
                "F#6": "Fs6.mp3",
                A6: "A6.mp3",            
            },
            baseUrl: "https://tonejs.github.io/audio/salamander/"
        }
    ).toDestination()},[])
    // const chordEvent = new Tone.ToneEvent(((time, chord) => {
    //     piano.triggerAttackRelease(chord, 0.5, time);
    // }), [0, 4, 8])

    useEffect(() => {
        setInChordEx(false)
        if (!user) {
            return undefined;
        }
        else {
            fetch(`/api/totals/all/${user._id}`)
            .then( res => res.json())
            .then( data => {
                console.log("data:", data)
                setScore(data.totalPitchesCorrect);
                setTotalQs(data.totalPitchesAttempted);
                setCorrectAnswerStreak(data.currentPitchStreak);
            })
            .catch( error => console.log(error.message));
        }
    },[user])

    function randomNote() {
        const note = notes[Math.floor(Math.random() * 12)]
        setCurrentNote(note)
        return note;
    }

    function playChords() {
        const randNote = notes[Math.floor(Math.random() * 12)]
        setCurrentKey(randNote)
        
        Tone.start()
        piano.triggerAttackRelease(Tone.Frequency(`${playAllKeys ? randNote + '2' : 'C3'}`).harmonize([0, 7, 12, 16]), '4n', "+.5")
        piano.triggerAttackRelease(Tone.Frequency(`${playAllKeys ? randNote + '2' : 'C3'}`).harmonize([5, 9, 12, 17]), '4n', "+1")
        piano.triggerAttackRelease(Tone.Frequency(`${playAllKeys ? randNote + '2' : 'C3'}`).harmonize([7, 11, 14, 19]), '4n', "+1.5")
        piano.triggerAttackRelease(Tone.Frequency(`${playAllKeys ? randNote + '2' : 'C3'}`).harmonize([-5, 5, 11, 17]), '4n', "+2")
        piano.triggerAttackRelease(Tone.Frequency(`${playAllKeys ? randNote + '2' : 'C3'}`).harmonize([0, 7, 12, 16]), '2n', "+2.5")
        piano.triggerAttackRelease(Tone.Frequency(`${randomNote()}3`), "2n", "+3.7")
        

    }

    function handleAnswer({target: {value}}) {
        setTotalQs(prev => (prev + 1));
        if (currentNote === value) {
            setCorrectAnswerStreak(prev => prev + 1);
            setScore(prev => (prev + 1));
            console.log("Correct!");
            playChords()
            postTotals(correctAnswerStreak + 1, score + 1)

        }
        else {
            correctAnswerStreak >= 3 ? postStreak() : console.log('streak notposted');
            setOpenSnackbar(true)
            postTotals(0, score)
        }
        
    }

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
            setOpenSnackbar(false);
        };

    function postStreak(){
        console.log("posting streak...", correctAnswerStreak)
            
        if (correctAnswerStreak > 0)
        {
        fetch(`/api/scores/pitch_scores`, {
            method: "POST",
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token"),
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({correctAnswerStreak: correctAnswerStreak})
        })
        .then( res => res.json())
        .then( data => {
            console.log(data)
            setCorrectAnswerStreak(0);
        })
        .catch( error => console.log(error.message));}
    }

    function postTotals(streak = 0, numCorrect) {
        const totalsObj = {
            totalPitchesAttempted: totalQs+1,
            totalPitchesCorrect: numCorrect,
            currentPitchStreak: streak
        }
       fetch(`/api/totals/pitches/${user._id}`, {
           method: "PATCH",
           headers: {
               "Content-Type": "application/json",
               Accept: "application/json"
           },
           body: JSON.stringify(totalsObj)
       })
       .then( res => res.json())
       .then( data => console.log(data))
       .catch( error => console.log(error.message));

        console.log("posting totals...", )
    }
    
    return ( 
        <div className='exercise-container'>        
            <div className='score-data'>
                <h3>Total attempted: {score} out of {totalQs}</h3>
                <p>lifetime score: {Math.round(score/totalQs * 10000)/100}%</p>
                <p>Current streak: {correctAnswerStreak >= 2 ? correctAnswerStreak + " in a row!" : 0} </p>
            </div>  
            {showLeaderboard ? <PitchesLeaderboard/>
            :<div className='answerOptions'>
                <div className='exercise-info'>
                    <h2>Which note just played?</h2>
                    <p>Current Key Center: {playAllKeys ? currentKey : 'C'}</p>
                </div>
                <div className='exercise'>
                    <div className='play-buttons'>
                        <Button  variant='contained' size='medium' onClick={() =>piano.triggerAttackRelease(Tone.Frequency(`${currentNote}3`), "2n")}>Play Note Again</Button>
                    </div>
                    <div className='note-options'>
                        {notes.map(note => {
                            return <Button 
                                        variant='contained' 
                                        className='note-button'
                                        style={{textTransform:'none'}}
                                        size="medium"
                                        key={note}
                                        value={note} 
                                        name={note}
                                        onClick={e =>handleAnswer(e)}>{note}
                                    </Button>
                            })
                        }
                    </div>
                    <div className='play-buttons'>
                        <Button  size="medium" variant='contained' onClick={() => playChords()}>Play</Button>                        
                    </div>
                </div>
            </div>
            }
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

export default GetInspired;