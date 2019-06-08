import React, { Component } from 'react';
import Palette from './palette';
import seedColors from './seedColors';
import {generatePalette} from './ColorHelpers'

class App extends Component {
    state = {  }
    render() {
        return ( 
           
            <div>
                <Palette palette={generatePalette(seedColors[1])}></Palette>
            </div>
         );
    }
}
 
export default App;