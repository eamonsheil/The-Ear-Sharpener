import * as React from 'react';
import * as Tone from 'tone';
import { usePiano } from '../hooks/usePiano';

export interface IPianoProps {
    // handleClick(e)?: (e: SVGElement) => void
    selectNote?: () => void
}

export function Piano() {
    // load piano samples
    const piano = usePiano()
    function handleClick(e:any) {
        let { target } = e;
        Tone.start()
        console.log(target.className.baseVal)
        // target = target as SVGPathElement    
        // target.setAttribute('class', 'key-selected');
        // e.target.removeAttribute('class', 'undefined');
        // const note = Tone.Frequency(e.target.id)
        piano.triggerAttackRelease(target.className.baseVal, '4n')
        
        // console.log(e.dataset.pitch)
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 4346.4 524.22"
        >
            <g
                className='piano'
                stroke="#000" transform="translate(-.156 -526.12)">
                <path
                    className='C1'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.065"
                    d="M168.15 527.93h45.723v345.34H248.3v172.13l-6.472 3.736h-67.223l-6.862-3.962z"
                ></path>
                <path
                    className='C#1'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.065"
                    d="M221.54 531.97v334.34h42.601V532.16z"
                ></path>
                <path
                    className='D1'
                    fill="#fff"
                    onClick={(e) => handleClick(e)}
                    strokeWidth="1.065"
                    d="M269.66 527.41v345.75h-18.257v171.92l7.561 4.365h65.85l6.904-3.986V872.97h-17.745V527.41z"
                ></path>
                <path
                    className='D#1'
                    fill="#000"
                    onClick={(e) => handleClick(e)}
                    strokeWidth="1.065"
                    d="M321.25 531.42v334.34h42.601V531.61z"
                ></path>
                <path
                    className='E1'
                    fill="#fff"
                    onClick={(e) => handleClick(e)}
                    strokeWidth="1.065"
                    d="M369.87 527.41V873h-34.427v172.13l7.744 4.471H408.6l7.414-4.28v-517.91z"
                ></path>
                <path
                    className='F1'
                    fill="#fff"
                    onClick={(e) => handleClick(e)}
                    strokeWidth="1.065"
                    d="M419.63 527.41v517.32l8.35 4.82h65.345l6.812-3.932v-172.35h-37.34v-345.86z"
                ></path>
                <path
                    className='F#1'
                    fill="#000"
                    onClick={(e) => handleClick(e)}
                    strokeWidth="1.065"
                    d="M467.99 531.42v334.34h42.601V531.61z"
                ></path>
                <path
                    className='G#1'
                    fill="#000"
                    onClick={(e) => handleClick(e)}
                    strokeWidth="1.065"
                    d="M563.74 531.42v334.34h42.601V531.61z"
                ></path>
                <path
                    className='A#1'
                    fill="#000"
                    onClick={(e) => handleClick(e)}
                    strokeWidth="1.065"
                    d="M659.49 531.42v334.34h42.601V531.61z"
                ></path>
                <path
                    className='G1'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.065"
                    d="M515.65 527.41v345.46h-11.834v172.4l6.821 3.938h66.201l6.694-3.865v-172.48H558.55v-345.46z"
                ></path>
                <path
                    className='A1'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.065"
                    d="M611.53 527.41V873h-23.534v172l7.872 4.545h65.688l7.085-4.09v-172.72H654.43v-345.32z"
                ></path>
                <path
                    className='B1'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.065"
                    d="M707.15 527.41V873h-36.175v172.4l7.484 4.321h65.808l7.232-4.175v-518.14z"
                ></path>
                <path
                    className='A#0'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.065"
                    d="M72.189 531.24v334.34h42.601V531.43z"
                ></path>
                <path
                    className='A0'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.065"
                    d="M.74 527.29L.7 1044.81l7.872 4.545h65.688l7.085-4.09.47-172.66H67.602v-345.32z"
                ></path>
                <path
                    className='B0'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.065"
                    d="M119.85 527.23v345.59H83.675v172.4l7.484 4.321h65.807l7.233-4.176v-518.14z"
                ></path>
                <path
                    className='C2'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.065"
                    d="M755.1 527.72h45.723v345.34h34.427v172.13l-6.472 3.736h-67.223l-6.862-3.962z"
                ></path>
                <path
                    className='C#2'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.065"
                    d="M808.49 531.77v334.34h42.601V531.96z"
                ></path>
                <path
                    className='D2'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.065"
                    d="M856.61 527.21v345.75h-18.257v171.92l7.561 4.365h65.85l6.904-3.986V872.77h-17.745V527.21z"
                ></path>
                <path
                    className='D#2'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.065"
                    d="M908.19 531.22v334.34h42.601V531.41z"
                ></path>
                <path
                    className='E2'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.065"
                    d="M956.82 527.21V872.8h-34.427v172.13l7.744 4.471h65.412l7.414-4.28v-517.91z"
                ></path>
                <path
                    className='F2'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.065"
                    d="M1006.6 527.21v517.32l8.35 4.82h65.345l6.812-3.932v-172.35h-37.34v-345.86z"
                ></path>
                <path
                    className='F#2'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.065"
                    d="M1054.9 531.22v334.34h42.601V531.41z"
                ></path>
                <path
                    className='G#2'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.065"
                    d="M1150.7 531.22v334.34h42.601V531.41z"
                ></path>
                <path
                    className='A#2'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.065"
                    d="M1246.4 531.22v334.34h42.601V531.41z"
                ></path>
                <path
                    className='G2'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.065"
                    d="M1102.6 527.21v345.46h-11.834v172.4l6.821 3.938h66.201l6.694-3.865v-172.48H1145.5v-345.46z"
                ></path>
                <path
                    className='A2'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.065"
                    d="M1198.5 527.21V872.8h-23.534v172l7.872 4.545h65.688l7.085-4.09v-172.72h-14.212v-345.32z"
                ></path>
                <path
                    className='B2'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.065"
                    d="M1294.1 527.21V872.8h-36.175v172.4l7.485 4.321h65.806l7.232-4.176v-518.14z"
                ></path>
                <path
                    className='C3'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.065"
                    d="M1341.4 528.03h45.723v345.34h34.427v172.13l-6.472 3.736h-67.223l-6.863-3.962z"
                ></path>
                <path
                    className='C#3'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.065"
                    d="M1394.8 532.08v334.34h42.601V532.27z"
                ></path>
                <path
                    className='D3'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.065"
                    d="M1442.9 527.51v345.75h-18.258v171.92l7.562 4.365h65.849l6.904-3.986v-172.49h-17.745v-345.56z"
                ></path>
                <path
                    className='D#3'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.065"
                    d="M1494.5 531.52v334.34h42.601V531.71z"
                ></path>
                <path
                    className='E3'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.065"
                    d="M1543.1 527.51V873.1h-34.426v172.13l7.744 4.471h65.412l7.414-4.28V527.51z"
                ></path>
                <path
                    className='F3'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.065"
                    d="M1592.8 527.51v517.32l8.35 4.82h65.344l6.813-3.933v-172.35h-37.34v-345.86z"
                ></path>
                <path
                    className='F#3'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.065"
                    d="M1641.2 531.52v334.34h42.601V531.71z"
                ></path>
                <path
                    className='G#3'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.065"
                    d="M1737 531.52v334.34h42.601V531.71z"
                ></path>
                <path
                    className='A#3'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.065"
                    d="M1832.7 531.52v334.34h42.601V531.71z"
                ></path>
                <path
                    className='G3'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.065"
                    d="M1688.9 527.51v345.46h-11.834v172.4l6.821 3.938h66.201l6.694-3.865v-172.48H1731.8v-345.46z"
                ></path>
                <path
                    className='A3'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.065"
                    d="M1784.7 527.51V873.1h-23.534v172l7.872 4.545h65.688l7.085-4.09v-172.72H1827.6v-345.32z"
                ></path>
                <path
                    className='B3'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.065"
                    d="M1880.4 527.51V873.1h-36.175v172.4l7.485 4.32h65.806l7.232-4.174v-518.14z"
                ></path>
                <path
                    className='C4'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.065"
                    d="M1928.3 527.82h45.723v345.34h34.427v172.13l-6.472 3.736h-67.223l-6.863-3.962z"
                ></path>
                <path
                    className='C#4'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.065"
                    d="M1981.7 531.87v334.34h42.601V532.06z"
                ></path>
                <path
                    className='D4'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.065"
                    d="M2029.8 527.31v345.75h-18.258v171.92l7.561 4.365h65.85l6.904-3.986v-172.49h-17.745v-345.56z"
                ></path>
                <path
                    className='D#4'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.065"
                    d="M2081.4 531.32v334.34h42.601V531.51z"
                ></path>
                <path
                    className='E4'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.065"
                    d="M2130 527.31V872.9h-34.427v172.13l7.744 4.471h65.412l7.414-4.28V527.31z"
                ></path>
                <path
                    className='F4'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.065"
                    d="M2179.8 527.31v517.32l8.35 4.82h65.345l6.812-3.932v-172.35h-37.34v-345.86z"
                ></path>
                <path
                    className='F#4'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.065"
                    d="M2228.1 531.32v334.34h42.6V531.51z"
                ></path>
                <path
                    className='G#4'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.061"
                    d="M2323.9 531.3v332.94h42.422V531.49z"
                ></path>
                <path
                    className='A#4'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.061"
                    d="M2419.2 531.3v332.94h42.422V531.49z"
                ></path>
                <path
                    className='G4'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.065"
                    d="M2275.8 527.31v345.46h-11.834v172.4l6.821 3.938h66.201l6.694-3.864v-172.48H2318.7v-345.46z"
                ></path>
                <path
                    className='A4'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.061"
                    d="M2371.5 527.3v344.14h-23.435v171.28l7.84 4.526h65.412l7.055-4.073v-172h-14.153v-343.87z"
                ></path>
                <path
                    className='B4'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.061"
                    d="M2466.7 527.3v344.14h-36.024v171.68l7.453 4.303h65.531l7.202-4.158v-515.97z"
                ></path>
                <path
                    className='C5'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.061"
                    d="M2513.5 527.36h45.531v343.9h34.282v171.41l-6.444 3.72h-66.941l-6.834-3.945z"
                ></path>
                <path
                    className='C#5'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.061"
                    d="M2566.6 531.39v332.94h42.422V531.58z"
                ></path>
                <path
                    className='D5'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.061"
                    d="M2614.5 526.85v344.3h-18.181v171.2l7.53 4.347h65.573l6.876-3.97v-171.77h-17.671v-344.11z"
                ></path>
                <path
                    className='D#5'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.061"
                    d="M2665.9 530.85v332.94h42.422V531.04z"
                ></path>
                <path
                    className='E5'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.061"
                    d="M2714.3 526.85v344.14h-34.282v171.41l7.712 4.453h65.138l7.382-4.263V526.84z"
                ></path>
                <path
                    className='F5'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.061"
                    d="M2763.9 526.85V1042l8.315 4.8h65.07l6.784-3.916v-171.63h-37.182v-344.41z"
                ></path>
                <path
                    className='F#5'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.061"
                    d="M2812 530.85v332.94h42.422V531.04z"
                ></path>
                <path
                    className='G#5'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.061"
                    d="M2907.4 530.85v332.94h42.422V531.04z"
                ></path>
                <path
                    className='A#5'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.061"
                    d="M3002.7 530.85v332.94h42.422V531.04z"
                ></path>
                <path
                    className='G5'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.061"
                    d="M2859.5 526.85v344.01h-11.785v171.68l6.793 3.922h65.924l6.666-3.85v-171.75h-24.88v-344.01z"
                ></path>
                <path
                    className='A5'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.061"
                    d="M2955 526.85v344.14h-23.435v171.28l7.84 4.526h65.412l7.055-4.073v-172h-14.153v-343.87z"
                ></path>
                <path
                    className='B5'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.061"
                    d="M3050.2 526.85v344.14h-36.023v171.68l7.453 4.303h65.531l7.202-4.158v-515.97z"
                ></path>
                <path
                    className='C6'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.061"
                    d="M3097.9 527.16h45.532v343.9h34.282v171.41l-6.445 3.72h-66.94l-6.835-3.945z"
                ></path>
                <path
                    className='C#6'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.061"
                    d="M3151.1 531.19v332.94h42.422V531.38z"
                ></path>
                <path
                    className='D6'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.061"
                    d="M3199 526.65v344.3h-18.181v171.2l7.53 4.347h65.573l6.876-3.97v-171.77h-17.671v-344.11z"
                ></path>
                <path
                    className='D#6'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.061"
                    d="M3250.4 530.64v332.94h42.422V530.83z"
                ></path>
                <path
                    className='E6'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.061"
                    d="M3298.8 526.65v344.14h-34.282v171.41l7.712 4.453h65.138l7.383-4.263V526.64z"
                ></path>
                <path
                    className='F6'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.061"
                    d="M3348.4 526.65v515.15l8.315 4.8h65.07l6.784-3.916v-171.63h-37.182v-344.41z"
                ></path>
                <path
                    className='F#6'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.061"
                    d="M3396.5 530.64v332.94h42.422V530.83z"
                ></path>
                <path
                    className='G#6'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.061"
                    d="M3491.9 530.64v332.94h42.422V530.83z"
                ></path>
                <path
                    className='A#6'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.061"
                    d="M3587.2 530.64v332.94h42.422V530.83z"
                ></path>
                <path
                    className='G6'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.061"
                    d="M3444 526.65v344.01h-11.785v171.68l6.793 3.921h65.924l6.666-3.848v-171.75h-24.88v-344.01z"
                ></path>
                <path
                    className='A6'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.061"
                    d="M3539.5 526.65v344.14h-23.435v171.28l7.84 4.526h65.412l7.055-4.073v-172h-14.153v-343.87z"
                ></path>
                <path
                    className='B6'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.061"
                    d="M3634.7 526.65v344.14h-36.023v171.68l7.453 4.303h65.531l7.203-4.158v-515.97z"
                ></path>
                <path
                    className='C7'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.061"
                    d="M3681.7 527.46h45.531v343.9h34.283v171.41l-6.445 3.72h-66.94l-6.835-3.945z"
                ></path>
                <path
                    className='C#7'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.061"
                    d="M3734.9 531.5v332.94h42.422V531.69z"
                ></path>
                <path
                    className='D7'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.061"
                    d="M3782.8 526.95v344.3h-18.181v171.2l7.53 4.347h65.573l6.876-3.97v-171.77h-17.671v-344.11z"
                ></path>
                <path
                    className='D#7'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.061"
                    d="M3834.2 530.95v332.94h42.422V531.14z"
                ></path>
                <path
                    className='E7'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.061"
                    d="M3882.6 526.95v344.14h-34.282v171.41l7.712 4.452h65.138l7.383-4.262V526.94z"
                ></path>
                <path
                    className='F7'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.061"
                    d="M3932.2 526.95v515.15l8.315 4.8h65.072l6.783-3.916v-171.63h-37.182v-344.41z"
                ></path>
                <path
                    className='F#7'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.061"
                    d="M3980.3 530.95v332.94h42.422V531.14z"
                ></path>
                <path
                    className='G#7'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.061"
                    d="M4075.7 530.95v332.94h42.422V531.14z"
                ></path>
                <path
                    className='A#7'
                    onClick={(e) => handleClick(e)}
                    fill="#000"
                    strokeWidth="1.061"
                    d="M4171 530.95v332.94h42.422V531.14z"
                ></path>
                <path
                    className='G7'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.061"
                    d="M4027.8 526.95v344.01h-11.785v171.68l6.792 3.922h65.924l6.666-3.849v-171.75h-24.878v-344.01z"
                ></path>
                <path
                    className='A7'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.061"
                    d="M4123.3 526.95v344.14h-23.435v171.28l7.84 4.526h65.412l7.055-4.073v-172h-14.153v-343.87z"
                ></path>
                <path
                    className='B7'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.061"
                    d="M4218.5 526.95v344.14h-36.023v171.68l7.453 4.303h65.53l7.203-4.158v-515.97z"
                ></path>
                <path
                    className='C8'
                    onClick={(e) => handleClick(e)}
                    fill="#fff"
                    strokeWidth="1.061"
                    d="M4266.2 527.26h79.814v515.31l-6.445 3.72h-66.94l-6.835-3.945z"
                ></path>
            </g>
        </svg>
    );
}
