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
                <block type="math_arithmetic" editable="false">
                    <field name="OP">MINUS</field>
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
                <block type="math_arithmetic" editable="false">
                    <field name="OP">MULTIPLY</field>
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
                <block type="math_arithmetic" editable="false">
                    <field name="OP">DIVIDE</field>
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
            <Category name="Trig">
                <block type="math_trig">                 
                </block>
            </Category>
            <Category name="Compare">
                <block type="logic_compare">
                </block>
            </Category>
         </xml>`

class Advanced1 extends React.Component {
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

export default Advanced1;
