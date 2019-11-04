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

//BEGINNER CLASS

import React from 'react'
import Blockly from 'blockly'

const toolbox = `
         <xml>
           <category name="Numbers">                                        //NUMBERS Category created
               <block type="math_number" editable="false">              
                    <field name="NUM">0</field>                             //0 added as a block
               </block>
               <block type="math_number" editable="false">
                    <field name="NUM">1</field>                             //1 added as a block
               </block>
               <block type="math_number" editable="false">
                    <field name="NUM">2</field>                             //2 added as a block
               </block>
               <block type="math_number" editable="false">
                    <field name="NUM">3</field>                             //3 added as a block
               </block>
               <block type="math_number" editable="false">
                    <field name="NUM">4</field>                             //4 added as a block
               </block>
               <block type="math_number" editable="false">
                    <field name="NUM">5</field>                             //5 added as a block
               </block>
               <block type="math_number" editable="false">
                    <field name="NUM">6</field>                             //6 added as a block
               </block>
               <block type="math_number" editable="false">
                    <field name="NUM">7</field>                             //7 added as a block
               </block>
               <block type="math_number" editable="false">
                    <field name="NUM">8</field>                             //8 added as a block
               </block>
               <block type="math_number" editable="false">
                    <field name="NUM">9</field>                             //9 added as a block
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
           
            <category name="Compare">                                       //COMPARE category created 
                <block type="logic_compare" editable = "false">
                    <field name="OP">EQ</field>                             //EQUALITY added as a block
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
                <block type="logic_compare" editable="false">
                    <field name="OP">NEQ</field>                            //NOTEQUAL added as a block
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
                <block type="logic_compare" editable="false">
                    <field name="OP">LT</field>                             //LESS THAN added as a block
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
                <block type="logic_compare" editable="false">
                    <field name="OP">LTE</field>                            //LESS THAN or EQUAL TO added as a block 
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
                <block type="logic_compare" editable="false">
                    <field name="OP">GT</field>                             //GREATE THAN added as a block
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
                <block type="logic_compare" editable="false">
                    <field name="OP">GTE</field>                            //GREATER THAN OR EQUAL TO added as a block
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
         </xml>`

class LowerGrade extends React.Component {
    constructor() {
        super();
        this.state = {                                                      //RESULT variable created
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
                    <div id="blocklyDiv" ref="blocklyDiv"                               //RESULT is printed
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

    printResult = () => {                                                               //RESULT is calculated
        let workspace = Blockly.getMainWorkspace();
        if (workspace.getAllBlocks().length > 0) {
            let result = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
            this.setState({result: result});
            this.setState({resultValue: eval(result)});
        }
    }
}

export default LowerGrade;
