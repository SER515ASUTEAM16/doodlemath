/*;=============================================================================
; Title:   Doodlmath BY TEAM 16
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
                    <field name="NUM">0</field>                             //0 is added as a block
               </block>
               <block type="math_number" editable="false">
                    <field name="NUM">1</field>                             //1 is added as a block
               </block>
               <block type="math_number" editable="false">
                    <field name="NUM">2</field>                             //2 is added as a block
               </block>
               <block type="math_number" editable="false">
                    <field name="NUM">3</field>                             //3 is added as a block
               </block>
               <block type="math_number" editable="false">
                    <field name="NUM">4</field>                             //4 is added as a block
               </block>
               <block type="math_number" editable="false">
                    <field name="NUM">5</field>                             //5 is added as a block
               </block>
               <block type="math_number" editable="false">
                    <field name="NUM">6</field>                             //6 is added as a block
               </block>
               <block type="math_number" editable="false">
                    <field name="NUM">7</field>                             //7 is added as a block
               </block>
               <block type="math_number" editable="false">
                    <field name="NUM">8</field>                             //8 is added as a block
               </block>
               <block type="math_number" editable="false">
                    <field name="NUM">9</field>                             //9 is added as a block
               </block>
               <block type="math_number" editable="false">
                    <field name="NUM">4</field>           
               </block>
           </category>
           <category name="operators">                                      //OPERATORS category created
                <block type="math_arithmetic" editable="false">
                    <field name="OP">ADD</field>                            //ADDITION operator is added as a block
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
                    <field name="OP">MINUS</field>                          //SUBTRACTION operator is added as a block
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
                    <field name="OP">MULTIPLY</field>                       //MULTIPLICATION operator is added as a block
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
                    <field name="OP">DIVIDE</field>                         //DIVISION operator is added as a block
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
                    <field name="OP">EQ</field>                             //EQUALITY for comparison is added as a block
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
                <block type="logic_compare" editable="false">
                    <field name="OP">NEQ</field>
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
                <block type="logic_compare" editable="false">
                    <field name="OP">LT</field>
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
                <block type="logic_compare" editable="false">
                    <field name="OP">LTE</field>
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
                <block type="logic_compare" editable="false">
                    <field name="OP">GT</field>
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
                <block type="logic_compare" editable="false">
                    <field name="OP">GTE</field>
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

class LowerGrade extends React.Component {
    constructor() {
        super();
        this.state = {
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
                    <div id="blocklyDiv" ref="blocklyDiv"
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

    printResult = () => {
        let workspace = Blockly.getMainWorkspace();
        if (workspace.getAllBlocks().length > 0) {
            let result = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
            this.setState({result: result});
            this.setState({resultValue: eval(result)});
        }
    }
}

export default LowerGrade;
