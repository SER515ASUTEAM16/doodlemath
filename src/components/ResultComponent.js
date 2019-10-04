//  basic design from github.com/niinpatel/calculator-react

import React, {Component} from 'react';

class ResultComponent extends Component {


    render() {
        let {result} = this.props;
        return (
            <div className="result">
                <p>{result}</p>
            </div>
        )
            ;
    }
}

export default ResultComponent;