import React from 'react';
import './App.css';
import CanvasPlaceholder from "./CanvasPlaceholder";
import Blocks from "./blocks/Blocks";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Welcome to DoodleMath!</p>
            </header>
            <Blocks/>
            <footer>
                <div style={{fontSize: 9}}>
                    Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a
                    href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                </div>
            </footer>
        </div>
    );
}

export default App;
