class Visibility extends React.Component{
    constructor(props){
         super(props);
         this.toggleShow = this.toggleShow.bind(this);
         this.state = {
             isShow: false
         };
    }

    toggleShow(){
        this.setState((prevState)=>{
            return {
                isShow: !prevState.isShow
            };
        });
    }
     
    
    render(){
        return(
            <div>
              <h1>Visibility Toggle</h1>
              <button onClick={this.toggleShow}>{this.state.isShow ? "Hide secrets!" : "Show secrets!"}</button>
              {this.state.isShow &&  <div>THERE ARE YOUR SECRETS!</div> }
            </div>

        );
    }
}

ReactDOM.render(
    <Visibility />,
    document.getElementById('root')
);



