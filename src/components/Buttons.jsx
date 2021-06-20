import React, { Component } from 'react';
import "./Buttons.css";

class Buttons extends Component {
    state = { 
        buttons: [1,2,3,4,5,6,7,8,9,0],
     }

     componentDidMount(){
             
            this.state.buttons.map((button) =>{
                var id = "button-" + this.state.buttons.indexOf(button);
                document.getElementById(id).addEventListener('click', function(){
                    if (document.getElementById('value1') === null){
                        document.getElementById('screen').innerHTML = ` 
                        <div id="value1"></div>
                        <div id="function"></div>
                        <div id="value2"></div>
                        <div id = "result"></div>
                        `
                    }
                    if (document.getElementById('function').innerText === ""){
                        let value1 = document.getElementById('value1');
                        value1.innerText += button;
                    } else {
                        let value2 = document.getElementById('value2');
                        value2.innerText += button;
                    }
                    
                })
                return undefined;
            })
         
     }

    render() { 
        return ( 
            <div className="buttons">
                {this.state.buttons.map(button =>(
                        <div id={"button-" + this.state.buttons.indexOf(button)}
                        key={button}>
                            {button}
                        </div>
                ))}
            </div>
         );
    }
}
 
export default Buttons;