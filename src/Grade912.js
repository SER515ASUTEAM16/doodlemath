import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

class Grade912 extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        } else if(button === "C"){
            this.reset()
        } else if(button === "CE"){
            this.backspace()
        } else if(button === "sin"){

        } else {
            this.setState({
                result: this.state.result + button
            })
        }

        switch(button) {
            case "=":
                this.calculate()
                break;
            case "C":
                this.reset()
                break;
            case "CE":
                this.backspace()
                break;
            case "sin":
                this.setState({
                    // eslint-disable-next-line
                    result: (Math.sin(this.state.result) || "" ) + ""
                })
                break;
            case "cos":
                this.setState({
                    // eslint-disable-next-line
                    result: (Math.cos(this.state.result) || "" ) + ""
                })
                break;
            case "tan":
                this.setState({
                    // eslint-disable-next-line
                    result: (Math.tan(this.state.result) || "" ) + ""
                })
                break;
            case "sec":
                this.setState({
                    // eslint-disable-next-line
                    result: ((1 / Math.cos(this.state.result)) || "" ) + ""
                })
                break;
            case "cosec":
                this.setState({
                    // eslint-disable-next-line
                    result: ((1 / Math.sin(this.state.result)) || "" ) + ""
                })
                break;
            case "cot":
                this.setState({
                    // eslint-disable-next-line
                    result: ((1 / Math.cot(this.state.result)) || "" ) + ""
                })
                break;
            default:
                this.setState({
                    result: this.state.result + button
                })
        }
    };


    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () =>{
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1 align = "center">Class 9- 12 Advanced Scientific DoodleMath</h1>
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default Grade912;