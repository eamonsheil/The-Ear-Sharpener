import { Route, Routes} from "react-router-dom";
import { useState, useContext } from "react";
import ExercisesNavbar from "./ExercisesNavbar";
import ChordTraining from "./ChordTraining";
import GetInspired from "./GetInspired";
import { UserContext } from '../context/UserContextProvider';
import { Button } from "@mui/material";

const defChordParams = {
    interval: 5000,
    duration: "4n",
    totalGameTime: 60000
}

function Exercises() {
    const { user, handleLogout } = useContext(UserContext);
    const [showLeaderboard, setShowLeaderboard] = useState(false)
    const [chordParams, setChordParams] = useState(defChordParams)
    const [useInversions, setUseInversions] = useState(false)
    const [playAllKeys, setPlayAllKeys] = useState(true)
    const [inChordEx, setInChordEx] = useState(true)


    return ( 
        <>
            <ExercisesNavbar
                chordParams={chordParams} 
                setChordParams={setChordParams}
                setUseInversions={setUseInversions}
                useInversions={useInversions}
                setPlayAllKeys={setPlayAllKeys}
                playAllKeys={playAllKeys}
                inChordEx={inChordEx}
            />
            <div className="chord-game-container">
                <div className='app-title'>
                    <h1>Ear Sharpener</h1>
                </div>
                {user ? 
                    <div className='welcome-login'> 
                    <h4>Welcome, {user.name}</h4>
                    <Button variant="text" color="error" onClick={() => handleLogout()}>Logout</Button>
                    </div> 
                : null
                }

                <Routes>
                    <Route path="/chord_practice" element={
                        <ChordTraining
                            setShowLeaderboard={setShowLeaderboard}
                            showLeaderboard={showLeaderboard} 
                            chordParams={chordParams} 
                            useInversions={useInversions}
                            setInChordEx={setInChordEx}
                        />
                    }/>
                    <Route path="/pitch_practice" element={
                        <GetInspired
                            user={user}
                            playAllKeys={playAllKeys}
                            setInChordEx={setInChordEx}
                        />
                    }/>
                </Routes>
            </div>
           
        </>
     );
}

export default Exercises;