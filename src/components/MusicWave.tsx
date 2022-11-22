import * as React from 'react';

export interface IMusicWaveProps {
}

export function MusicWave (props: IMusicWaveProps) {
  return (
            <svg
    width="210mm"
    height="80mm"
    viewBox="0 0 208 80"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      style={{
        display: "inline",
      }}
    >
      <rect
        className='wave'
        style={{
          fill: "#1c1c1c",
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
      className='wave'
        style={{
          fill: "#4000b8",
          fillOpacity: 1,
          strokeWidth: 0.0208704,
        }}
        width={9.799}
        height={25.399}
        x={100.147}
        y={26.839}
        rx={5.458}
      />
      <rect
      className='wave'
        style={{
          fill: "#4000b8",
          fillOpacity: 1,
          strokeWidth: 0.030244,
        }}
        width={9.799}
        height={53.339}
        x={60.952}
        y={12.869}
        rx={5.458}
      />
      <rect
      className='wave'
        style={{
          fill: "#4000b8",
          fillOpacity: 1,
          strokeWidth: 0.0255609,
        }}
        width={9.799}
        height={38.099}
        x={80.55}
        y={20.489}
        rx={5.458}
      />
      <rect
      className='wave'
        style={{
          fill: "#4000b8",
          fillOpacity: 1,
          strokeWidth: 0.0295152,
        }}
        width={9.799}
        height={50.799}
        x={119.745}
        y={14.139}
        rx={5.458}
      />
      <rect
      className='wave'
        style={{
          fill: "#4000b8",
          fillOpacity: 1,
          strokeWidth: 0.0336524,
        }}
        width={9.799}
        height={66.038}
        x={139.342}
        y={6.52}
        rx={5.458}
      />
      <rect
      className='wave'
        style={{
          fill: "#4000b8",
          fillOpacity: 1,
          strokeWidth: 0.0180742,
        }}
        width={9.799}
        height={19.05}
        x={178.589}
        y={30.014}
        rx={5.458}
      />
      <rect
      className='wave'
        style={{
          fill: "#4000b8",
          fillOpacity: 1,
          strokeWidth: 0.0263991,
        }}
        width={9.799}
        height={40.639}
        x={158.94}
        y={19.219}
        rx={5.458}
      />
      <rect
      className='wave'
        style={{
          fill: "#4000b8",
          fillOpacity: 1,
          strokeWidth: 0.0161662,
        }}
        width={9.799}
        height={15.24}
        x={21.757}
        y={31.919}
        rx={5.458}
      />
      <rect
      className='wave'
        style={{
          fill: "#4000b8",
          fillOpacity: 1,
          strokeWidth: 0.0233337,
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
