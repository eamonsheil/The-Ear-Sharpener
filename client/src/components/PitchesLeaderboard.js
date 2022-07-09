import { useState, useEffect } from "react";



function PitchesLeaderboard() {
    const [topScores, setTopScores] = useState([]);

    useEffect(() => {
        fetch(`/api/scores/pitch_scores`)
        .then( res => res.json())
        .then( data => setTopScores(data))
    },[])
    

    return ( 
        <div className="leaderboard-container">
            <div>
                <h2>Best Correct Answer Streaks</h2>
            </div>
            <div className="leaderboard">
                <ul className="leaderboard-list">
                    {topScores.map((score) => 
                        <>
                        <li key={score.date} className="leaderboard-entry">
                            <span className="leaderboard-data">{score.name[0].toUpperCase() + score.name.substr(1)} </span>
                            <span className="leaderboard-data">{score.correctAnswerStreak} </span>
                            
                        </li>
                        <hr style={{ "width": "80%",  "margin": "0 10%", "border": "0", "border-bottom": "1px dashed"}}/>
                        </>
                    )}
                </ul>
            </div>
        </div>
     );
}

export default PitchesLeaderboard;