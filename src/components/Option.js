import React from 'react';

const Option = (props)=>(
           
        <div className="option">
            <p className="option__text">{props.count}. {props.option}</p>
            <button 
            className="button button--link"
            onClick={(e)=>{
                props.handleDeleteOne(props.option);
            }}>remove</button>
        </div>
       
);

export default Option;