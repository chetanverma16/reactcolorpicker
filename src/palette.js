import React, { Component } from "react";
import ColorBox from './ColorBox';
import './palette.css';
import Slider from 'rc-slider';
import Navbar from "./Navbar";

class Palette extends Component {
    state = { 
        level:500,
        format: "hex" 
     }
     changeLevel = (level)=>{
         this.setState({level})
     }

    changeFormat = (val)=> {
        this.setState({ format: val });
    }

    render() { 

    const {colors} = this.props.palette;
    
        const ColorBoxes = colors[this.state.level].map((color)=>(
            <ColorBox background ={color[this.state.format]} name={color.name}></ColorBox>
        ))
        return ( <div className='Palette'>
            <Navbar
                level={this.statelevel}
                changeLevel={this.changeLevel}
                handleChange={this.changeFormat}
            />
        <div className='Palette-colors'>
                {ColorBoxes}
        </div>
        </div> );
    }
}
 
export default Palette;