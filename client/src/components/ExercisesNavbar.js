import { useState } from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import HomeIcon from '@mui/icons-material/Home';




function ExercisesNavbar({

  chordParams, 
  setChordParams, 

  setUseInversions, 
  useInversions,

  setPlayAllKeys,
  playAllKeys,

  inChordEx}) {
    
 return (
   <div className="navbar">
     <nav >      
      <ul className="navbar-menu">
        <div className='navbar-nav'>
          <a href="/" className="icon-button">
            <HomeIcon/>
          </a>
          <a href="/exercises/pitch_practice" className="icon-button">
            Pitch Exercise
          </a>
          <a href="/exercises/chord_practice" className="icon-button">
            Chord Exercise
          </a>
          <NavItem>
            <DropDownMenu 
              chordParams={chordParams} 
              setChordParams={setChordParams} 
              setUseInversions={setUseInversions} 
              useInversions={useInversions}
              setPlayAllKeys={setPlayAllKeys}
              playAllKeys={playAllKeys}
              inChordEx={inChordEx}
              />
          </NavItem>
        </div>
      </ul>       
     </nav>
   </div>
 );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        <SettingsIcon fontSize="medium" />
      </a>
      {open && props.children}
    </li>
  );
}


function DropDownMenu({
  chordParams, 
  setChordParams, 
  setUseInversions, 
  useInversions, 
  setPlayAllKeys,
  playAllKeys,
  inChordEx
  }) {
  
  function DropDownItem(props) {
  
    function handleChange(e) {
    setChordParams({...chordParams, [e.target.name]:e.target.value})
  }
  
    function infinityMode() {
      setChordParams({...chordParams, totalGameTime: Infinity})
    }
    return (
      <> 
      {inChordEx ? 
      <>
      <div >
        <h3>Chord Exercise Settings:</h3>
      </div>
      <div className="menu-item">
        <a href="#" onClick={() => infinityMode()}>
          {'No Time Limits'}
        </a>
      </div>
      <div className="menu-item radio-select">
        {/* <p>Practice Length: </p> */}
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Total Game Time</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={chordParams.totalGameTime}
            onChange={(e) =>handleChange(e)}
          >
          <hr/>
            <FormControlLabel value="10000" name="totalGameTime" control={<Radio />} label="10 Seconds" />
            <FormControlLabel value="60000" name="totalGameTime" control={<Radio />} label="1 minute" />
            <FormControlLabel value="90000" name="totalGameTime" control={<Radio />} label="1 minute 30 seconds" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="menu-item radio-select">
        {/* <p>Interval: </p> */}
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Time to Answer</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={chordParams.interval}
            onChange={(e) =>handleChange(e)}
          >
          <hr/>
            <FormControlLabel value="2000" name="interval" control={<Radio />} label="2 Seconds" />
            <FormControlLabel value="3000" name="interval" control={<Radio />} label="3 Seconds" />
            <FormControlLabel value="5000" name="interval" control={<Radio />} label="5 Seconds" />
          </RadioGroup>
        </FormControl>
      </div>

      <div className="menu-item radio-select">
        {/* <p>Note Duration: </p> */}
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Note Duration</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={chordParams.duration}
            onChange={(e) =>handleChange(e)}
          >
          <hr/>
            <FormControlLabel value="8n" name="duration" control={<Radio />} label="Short" />
            <FormControlLabel value="4n" name="duration" control={<Radio />} label="Medium" />
            <FormControlLabel value="2n" name="duration" control={<Radio />} label="Long" />
          </RadioGroup>
        </FormControl>
      </div> 
      <div className="menu-item">
        <a href="#" onClick={() => setUseInversions(prev => !prev)}>
          {useInversions ? "Root Position Only" : "Include Inversions"}
        </a>
      </div>
      </>:
        <>
        <h3>Pitch Exercise Settings</h3>
        <div className="menu-item">
          <a href="#" onClick={() => setPlayAllKeys(prev => !prev)}>
            {playAllKeys ? "Set key center: C Major": "Set key center: random"}
          </a>
        </div>
        </>
        }
      </>

      
    )
  }

  return (
    <div className="dropdown">
      <DropDownItem/>

    </div>
  )

}

export default ExercisesNavbar;