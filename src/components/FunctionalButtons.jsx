import React, { Component } from 'react'

class FunctionalButtons extends Component {
    state = { 
        buttons: {
            multiplication: "*",
            division: "/",
            subtraction: "-",
            addition: "+",
            equals: "="
        },
        result: 0,
        value1: 0, 
        value2: 0,
     }
     valueSetter = (value) => {
        if (document.getElementById('value1') === null){
            var value1 = document.getElementById('screen').innerText;
            document.getElementById('screen').innerHTML = ` 
            <div id="value1">${value1}</div>
            <div id="function"></div>
            <div id="value2"></div>
            <div id = "result"></div>
            `
        }
        if(document.getElementById('value1').innerText !== ""){
            this.setState({
                value1: parseFloat(document.getElementById('value1').innerText)
               });
              document.getElementById('function').innerText = value;
        }
        
     }
     componentDidMount() {
         document.getElementById('button-addition').addEventListener('click', ()=>{
             let value = this.state.buttons.addition;
             this.valueSetter(value);             
     });
     document.getElementById('button-multiplication').addEventListener('click', ()=>{ 
         var value = this.state.buttons.multiplication;
         this.valueSetter(value);

    });
    document.getElementById('button-subtraction').addEventListener('click', ()=>{ 
        var value = this.state.buttons.subtraction;
         this.valueSetter(value);
    });
    document.getElementById('button-division').addEventListener('click', ()=>{ 
        var value = this.state.buttons.division;
         this.valueSetter(value);
    });
    document.getElementById('button-equals').addEventListener('click', ()=>{
        if(document.getElementById('value2') !== null){
            this.setState({
                value2: parseFloat(document.getElementById('value2').innerText)
            })
            switch(document.getElementById('function').innerText){
                case ("+"):
                    this.setState(
                        (state)=>({
                            result: state.value1 + state.value2
                        })
                    );
                    break;
                case ("-"):
                    this.setState(
                        (state)=>({
                            result: state.value1 - state.value2
                        }));
                        break;
                case ("/"):
                    this.setState(
                        (state)=>({
                            result: state.value1 / state.value2
                        }));
                        break;
                case ("*"):
                    this.setState(
                        (state)=>({
                            result: state.value1 * state.value2
                        }));
                        break;
                default:
                    console.log("shii");
                break;
            }
            document.getElementById('screen').innerHTML = this.state.result;
        } 
        
    });

     }
    render() { 
        return (  
            <div id='functional-buttons'>
                <div id="button-addition">
                    {this.state.buttons.addition}
                </div>
                <div id="button-multiplication">
                    {this.state.buttons.multiplication}
                </div>
                <div id="button-subtraction">
                    {this.state.buttons.subtraction}
                </div>
                <div id="button-division">
                    {this.state.buttons.division}
                </div>
                <div id="button-equals">
                    {this.state.buttons.equals}
                </div>
            </div>
        );
    }
}
 
export default FunctionalButtons;