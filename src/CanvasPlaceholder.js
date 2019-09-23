import React from 'react'

class CanvasPlaceholder extends React.Component{

    render() {
        return(
            <div>
                <form inputMode="text">
                    <input readOnly size={'60'}
                           type={'text'}
                           name={'Expression'}
                           placeholder={'Create your Expression here'}
                    />
                </form>
            </div>
        )
    }
}



export default CanvasPlaceholder
