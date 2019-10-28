import React from 'react'
import Blockly from 'blockly'

const toolbox = `
         <xml>
           <category name="Numbers">
               <block type="math_number" editable="false">
                    <field name="NUM">0</field>           
               </block>
               <block type="math_number" editable="false">
                    <field name="NUM">1</field>           
               </block>
               <block type="math_number" editable="false">
                    <field name="NUM">2</field>           
               </block>
               <block type="math_number" editable="false">
                    <field name="NUM">3</field>           
               </block>
               <block type="math_number" editable="false">
                    <field name="NUM">4</field>           
               </block>
               <block type="math_number" editable="false">
                    <field name="NUM">5</field>           
               </block>
               <block type="math_number" editable="false">
                    <field name="NUM">6</field>           
               </block>
               <block type="math_number" editable="false">
                    <field name="NUM">7</field>           
               </block>
               <block type="math_number" editable="false">
                    <field name="NUM">8</field>           
               </block>
               <block type="math_number" editable="false">
                    <field name="NUM">9</field>           
               </block>
               <block type="math_number" editable="false">
                    <field name="NUM">4</field>           
               </block>
           </category>
           <category name="operators">
                <block type="math_arithmetic" editable="false">
                    <field name="OP">ADD</field>
                    <value name="A">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                    </value>
                    <value name="B">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                    </value>
                </block>
            </category>
         </xml>`

class Advanced2 extends React.Component {
    componentDidMount() {
        Blockly.inject("blocklyDiv", {toolbox: toolbox});
    }

    render() {
        return (
            <div>
                <div id="blocklyContainer">
                    <div id="blocklyDiv" ref="blocklyDiv" style={{height: '480px', width: '1000px'}}></div>
                </div>
            </div>
        )
    }
}

export default Advanced2;
