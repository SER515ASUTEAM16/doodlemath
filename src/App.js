import React from 'react';
import './App.css';
import LowerGrade from "./blocks/LowerGrade";
import Grade912 from "./Grade912";
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Welcome to DoodleMath!</p>
            </header>
            <Router>
                <Route path="/grade1-5" component={LowerGrade}/>
                <Route path="/grade9-12" component={Grade912}/>

                <Link to="/grade1-5">
                    <button>Lower Grade</button>
                </Link>


                <Link to="/grade9-12">
                    <button>Higher Grade</button>
                </Link>

            </Router>

            <footer>
                <div style={{fontSize: 9}}>
                    Icons made by <a href="https://www.flaticon.com/authors/freepik"
                                     title="Freepik">Freepik</a> from <a
                    href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                </div>
            </footer>

        </div>
    );
}

export default App;
