import {useRef} from 'react';
import './components.styles.css';

export interface IMusicWaveProps {
  placeholder?:string;
}


export function MusicWave() {
  const svg = useRef<SVGSVGElement>(null);


  function animate() { 
    let i = 1;
    if (!svg.current) {
      return
    }

    // creates an animation in which each rect element on the svg  
    // changes color and grows
    function loop() {


      setTimeout(() => {
        // debugger
        const curr = svg.current?.querySelector(`.wave${i}`) as SVGRectElement;
        const last = svg.current?.querySelector(`.wave${i - 1}`) as SVGRectElement;
        const last1 = svg.current?.querySelector(`.wave${i - 2}`) as SVGRectElement;
        const last2 = svg.current?.querySelector(`.wave${i - 3}`) as SVGRectElement;
        if (curr) {
          curr.style.fill = "#200177"
          curr.style.transform = "scale(1.05, 1.05)"
        }
        if (last) {
          last.style.fill = '#1b00a3ff'
          last.style.transform = 'none'
        }
        if (last1) {
          last1.style.fill = '##22018eff'
          // last1.style.transform = "scale(1.1)"
        }
        if (last2) {
          last2.style.fill = '#4000b8'
          // last2.style.transform = "scale(1.1)"
        }
        i++;
        if (i<=12) {
          loop()
        }
      }, 80);
    }
    loop();
  }

  return (
    <div>
      <button onClick={() => animate()}>animate</button>
    <svg
      className='wave-svg'
      max-width="210mm"
      max-height="80mm"
      width="auto"
      height="auto"
      viewBox="0 0 208 80"
      xmlns="http://www.w3.org/2000/svg"
      ref={svg}
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
    </div>
  );
}
