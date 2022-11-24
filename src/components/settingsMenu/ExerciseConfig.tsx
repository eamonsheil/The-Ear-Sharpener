import { useRef, useState } from 'react';
import { MenuItem } from './MenuItem';

export interface IExerciseConfigProps {
    configObj?:ExerciseConfig;
}

const defConfig:ExerciseConfig = {
    ansOptions: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'],
    isChromatic: true,
    useInversions: true
  }

export function ExerciseConfig (props: IExerciseConfigProps) {
  const menu = useRef<HTMLDivElement>(null)
  return (
    <div className='config-container'>
        <button onClick={() => {
            if (!menu.current) {
              return;
            }
              // makes config-menu visible depending on the current 'display' prop 
            if (!menu.current.style.display) {
              menu.current.style.display = "flex";
            } else {
              menu.current.style.display = ""
            }
            }          
          }>
            Toggle View Menu
        </button>

        <div className='config-menu' ref={menu}>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
        </div>
        
    </div>
  );
}
