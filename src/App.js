import React from 'react';
import './App.css';
import Toolbar from './Toolbar';
import Canvas from './CanvasPlaceholder';

function App() {

    return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to DoodleMath!
        </p>
      </header>
      <Canvas/>
      <Toolbar/>
      <footer>
          <div style={{fontSize: 10}}>
              Icons made by <a href="https://www.flaticon.com/authors/freepik"                               title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"                                                                   title="Flaticon">www.flaticon.com</a>
          </div>
      </footer>
    </div>
  );
}

export default App;
