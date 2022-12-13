import "./home.styles.css";

export interface ITrebleClefProps  {
    placeholder?: any
}

export function TrebleClef() {

  
    return (
      <svg
        className="trebleClef-svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        // width="161mm"
        // height="55mm"
        version="1.1"
        viewBox="0 0 210 55"
      >
        <defs>
          <linearGradient id="linearGradient12513">
            <stop offset="0" stopColor="#bdb78e" stopOpacity="1"></stop>
            <stop offset="1" stopColor="#d9d4be" stopOpacity="0"></stop>
          </linearGradient>
          <linearGradient id="linearGradient8746">
            <stop offset="0" stopColor="#000" stopOpacity="1"></stop>
            <stop offset="0.877" stopColor="#000" stopOpacity="0"></stop>
          </linearGradient>
          <linearGradient id="linearGradient44621">
            <stop offset="0" stopColor="#000" stopOpacity="1"></stop>
          </linearGradient>
          <filter
            width="1"
            height="1"
            x="0"
            y="0"
            colorInterpolationFilters="sRGB"
          >
            <feComposite
              in="BackgroundImage"
              in2="SourceGraphic"
              operator="arithmetic"
              result="composite1"
            ></feComposite>
          </filter>
          <linearGradient id="linearGradient3238">
            <stop offset="0" stopColor="#000" stopOpacity="1"></stop>
            <stop offset="1" stopColor="#000" stopOpacity="0"></stop>
          </linearGradient>
          <linearGradient>
            <stop offset="0" stopColor="#d9d4be" stopOpacity="1"></stop>
            <stop offset="1" stopColor="#1f1c12" stopOpacity="0"></stop>
          </linearGradient>
          <linearGradient
            id="linearGradient3240"
            x1="-154.686"
            x2="525.214"
            y1="26.62"
            y2="24.462"
            gradientTransform="matrix(1 0 0 .411 0 10.412)"
            gradientUnits="userSpaceOnUse"
            xlinkHref="#linearGradient3238"
          ></linearGradient>
          <linearGradient
            id="linearGradient3275"
            x1="-154.686"
            x2="525.214"
            y1="26.62"
            y2="24.462"
            gradientTransform="matrix(1 0 0 .411 0 18.632)"
            gradientUnits="userSpaceOnUse"
            xlinkHref="#linearGradient3238"
          ></linearGradient>
          <linearGradient
            id="linearGradient3289"
            x1="-154.686"
            x2="525.214"
            y1="26.62"
            y2="24.462"
            gradientTransform="matrix(1 0 0 .411 0 26.852)"
            gradientUnits="userSpaceOnUse"
            xlinkHref="#linearGradient3238"
          ></linearGradient>
          <linearGradient
            id="linearGradient3317"
            x1="-154.686"
            x2="525.214"
            y1="26.62"
            y2="24.462"
            gradientTransform="matrix(1 0 0 .411 0 2.192)"
            gradientUnits="userSpaceOnUse"
            xlinkHref="#linearGradient8746"
          ></linearGradient>
          <linearGradient
            id="linearGradient44623"
            x1="27.507"
            x2="59.26"
            y1="60.47"
            y2="60.47"
            gradientUnits="userSpaceOnUse"
            xlinkHref="#linearGradient44621"
          ></linearGradient>
          <linearGradient
            id="linearGradient8750"
            x1="-154.686"
            x2="525.214"
            y1="26.62"
            y2="24.462"
            gradientTransform="matrix(1 0 0 .411 0 35.072)"
            gradientUnits="userSpaceOnUse"
            xlinkHref="#linearGradient3238"
          ></linearGradient>
          <radialGradient
            id="radialGradient12515"
            cx="72.992"
            cy="39.185"
            r="105.094"
            fx="72.992"
            fy="39.185"
            gradientTransform="matrix(2.09531 .00527 -.00148 .5889 -124.901 11.258)"
            gradientUnits="userSpaceOnUse"
            xlinkHref="#linearGradient12513"
          ></radialGradient>
        </defs>

        <g>
          <path
            fill="url(#radialGradient12515)"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeOpacity="1"
            strokeWidth="0.187"
            d="M0 0H210V55.896H0z"
          ></path>
          <path
            fill="url(#linearGradient3240)"
            fillOpacity="1"
            fillRule="nonzero"
            strokeWidth="0.24"
            d="M0 20.687H210V21.509H0z"
          ></path>
          <path
            fill="url(#linearGradient3289)"
            fillOpacity="1"
            fillRule="nonzero"
            strokeWidth="0.24"
            d="M0 37.127H210V37.949000000000005H0z"
          ></path>
          <path
            fill="url(#linearGradient3275)"
            fillOpacity="1"
            fillRule="nonzero"
            strokeWidth="0.24"
            d="M0 28.907H210V29.729H0z"
          ></path>
          <path
            fill="url(#linearGradient8750)"
            fillOpacity="1"
            fillRule="nonzero"
            strokeWidth="0.24"
            d="M0 45.347H210V46.169000000000004H0z"
          ></path>
          <path
            fill="url(#linearGradient3317)"
            fillOpacity="1"
            fillRule="nonzero"
            strokeWidth="0.24"
            d="M0 12.467H210V13.289H0z"
          ></path>
          <path
            fill="url(#linearGradient44623)"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="1"
            strokeWidth="0.2"
            d="M41.046 96.937c.062.117-1.288.698-1.73 2.722-.182.824-.123 1.961.51 2.95.474.748 1.321 1.432 2.361 1.652a3.673 3.673 0 002.75-.512c.485-.316.909-.777 1.245-1.328.315-.518.54-1.12.688-1.777.288-1.238.231-2.56.14-4.104-.639-9.794-2.556-18.344-5.7-31.897-1.332-5.725-2.819-12.29-4.654-18.464-1.526-5.112-3.567-10.847-4.3-16.765-.28-2.183-.349-4.54.18-6.914.52-2.369 1.798-4.686 3.897-6.295a7.225 7.225 0 013.239-1.396 6.724 6.724 0 014.34.891 8.227 8.227 0 012.931 3.017c1.318 2.404 1.606 5.054 1.452 7.465-.143 2.907-.711 5.727-1.476 8.452a65.932 65.932 0 01-.79 2.597c-2.314 7.166-5.485 13.972-9.17 20.363-1.98 3.448-3.999 6.588-5.408 9.964-1.413 3.436-2.231 7.029-1.655 10.368.566 3.51 2.639 6.731 5.45 8.633 3.424 2.346 8.01 2.74 11.628 1.345 3.977-1.51 6.901-5.116 7.823-8.859.572-2.316.466-4.728-.274-6.802-.802-2.258-2.332-4.143-4.17-5.285-1.85-1.157-4.014-1.595-5.949-1.367-2.225.259-4.175 1.368-5.451 2.796-1.757 1.956-2.3 4.475-2.074 6.439.36 3.208 2.49 5.148 3.635 5.923.843.571 1.436.809 1.616.945.27.205-.428.285-1.912-.425-1.498-.718-3.959-2.576-4.622-6.252-.405-2.281.035-5.264 2.055-7.74 1.474-1.798 3.748-3.244 6.482-3.665 2.377-.362 5.026.064 7.372 1.433 2.32 1.36 4.262 3.583 5.317 6.347.965 2.532 1.18 5.434.541 8.258-1.044 4.604-4.409 8.963-9.325 10.955-4.5 1.8-10.026 1.427-14.421-1.468-3.566-2.372-6.153-6.262-6.914-10.677-.68-4.163.168-8.378 1.77-12.183 1.548-3.727 3.613-7.013 5.535-10.374 2.506-4.398 4.768-8.979 6.665-13.722a93.115 93.115 0 002.17-6.01c1.082-3.387 1.964-6.775 2.115-10.15.057-2.092-.072-4.117-.984-5.602-.437-.746-1.015-1.395-1.69-1.78-.667-.382-1.453-.583-2.127-.47-.56.06-1.152.358-1.714.753-1.336.932-2.21 2.6-2.654 4.34-.447 1.788-.374 3.77-.164 5.77.592 5.423 2.543 11.031 4.022 16.28 1.797 6.35 3.187 12.96 4.413 18.719 2.876 13.477 4.616 22.546 4.886 32.42.052 1.58.025 3.104-.373 4.617a7.544 7.544 0 01-1 2.247 5.69 5.69 0 01-1.827 1.748 5.056 5.056 0 01-3.89.502 4.931 4.931 0 01-2.99-2.405 4.744 4.744 0 01-.307-3.717c.568-1.652 1.673-2.252 2.145-2.445"
            className="UnoptimicedTransforms"
            paintOrder="fill markers stroke"
            transform="matrix(.67994 -.01049 .00879 .56966 -11.893 -6.246)"
          ></path>
        </g>
      </svg>
    );
}