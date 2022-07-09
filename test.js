import { useState } from 'react'

const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"]

function newNotes(arr) {
    const newarr = arr.map(element => {
        const rand = Math.floor(Math.random() * 4) + 1
        return Array(rand).fill(element)
    });
    return newarr.flat()
}
const [count, setCount] = useState(0)

function randomizenotes(arr, rand) {
    if (count === 0){
        const extranotes = newNotes(notes);
        setCount(extranotes.length);
    }
    else {


    }
}


