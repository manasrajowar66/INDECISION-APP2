import React from 'react';


export default class AddOption extends React.Component{
    state = {
        error:undefined
    };
    handleAddOne = (e)=>{
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOne(option);

        if(error)
        {
            this.setState(()=>({ error }));
            
        }
        else
        {
            this.setState(()=>({ error:undefined }));
            e.target.elements.option.value=" ";
        }

        
         
    }
    render(){
        return(
            <div className="">
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOne}>
                    <input className="add-option__input" type="text" name="option" />
                    <button className="button" type="submit">Add</button>
                </form>
            </div>
        )
    }
}