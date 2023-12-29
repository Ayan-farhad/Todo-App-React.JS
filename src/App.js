import { useState } from 'react';
import './App.css';

function App() {
  const [addValue, setaddValue] = useState([]);
  const [inpText, setinpText] = useState('');
  const [editMode, seteditMode] = useState(false);
  const [currentIndex, setcurrentIndex] = useState();


  function addItem() {
    if (inpText === '') {
      alert('Please enter a value')
      return
    }

    const copylist = [...addValue]
    copylist.push(inpText)
    setaddValue(copylist)

    setinpText("")
  }
  function changeValue(e) {
    const value = e.target.value
    setinpText(value)
  }

  function deleteItem(index) {
    const copylist = [...addValue]
    copylist.splice(index, 1)
    setaddValue(copylist)

  }
  function editItem(index) {
    const editBtn = addValue[index];
    setinpText(editBtn)
    seteditMode(true)

    setcurrentIndex(index)
  }
  function updatebtn() {
    if (inpText === '') {
      alert('Please enter a value')
      return
    }
    const updatebtn = [...addValue]
    updatebtn[currentIndex] = inpText
    setaddValue(updatebtn)
    seteditMode(false)
    setinpText("")

  }

  function deleteAll(index) {
    setaddValue([])
  }



  return (

    <div className="App">
      <header className="App-header">
        <p>
          <div className='changeDiv'>
            <h1>Todo-App</h1>
            <input className='place' onChange={changeValue} placeholder='Enter Any Value' value={inpText} />

            {editMode ? <button onClick={updatebtn} className='placeUp' >Update</button>
              :
              <button onClick={addItem} className='placeAdd' >Add</button>}
            <button onClick={deleteAll} className='placeDelete'>Delete All</button>



            <ul>
              {addValue.map(function deletA(item, index) {
                return <li className={editMode && currentIndex === index ? 'li' : ''}><span className="item">{item}</span>
                <div className="buttons">
                  <button className='deltBtn' onClick={() => deleteItem(index)} >Delete</button>
                  <button className='editBtn' onClick={() => editItem(index)} > Edit</button></div>
                </li>
              })}
            </ul>
          </div>

        </p>
      </header>
    </div>

  );
}

export default App;
