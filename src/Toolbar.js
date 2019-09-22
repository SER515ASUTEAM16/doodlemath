import React from 'react'

class Toolbar extends React.Component{
    render() {
        return(
            <div>
                <button style={btnStyle}><img height={25} width={25} src={'/Images/Addition.png'}  alt={"Plus Sign"}/></button>
                <button style={btnStyle}><img height={25} width={25} src={'/Images/minus.png'}  alt={"Plus Sign"}/></button>
                <button style={btnStyle}><img height={25} width={25} src={'/Images/multiplication.png'}  alt={"Plus Sign"}/></button>
                <button style={btnStyle}><img height={25} width={25} src={'/Images/division.png'}  alt={"Plus Sign"}/></button>
            </div>
        )
    }
}

const btnStyle = {
    backgroundSize: 'cover'
};

export default Toolbar
