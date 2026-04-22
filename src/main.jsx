import { StrictMode, useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client';

export default function App(){

  const [isLights, setIsLights] = useState(false);
  const [isDoor, setIsDoor] = useState(true);

    useEffect(() => {
      if (isDoor === false) {
        alert("WARNING : THE DOOR IS OPEN!");
      }
    }, [isDoor]);

  const houseStyle = {
      backgroundColor : isLights ? 'blue' : 'orange',
      color : isLights ? 'orange' : 'black',
      transition : '0.5s',
      padding : '20px',
      borderRadius : '20px',
      minHeight : '100vh',
      margin : 0,
      boxSizing : 'border-box',
      fontFamily: 'sans-serif'
  };

  const controlBoxStyle = {
    backgroundColor : 'grey',
    borderRadius : '20px',
    padding : '15px',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    gap : '10px',
    width : '150px'
  };

  const buttonStyle = {
      color : 'white',
      padding : '7px',
      margin : '0.5px',
      backgroundColor : 'black',
      alignItems : 'center',
      borderRadius : '50px',
      border : 'none'
  };

  return (
    //heading style
    <div style={houseStyle}>
      <h1 style={{backgroundColor : 'red',
         borderRadius : '50px',
         width : '300px',
         textAlign : 'center',
         margin : ' 20px auto'}}>
          My Smart Home
          </h1><br />
      
      {/* here starts the button declaration*/}
      <div style={{
        display : 'flex',
        justifyContent : 'center',
        gap : '30px',
        flexWrap : 'wrap'
      }}>

      <div style={controlBoxStyle}>
        <h3 style={{color : 'white', margin : 0}}>Lights</h3>
        <button style={buttonStyle} 
        onClick={() => setIsLights(!isLights)}>
        {isLights ? 'ON' : 'OFF'}</button>
      </div>

      <div style={controlBoxStyle}>
        <h3 style={{color : 'white', margin : 0}}>Doors</h3>
        <button style={buttonStyle} 
        onClick = {() => setIsDoor(!isDoor)}>
        {isDoor ? 'OPEN' : 'CLOSE'}</button>
      </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);