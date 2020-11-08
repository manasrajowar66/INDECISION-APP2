var app = {
    title:"Indecision App",
    subtitle:"This is subtitle" ,
    options:[],
    id:1
 };
 const formSubmit = (e)=> {
     e.preventDefault();
     const option = e.target.elements.option.value;
     if(option)
     {
         app.options.push(option);
         e.target.elements.option.value = " ";
         reRenderApp();
     }
 }
 
 const removeAll = ()=> {
     app.options.length = 0;
     reRenderApp();
 }
 const makeDicision = ()=>{
     const randNumber = Math.floor(Math.random() * app.options.length);
     const option = app.options[randNumber];
     alert(option);
 }
 
 
 const reRenderApp = () =>{
     var temp = (
         <div>
             <h1>{app.title}</h1>
             <p>{app.subtitle}</p>
             <button disabled={app.options.length===0} onClick={makeDicision}>What should i do?</button>
             {app.options.length>0? <p>Here are your options</p>:<p>Ooops! no options avalable.</p>}
             <ol>
             {app.options.map((option) => {
                 return <li key={app.id++}> {option} </li>;
             })}
             </ol>
             <form onSubmit={formSubmit}>
                 <input type="text" name="option" />
                 <button type="submit">Add Option</button>
                 <button type="button" onClick={removeAll}>Remove All</button>
             </form>
         </div>
      );
      
      ReactDOM.render(
          temp,
          document.getElementById('root')
      );
 }
 reRenderApp();