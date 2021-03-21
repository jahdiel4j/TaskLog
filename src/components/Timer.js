import React, { useState, useEffect } from 'react'
import './Timer.css'


const Timer = ({ updateData }) => {

    const [buttonLabel, setLabel] = useState('START');
    const [seconds, setSeconds] = useState(0);
    const [started, setStarted] = useState(false);
    const [pressed, setPressed] = useState(false);
    


 useEffect(() => {
     const interval = setInterval(() => { //This runs setSeconds once every second

        if(started === true){ //Controls if the time increments
        setSeconds(seconds => seconds + 1);
        }

     }, 1000);
     return () => clearInterval(interval);
   
   },[started]);


   const handleStartClick = () => {
      
    setStarted(!started); //Start or stop the time
      
    setPressed(true); //This is so the LOG button will show up
       if(started===true)
       {
        setLabel('RESUME');
       }
       else if(started===false)
       {
        setLabel('PAUSE');
       }
       
 }

 const handleLogClick = () => { //Reset everything
    updateData(seconds);
    setStarted(false);
    setLabel('START');
    setPressed(false);
    //console.log(seconds);
    setSeconds(0);
    //Saves the "seconds"
 }

 const otherButtons = () => { //If the start button is pressed, show the LOG button
    if(pressed === true)
      {
        return <button type="button" class="timerButton2" onClick = {handleLogClick}>LOG</button>
      }
 }



const getSeconds = () => { 
    return ('0' + seconds % 60).slice(-2);
}

const getMinutes = () => {
    return Math.floor(seconds / 60);
}

    
    return (
             <div className="timer">
             <h1>{getMinutes()}:{getSeconds()}</h1>
             <button type="button" class="timerButton" onClick = {handleStartClick} aria-pressed="false">{buttonLabel}</button>
                {otherButtons()}
             </div>
    )
}

export default Timer