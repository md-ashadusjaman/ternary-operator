import React, { useState } from 'react';
import './App.css';
import User from './Components/User/User';








function App() {
  const [familiar, setFamiliar] = useState(true);

  return (
    <div className="App">
      <h2>Is Familiar: {familiar.toString()}</h2>
      <button onClick={()=>setFamiliar(!familiar)}>Toggle</button>
      <User familiar={familiar}></User>
 

    </div>
  );
}

export default App;
