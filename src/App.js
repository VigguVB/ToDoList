
import { useState } from 'react';
import './App.css';
import List from './List';

function App() {
  const[enteredData, setEnteredData] = useState("")
  const[itemData, setItemData] = useState([])

  const dataHandler = (e) =>{
    setEnteredData(e.target.value)

  }

  const addItemHandler = () => {
    setItemData([...itemData, {item: enteredData, key: Date.now() }])
    setEnteredData("")
    console.log(itemData)
    
  }
  return (
    <div className="App">
      <input onChange={dataHandler} value={enteredData} className='input' />
      <button onClick={addItemHandler} className='btn'>ADD +</button>
      <List items={itemData} />
    </div>
  );
}

export default App;
