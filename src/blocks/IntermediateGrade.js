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

//INTERMEDIATE CLASS

import React from 'react'
import Blockly from 'blockly'

const toolbox = `
         <xml>
             <category name="Numbers">                                        //NUMBERS Category created
               <block type="math_number">              
                    <field name="NUM">0</field>                             //NUMBER added as a block and is editable
               </block>  
           </category>
           
           <category name="Operators">                                      //OPERATOR category created
                <block type="math_arithmetic">                              //All binary operators present with dropdown option
                </block>
           </category>
            
           <Category name="Compare">                                        //COMPARE category created
                <block type="logic_compare">                                //All relational operators present with dropdown option
                </block>
           </Category>
            
           <category name="Powers">                                         //POWERS category created
                <block type="math_single" editable="false">
                    <field name="OP">EXP</field>                            //E TO THE POWER function added as a block.
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
                <block type="math_single" editable="false">                 
                    <field name="OP">ABS</field>                            //ABSOLUTE operator added as a block
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
                <block type="math_single" editable="false">
                    <field name="OP">POW10</field>                          //10 TO THE POWER fucntion added as a block                  
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
                <block type="math_single" editable="false">
                    <field name="OP">NEG</field>                            //NEGATIVE fucntion added as a block
                    <value name="A">
                        <shadow type="math_number">
                            <field name="NUM">1</field>                     //Giving a placeholder value 1
                        </shadow>
                    </value>
                    <value name="B">
                        <shadow type="math_number">
                            <field name="NUM">1</field>                      //Giving a placeholder value 1
                        </shadow>       
                    </value>
                </block>
           </category>
         </xml>`

class IntermediateGrade extends React.Component {
    constructor() {
        super();
        this.state = {                                                      //RESULT variable created
            result: "",
            resultValue: ""
        };
    }

    componentDidMount() {
        Blockly.inject("blocklyDiv", {toolbox: toolbox});
        Blockly.getMainWorkspace().addChangeListener(this.printResult);
    }

    render() {
        return (
            <div>
                <div id="blocklyContainer" style={{display: 'inline'}}>
                    <div id="blocklyDiv" ref="blocklyDiv"                                   //RESULT is printed
                         style={{height: '90vh', width: '900px', float: 'left'}}></div>
                    <div style={{height: '480px'}}>
                        <div style={{background: "#feecec78", paddingTop: '8px', paddingBottom: '8px'}}>
                            Result
                        </div>
                        <div>
                            <p>
                                {this.state.result}
                            </p>
                            <p>
                                Result : {this.state.resultValue}
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

export default IntermediateGrade;
