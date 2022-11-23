

export function useAnimateSvg() {
    return function animate(svg: SVGSVGElement) {
        let i = 1;
        if (!svg) {
            return
        }

        // creates an animation in which each rect element on the svg  
        // changes color and grows
        function loop() {
            setTimeout(() => {
                // debugger
                const curr = svg.querySelector(`.wave${i}`) as SVGRectElement;
                const last = svg.querySelector(`.wave${i - 1}`) as SVGRectElement;
                const last1 = svg.querySelector(`.wave${i - 2}`) as SVGRectElement;
                const last2 = svg.querySelector(`.wave${i - 3}`) as SVGRectElement;
                if (curr) {
                    curr.style.fill = "#200177"
                    curr.style.transform = "scale(1.04, 1.04)"
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
                if (i <= 12) {
                    loop()
                }
            }, 45);
        }
        loop();
    }
}