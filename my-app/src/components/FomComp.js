import React, {Component} from 'react';
import style from '../style.css'

class FormComp extends Component {

    constructor(props) {
        super(props)
 
        this.state = {
            text: '',
        }
 
    }
 
    handlerSubmit = e => {
        e.preventDefault();
        console.log(this.state.text);
    }
    
    handlerOnChangeInput = e => {   
     const {name, value} = e.target;
     this.setState({[name]: value});
    }

    render() {
      return (
        
        <form onSubmit={this.handlerSubmit}>
        <input placeholder="Digite seu nome" type="text" value={this.state.text} name="text" id="text" onChange={this.handlerOnChangeInput} />
        <button className="btn btn-black" onClick={this.clicked}>Click aqui para salvar</button>
        <div className="amostra">
            {this.state.text}
        </div>
        
    </form>
      )
    }
  }

export default FormComp