import React from 'react';

const userInput = (props) => {
    const inputStyle ={
        border: "2px solid purple",
        backgroundColor: 'yellow',
        cursor: 'pointer',
    }
        return (
            <input 
            type='text'
            style={inputStyle}
            onChange={props.changed} 
            value={props.currentName}/>
        )
    }

export default userInput;