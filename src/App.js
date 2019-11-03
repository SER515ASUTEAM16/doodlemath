import React from 'react';
import './App.css';
import LowerGrade from "./blocks/LowerGrade";
import HigherGrade from "./blocks/HigherGrade"
import Advanced1 from "./blocks/Advanced1";
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import Advanced2 from "./blocks/Advanced2";



function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Welcome to DoodleMath!</p>
            </header>
            <Router>
                <Route path="/grade1-5" component={LowerGrade}/>
                <Route path="/grade9-12" component={HigherGrade}/>
                <Route path="/Advanced1" component={Advanced1}/>
                <Route path="/Advanced2" component = {Advanced2}/>

                <Link to="/grade1-5">
                    <button>Grades 1 to 4</button>
                </Link>
                <Link to="/grade9-12">
                    <button>Grades 5 to 8</button>
                </Link>
                <Link to="/Advanced1">
                    <button>Grades 9 to 12</button>
                </Link>
                <Link to="/Advanced2">
                <button>Advanced 2</button>
            </Link>

            </Router>

        </div>
    );
}

export default App;
