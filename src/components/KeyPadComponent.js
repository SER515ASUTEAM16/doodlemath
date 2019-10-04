import React, {Component} from 'react';
class KeyPadComponent extends Component {

    render() {
        return(
        <div>
        <div className="button">
            <button name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
            <button name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
            <button name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
            <button name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br/>

            <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
            <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
            <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
            <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>

            <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
            <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
            <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
            <button name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>

            <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
            <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
            <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
            <button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>


            <button name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
            <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
            <button name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
            <button name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/></div>

            <div className = "button">
            <button className="button--trig" name="sin" onClick={e => this.props.onClick(e.target.name)}>sin()</button>
            <button className="button--trig" name="cos" onClick={e => this.props.onClick(e.target.name)}>cos()</button>
            <button className="button--trig" name="tan" onClick={e => this.props.onClick(e.target.name)}>tan()</button><br/>
            <button className="button--trig" name="sec" onClick={e => this.props.onClick(e.target.name)}>sec()</button>
            <button className="button--trig" name="cosec" onClick={e => this.props.onClick(e.target.name)}>cosec()</button>
            <button className="button--trig" name="cot" onClick={e => this.props.onClick(e.target.name)}>cot()</button><br/>

            </div>
        </div>
    );
}
}
export default KeyPadComponent;
//  basic design from github.com/niinpatel/calculator-react