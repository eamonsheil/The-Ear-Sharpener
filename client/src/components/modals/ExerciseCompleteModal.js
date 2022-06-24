import { useEffect, useContext } from "react";
import { Button } from "@mui/material";

import { UserContext } from '../../context/UserContextProvider'



function ExerciseCompleteModal({ userScore, resetGame, chordParams}) {
    const { user } = useContext(UserContext);

    useEffect(() => {
        if (!user) {
            return;
        }
        else {
            const scoreObj = {
                user: user.id,
                score: userScore
            }
        if (chordParams.interval !== 5000
            || chordParams.duration !== "4n"
            || chordParams.totalGameTime !== 60000) {
                return undefined
            }
        else {
        fetch(`/scores/chord_scores`, {
            method: "POST",
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token"),
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(scoreObj)
        })
        .then( res => res.json())
        .then( data => console.log(data))
        .catch( error => console.log(error.message));
        }}
    },[user])
    
    

    return ( 
        <div className="modal-wrapper">
            <div className="modal-content">
                <div>
                    <p>Nice Job!</p>
                </div>
                <div>
                    <p>Final score: {userScore}</p>
                </div>
            <Button variant='contained' onClick={() => resetGame()}>Play again?</Button>
            </div>
            <div className="modal-overlay" onClick={() => resetGame()}/>
        </div>
     );
}

export default ExerciseCompleteModal;