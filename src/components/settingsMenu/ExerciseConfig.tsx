import { useRef, useState } from 'react';
import { ConfigMenu } from './ConfigMenu';

export interface IExerciseConfigProps {
    configObj?:ExerciseConfig;
}

const defConfig:ExerciseConfig = {
    ansOptions: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'],
    isChromatic: true,
    useInversions: true
  }

export function ExerciseConfig (props: IExerciseConfigProps) {
  return (
    
    <div className='config-container'>
        <button onClick={() => {
              const menu = document.querySelector(".config-menu") as HTMLDivElement;
              if (menu.style.display === "none") {
                menu.style.display = "flex"
              } else {
                menu.style.display = "none"
              }
            }
          }>
            Toggle View Menu
        </button>
        <ConfigMenu/>
    </div>
  );
}
