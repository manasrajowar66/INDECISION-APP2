import React from 'react';
import AddOption from './AddOption';
import Option from './Option';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleModalClose = () =>{
        this.setState( ()=> ( { selectedOption:undefined } ));
    };
     
    handleDeleteAll = () =>{
        this.setState(()=>({ options:[] }));
    }
    
    handleDeleteOne = (optionRemove)=>{
        this.setState((prevState)=>({ options:prevState.options.filter((option)=> option !== optionRemove) }));
    }

    handlePick = () =>{
        const randNum = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randNum];
        this.setState(()=>( { selectedOption:option } ));
    }

    handleAddOne = (option) =>{
        if(!option)
        {
            return "Enter a valid input";
        }
        else if(this.state.options.indexOf(option) > -1)
        return "This item already exist";
        this.setState((prevState)=>({ options:[...prevState.options,option] }));
        
      
    }

    componentDidMount(){
          try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options)
            {
                this.setState(()=>({ options }));
            }
          } catch (error) {
              
          }  
            
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options.length)
        {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }

    render(){
        const title = "Indecision App";
        const subtitle = "Put your life in the hands of a computer";
        return(
      <div>
        <Header title={title} subtitle={subtitle}/>

        <div className="container" >
        <Action handlePick={this.handlePick}  visibility={this.state.options.length>0}/>

        <div className="widget">
        <Options handleDeleteAll={this.handleDeleteAll} handleDeleteOne={this.handleDeleteOne} options={this.state.options} />
        <AddOption handleAddOne={this.handleAddOne} />
        </div>
        
        </div>
        
        <OptionModal selectedOption={this.state.selectedOption} handleModalClose={this.handleModalClose} />
      </div>
    );
    }
}
    

