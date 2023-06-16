import { useState } from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
    
  const[personsState , setPersonState] = useState({
    PersonClass:[
      {name:"mohamed" ,Age :"20"},
      {name:"mohamed" ,Age :"20"},
      {name:"mohamed" ,Age :"20"},
      {name:"mohamed" ,Age :"20"}],
    })
     const [otherState,setOtherState]=
     useState({
       otherState:"Windows Form Application"
     })
  const switchName = (newName) =>
  {
    setPersonState({
      PersonClass:[
        {name:newName ,Age :"20"},
        {name:"mohamed" ,Age :"20"},
        {name:"Omar" ,Age :"20"},
        {name:"Ahmed" ,Age :"20"}]    
      })
      console.log(personsState,otherState);
  }

  const style ={
    backgroundColor:'white',
    font:'inherit',
    border :'1px solid blue',
    padding:'8px',
    cursor:'pionter'
  }

  const onChangeHandler = (event)=>{
    setPersonState({
      PersonClass:[
        {name:"Seoud" ,Age :"20"},
        {name:"mohamed" ,Age :"20"},
        {name:event.target.value ,Age :"20"},
        {name:"Ahmed" ,Age :"20"}] 
    })
  }

  return (
    <div className="App">
      <h1> Hello it's Me Mohamed</h1>
      <Person name={personsState.PersonClass[0].name}
       Age={personsState.PersonClass[0].Age}
       Change={onChangeHandler}>Seouddddddddddddd
       </Person>
      <Person name={personsState.PersonClass[1].name} 
      Age={personsState.PersonClass[1].Age}/>
      <Person name={personsState.PersonClass[2].name} 
      Age={personsState.PersonClass[2].Age}/>
      <Person Click={switchName.bind(this,"SSSSSSSSSS")} 
       name={personsState.PersonClass[3].name} 
      Age={personsState.PersonClass[3].Age}/>
      <button style={style}
       onClick={switchName.bind(this,"moha")}>Switch Name</button>
    </div>
  );
}

export default App;
