import { StrictMode, useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client';

export default function App(){

  const [isLights, setIsLights] = useState(false);
  const [isDoor, setIsDoor] = useState(true);
  const [isPurpose, setIsPurpose] = useState("")

  function handleChange(e){
    setIsPurpose(e.target.value);
  }

  const handleSecurityCheck = (e) => {
    e.preventDefault();
    const allowedGuests = ["family", "friend", "ownerWithKey"];

    if(isPurpose.trim() === ""){ 
      alert("please enter a valid reason");
      return;
    }

    if(allowedGuests.includes(isPurpose.trim())){
      alert("A guest has entered the house");
    }else{
      alert(" A stranger has entered the house");
    }
  };

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
        {/*lighst button */}
      <div style={controlBoxStyle}>
        <h3 style={{color : 'white', margin : 0}}>Lights</h3>
        <button style={buttonStyle} 
        onClick={() => setIsLights(!isLights)}>
        {isLights ? 'ON' : 'OFF'}</button>
      </div>
      {/*Doors button */}
      <div style={controlBoxStyle}>
        <h3 style={{color : 'white', margin : 0}}>Doors</h3>
        <button style={buttonStyle} 
        onClick = {() => setIsDoor(!isDoor)}>
        {isDoor ? 'OPEN' : 'CLOSE'}</button>
      </div>
      </div>
      <br />
      <br />
      {/*entry security block*/}
      <div>
        <h2 style={{fontFamily : 'cursive', textAlign : 'center'}}>Entry Authorization</h2>
        <form onSubmit={handleSecurityCheck}>
          <input type="text"
          placeholder='Enter prupose'
          value={isPurpose}
          onChange={handleChange}
           />
           <button type='submit'>Verify Identity</button>
          
        </form>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);