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
             <category name="Variables">
                 <block type="graph_get_x"></block>
             </category>
         </xml>`

class AdvancedGrade extends React.Component {
    constructor() {
        super();
        this.state = {                                      //RESULT variable created
            result: "",
            resultValue: "",
            drawGraph: false
        };
    }

    componentDidMount() {
        Blockly.defineBlocksWithJsonArray([{
            "type": "graph_get_x",
            "message0": "x",
            "output": "Number",
            "colour": Blockly.Msg['VARIABLES_HUE'],
            "tooltip": Blockly.Msg['VARIABLES_GET_TOOLTIP'],
            "helpUrl": Blockly.Msg['VARIABLES_GET_HELPURL']
        }]);
        Blockly.JavaScript['graph_get_x'] = function (block) {
            // x variable getter.
            return ['x', Blockly.JavaScript.ORDER_ATOMIC];
        };

        Blockly.inject("blocklyDiv", {toolbox: toolbox});
        Blockly.getMainWorkspace().addChangeListener(this.printResult);
    }

    renderGraph() {
        if (this.state.drawGraph) {
            return <div id="graph"></div>
        }
    }

    render() {

        return (
            <div>
                <div id="blocklyContainer" style={{display: 'inline'}}>
                    <div id="blocklyDiv" ref="blocklyDiv"                                   //RESULT is printed
                         style={{height: '480px', width: '900px', float: 'left'}}></div>
                    <div style={{height: '480px'}}>
                        <button>
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
                        {this.renderGraph()}

                    </div>
                </div>
            </div>
        )
    }

    printResult = () => {
        //RESULT is calculated
        window.d3 = require('d3');
        const functionPlot = require('function-plot');
        let workspace = Blockly.getMainWorkspace();
        let allBlocks = workspace.getAllBlocks();
        this.setState({drawGraph: false});
        this.setState({result: ""});
        this.setState({resultValue: ""});
        let drawGraph = false;
        let count = 0;
        if (allBlocks.length > 0) {
            for (let i = 0; i < allBlocks.length; i++) {
                if (allBlocks[i].type === 'graph_get_x') {
                    drawGraph = true;
                    count++;
                }
            }
            let result = Blockly.JavaScript.workspaceToCode(workspace);
            result = result.split(";");
            console.log(result)
            console.log(drawGraph)
            if (drawGraph && result.length - count <= 2) {
                try {
                    this.setState({drawGraph: drawGraph});
                    functionPlot({
                        target: '#graph',
                        width: 440,
                        height: 350,
                        data: [{
                            fn: result[0].toString()
                        }]
                    })
                } catch (e) {
                    alert("Graph Not Supported");
                }
            }
            this.setState({result: result[0]})
            if (!drawGraph) {
                this.setState({resultValue: eval(result[0])});
            }
        }
    }
}

export default AdvancedGrade;
