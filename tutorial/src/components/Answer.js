import React, { Component } from 'react';

function Answer(props){
    
    const item = props.item
    return(
        <li>
            <h4>{item.question}</h4>
            <h6>{item.author}</h6>
        </li>
    )
}

export default Answer