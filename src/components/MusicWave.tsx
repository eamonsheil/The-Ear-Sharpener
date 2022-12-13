import { useRef} from 'react';
import { useAnimateSvg } from '../hooks/useAnimateSvg';
import './components.styles.css';

export interface IMusicWaveProps {
  run:boolean;
  setRun: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: () => void;
}



export function MusicWave({run, setRun, handleClick}:IMusicWaveProps) {
  const svg = useRef<SVGSVGElement>(null);
  const animate = useAnimateSvg()

if (run && svg.current) {
  animate(svg.current);
  setRun(false);
}
  
  return (
    <svg
      className='wave-svg'
      max-width="210mm"
      max-height="80mm"
      width="100%"
      height="100%"
      viewBox="0 0 208 80"
      xmlns="http://www.w3.org/2000/svg"
      ref={svg}
      onClick={() => handleClick()}
    >
      <g
        style={{
          display: 'inline',
        }}
      >
        <rect
          className="background"
          style={{
            fill: '#1c1c1c',
            fillOpacity: 0.94,
            strokeWidth: 0.0906325,
          }}
          width={205.774}
          height={76.198}
          x={-207.934}
          y={1.44}
          transform="scale(-1 1)"
          rx={42.715}
        />
        <rect
          className="wave5"
          style={{
            fill: '#4000b8',
            fillOpacity: 1,
            strokeWidth: 0.0208704,
            transition: "all .1s ease-in-out"
          }}
          width={9.799}
          height={25.399}
          x={100.147}
          y={26.839}
          rx={5.458}
        />
        <rect
          className="wave3"
          style={{
            fill: '#4000b8',
            fillOpacity: 1,
            strokeWidth: 0.030244,
            transition: "all .1s ease-in-out"
          }}
          width={9.799}
          height={53.339}
          x={60.952}
          y={12.869}
          rx={5.458}
        />
        <rect
          className="wave4"
          style={{
            fill: '#4000b8',
            fillOpacity: 1,
            strokeWidth: 0.0255609,
            transition: "all .1s ease-in-out"
          }}
          width={9.799}
          height={38.099}
          x={80.55}
          y={20.489}
          rx={5.458}
        />
        <rect
          className="wave6"
          style={{
            fill: '#4000b8',
            fillOpacity: 1,
            strokeWidth: 0.0295152,
            transition: "all .1s ease-in-out"
          }}
          width={9.799}
          height={50.799}
          x={119.745}
          y={14.139}
          rx={5.458}
        />
        <rect
          className="wave7"
          style={{
            fill: '#4000b8',
            fillOpacity: 1,
            strokeWidth: 0.0336524,
            transition: "all .1s ease-in-out"
          }}
          width={9.799}
          height={66.038}
          x={139.342}
          y={6.52}
          rx={5.458}
        />
        <rect
          className="wave9"
          style={{
            fill: '#4000b8',
            fillOpacity: 1,
            strokeWidth: 0.0180742,
            transition: "all .1s ease-in-out"
          }}
          width={9.799}
          height={19.05}
          x={178.589}
          y={30.014}
          rx={5.458}
        />
        <rect
          className="wave8"
          style={{
            fill: '#4000b8',
            fillOpacity: 1,
            strokeWidth: 0.0263991,
            transition: "all .1s ease-in-out"
          }}
          width={9.799}
          height={40.639}
          x={158.94}
          y={19.219}
          rx={5.458}
        />
        <rect
          className="wave1"
          style={{
            fill: '#4000b8',
            fillOpacity: 1,
            strokeWidth: 0.0161662,
            transition: "all .1s ease-in-out"
          }}
          width={9.799}
          height={15.24}
          x={21.757}
          y={31.919}
          rx={5.458}
        />
        <rect
          className="wave2"
          style={{
            fill: '#4000b8',
            fillOpacity: 1,
            strokeWidth: 0.0233337,
            transition: "all .1s ease-in-out"
          }}
          width={9.799}
          height={31.749}
          x={41.355}
          y={23.664}
          rx={5.458}
        />
      </g>
    </svg>
  );
}
