import React from 'react';
import Toolbar from "./Toolbar";

class CanvasPlaceholder extends React.Component{

    state = {
        expression : ''
    }

    changeExpression = (e) => {
        this.setState()
    }
    render() {
        return(
            <div>
                <Toolbar/>
                <form inputMode="text">
                    <input readOnly size={'60'}
                           type={'text'}
                           name={'Expression'}
                           placeholder={'Create your Expression here'}
                           value={this.state.expression}
                    />
                </form>
            </div>
        )
    }
}



export default CanvasPlaceholder
