// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [txt, setTxt] = useState("");
  const [list, setlist] = useState([]);
  console.log(txt)
  function add() {
    if (!txt) {
      alert("text is required");
      return;
    }
    list.push(txt);
    console.log(list);
    setlist([...list]);
    setTxt("");
  };
  const editItem = (e)=>{
    let newVal = prompt("edit");
    console.log(newVal)
    setlist(newVal)
  }
  let deletItem = (id) =>{
    let updateItem = list.filter((elem ,ind) =>{
      return ind !== id;
    })
    setlist(updateItem);
  }
  let removeAll = () =>{
    setlist([]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <input value={txt} onChange={(e) => {
          setTxt(e.target.value);
          console.log(txt);
        }} />
        
        <button onClick={add}>add</button>
        <button onClick={editItem}>edit</button>
        <button onClick={deletItem}>delete</button>
        <button onClick={removeAll}> remove all</button>
        <ul>
          {list.map((e, i) => { 
          return <li key={i}>{e}
          <button btnValue="Edit" click={editItem}/>
          <button btnValue="delete" click={() =>deletItem(i)}/>
          
          </li>
          
           
      })}
      
        </ul>
      </header>
    </div>
  );
}

export default App;
