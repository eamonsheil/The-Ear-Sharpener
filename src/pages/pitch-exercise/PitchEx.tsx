import * as Tone from 'tone';
import { useMemo, useState } from 'react';
import { Piano } from '../../components/Piano';

export interface IPitchExProps {
  placeholder?: undefined;
}

export function PitchEx() {
  const piano = useMemo(() => {
    return new Tone.Sampler({
      urls: {
        C2: 'C2.mp3',
        'D#2': 'Ds2.mp3',
        'F#2': 'Fs2.mp3',
        A2: 'A2.mp3',
        C3: 'C3.mp3',
        'D#3': 'Ds3.mp3',
        'F#3': 'Fs3.mp3',
        A3: 'A3.mp3',
        C4: 'C4.mp3',
        'D#4': 'Ds4.mp3',
        'F#4': 'Fs4.mp3',
        A4: 'A4.mp3',
        C5: 'C5.mp3',
        'D#5': 'Ds5.mp3',
        'F#5': 'Fs5.mp3',
        A5: 'A5.mp3',
        C6: 'C6.mp3',
        'D#6': 'Ds6.mp3',
        'F#6': 'Fs6.mp3',
        A6: 'A6.mp3',
      },
      baseUrl: 'https://tonejs.github.io/audio/salamander/',
    }).toDestination();
  }, []);

  // const selectNote = () =>

  return <div>{/* <Piano selectNote={selectNote} /> */}</div>;
}
