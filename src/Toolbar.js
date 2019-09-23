import React from 'react';

class Toolbar extends React.Component{

    render() {
        return(
            <div>
                <button id='1' style={btnStyle}>1</button>
                <button id='2' style={btnStyle}>2</button>
                <button id='3' style={btnStyle}>3</button>
                <br/>
                <button id='4' style={btnStyle}>4</button>
                <button id='5' style={btnStyle}>5</button>
                <button id='6' style={btnStyle}>6</button>
                <br/>
                <button id='7' style={btnStyle}>7</button>
                <button id='8' style={btnStyle}>8</button>
                <button id='9' style={btnStyle}>9</button>
                <br/>
                <button id='0' style={btnStyle}>0</button>
                <br/>
                <button id='add' style={btnStyle}><img height='30px' width='30px' src={'/Images/Addition.png'}  alt={"Plus Sign"}/></button>
                <button id='sub' style={btnStyle}><img height='30px' width='30px' src={'/Images/minus.png'}  alt={"Plus Sign"}/></button>
                <button id='mul' style={btnStyle}><img height='30px' width='30px' src={'/Images/multiplication.png'}  alt={"Plus Sign"}/></button>
                <button id='div' style={btnStyle}><img height='30px' width='30px' src={'/Images/division.png'}  alt={"Plus Sign"}/></button>
            </div>
        )
    }
}

// Stretching image to full button size
const btnStyle = {
    backgroundSize: 'cover',
    background : 'grey',
    borderColor : 'Grey'
};

export default Toolbar
