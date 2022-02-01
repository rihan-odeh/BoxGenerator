
import BoxGenerator from './components/BoxGenerator';
import LiftingState from './components/LiftingState';
import MessageDisplay from './components/MessageDisplay';
import { useState } from 'react';
import './App.css';

function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messages");
      
  const youveGotMail = ( newMessage ) => {
    setCurrentMsg( newMessage );
}

  return (
    <div className="App">
      <BoxGenerator/>
      <LiftingState onNewMessage={ youveGotMail }/>
      <MessageDisplay message={currentMsg}/>
   

    </div>
  );
}

export default App;
