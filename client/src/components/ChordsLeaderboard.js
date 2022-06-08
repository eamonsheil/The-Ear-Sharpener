import { useState, useEffect } from "react";



function ChordsLeaderboard() {
    const [topScores, setTopScores] = useState([]);

    useEffect(() => {
        fetch(`/api/scores/chord_scores`)
        .then( res => res.json())
        .then( data => setTopScores(data))
    },[])
    

    return ( 
        <div className="leaderboard-container">
            <div>
                <h2>Leaderboard page</h2>
            </div>
            <div className="leaderboard">
                <ul className="leaderboard-list">
                    {topScores.map((score) => 
                        <>
                            <li key={score.date} className="leaderboard-entry">
                                <span className="leaderboard-data">{score.name} </span>
                                <span className="leaderboard-data">{score.score} </span>
                                
                            </li>
                            <hr style={{ "width": "40%",  "margin": "0 0 0 50%", "border": "0", "borderBottom": "1px dashed"}}/>
                        </>
                    )}
                </ul>
            </div>
        </div>
     );
}

export default ChordsLeaderboard;