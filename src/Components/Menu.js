import React from 'react';
/* Add any imports you think you might need here! */

import Color from './Color'

const Menu = (props) => { 

    return (
      <div className="colorOptions">
        <Color color="red" handleClick={props.addBlock}/>
        <Color color="pink" handleClick={props.addBlock}/>
        <Color color="blue" handleClick={props.addBlock}/>
        <Color color="green" handleClick={props.addBlock}/>
      </div>
    );
}

export default Menu;