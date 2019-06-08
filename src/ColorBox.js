import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './colorBox.css';

class ColorBox extends Component {
    state = {
            copied:false

      }
      changCopyState = ()=>{
          this.setState({copied:true},()=>{
              setTimeout(()=> this.setState({copied:false}),1500);
          })

      }
    render() { 
        
        const {name,background} = this.props;
        const {copied} = this.state;

        return (<CopyToClipboard text={background} onCopy = {this.changCopyState}>
        <div style={{background}} className='ColorBox'>
        <div style={{background}} className={`copy-overlay ${copied && 'show'}`}></div>
        <div className={`copy-msg ${copied && 'show'}`}>
            <h1>COPIED</h1>
            <p>{this.props.background}</p>
        </div>
            <div className='copy-container'>
                <div className='box-content'>
                    <span>{name}</span>
                </div>
                <button className='copy-button'>COPY</button>
            </div>

        </div> 
        </CopyToClipboard>);
    }
}
 
export default ColorBox;