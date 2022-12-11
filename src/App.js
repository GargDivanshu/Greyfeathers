import React from 'react'
import Main from './Main';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path="/*" element={<Main />}/>
      </Routes>
      </header>
    </div>
  );
}

export default App;
