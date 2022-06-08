import React from "react";

const ChordsContext = React.createContext();

function ChordsProvider({inversions}) {
    return {
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
}

chords.augmented[Math.floor(Math.random()*chords.augmented.length)]