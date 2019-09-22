import React from 'react';
import './App.css';
import Toolbar from "./Toolbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to DoodleMath!
        </p>
      </header>
      <Toolbar/>
      <footer>
          <div>
              Icons made by <a href="https://www.flaticon.com/authors/freepik"                               title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"                                                                   title="Flaticon">www.flaticon.com</a>
          </div>
      </footer>
    </div>
  );
}

export default App;
