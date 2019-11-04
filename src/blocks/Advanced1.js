/*;=============================================================================
; Title:   Doodlemath BY TEAM 16
; Authors: Lokesh Sharma       (lsharma6)    Mail:lsharma6@asu.edu
           Amit Pandey         (apande36)    Mail:apande36@asu.edu
           Vineeth Chitteti    (vchittet)    Mail:vchittet@asu.edu
           Akash Devdhar       (adevdhar)    Mail:adevdhar@asu.edu
           Guru Preetam Kadiri (gkadiri)     Mail:gkadiri@asu.edu
;Version:  Version 1.1
;==================================================================================
 */

//ADVANCED CLASS

import React from 'react'
import Blockly from 'blockly'

const toolbox = `
         <xml>
           <category name="Numbers">                                        //NUMBERS Category created
               <block type="math_number">              
                    <field name="NUM">0</field>                             //NUMBER added as a block and is editable
               </block>  
           </category>
           
           <category name="Operators">                                      //OPERATORS category created
                <block type="math_arithmetic" editable="false">
                    <field name="OP">ADD</field>                            //ADDITION operator added as a block
                    <value name="A">
                    <shadow type="math_number">
                        <field name="NUM">1</field>                         //Giving a placeholder value 1
                    </shadow>
                    </value>
                    <value name="B">
                    <shadow type="math_number">
                        <field name="NUM">1</field>                         //Giving a placeholder value 1
                    </shadow>
                    </value>
                </block>
                <block type="math_arithmetic" editable="false">
                    <field name="OP">MINUS</field>                          //SUBTRACTION operator added as a block
                    <value name="A">
                        <shadow type="math_number">
                            <field name="NUM">1</field>                     //Giving a placeholder value 1
                        </shadow>
                    </value>
                    <value name="B">
                        <shadow type="math_number">
                            <field name="NUM">1</field>                     //Giving a placeholder value 1
                        </shadow>
                    </value>
                </block>
                <block type="math_arithmetic" editable="false">
                    <field name="OP">MULTIPLY</field>                       //MULTIPLICATION operator added as a block
                    <value name="A">
                        <shadow type="math_number">
                            <field name="NUM">1</field>                     //Giving a placeholder value 1
                        </shadow>
                    </value>
                    <value name="B">
                        <shadow type="math_number">
                            <field name="NUM">1</field>                     //Giving a placeholder value 1
                        </shadow>
                    </value>
                </block>
                <block type="math_arithmetic" editable="false">
                    <field name="OP">DIVIDE</field>                         //DIVISION operator added as a block
                    <value name="A">
                        <shadow type="math_number">
                            <field name="NUM">1</field>                     //Giving a placeholder value 1
                        </shadow>
                    </value>
                    <value name="B">
                        <shadow type="math_number">
                            <field name="NUM">1</field>                     //Giving a placeholder value 1
                        </shadow>
                    </value>
                </block>
           </category>
           
            <Category name="Trignometry">                                   //TRIGNOMETRY category created
                <block type="math_trig">                                   
                </block>
            </Category>
            
            <Category name="Compare">                                       //COMPARE category created
                <block type="logic_compare">                                //RELATIONAL operators added as a dropdown option
                </block>
            </Category>
            
            <category name="Unary">                                   //EXPONENTIAL category created
                <block type="math_single">                                  //UNARY OPERATORS added as a dropdown option
                </block>
            </category>
         </xml>`

class Advanced1 extends React.Component {
    constructor() {
        super();
        this.state = {                                      //RESULT variable created
            result: "",
            resultValue: ""
        };
    }

    componentDidMount() {
        Blockly.inject("blocklyDiv", {toolbox: toolbox});
    }

    render() {
        return (
            <div>
                <div id="blocklyContainer" style={{display: 'inline'}}>
                    <div id="blocklyDiv" ref="blocklyDiv"                                   //RESULT is printed
                         style={{height: '480px', width: '1000px', float: 'left'}}></div>
                    <div style={{height: '480px'}}>
                        <button onClick={this.printResult}>
                            Result
                        </button>
                        <div>
                            <p>
                                {this.state.result}
                            </p>
                            <p>
                                Result = {this.state.resultValue}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    printResult = () => {                                                   //RESULT is calculated
        let workspace = Blockly.getMainWorkspace();
        if (workspace.getAllBlocks().length > 0) {
            let result = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
            this.setState({result: result});
            this.setState({resultValue: eval(result)});
        }
    }
}

export default Advanced1;
