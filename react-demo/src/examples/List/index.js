import React from 'react'
import style from './style.module.css'

import { Button } from '../../components/Button'

export const List = () => {
  // local state binding
  const [inputText, setInputText] = React.useState('')

  const handleInputChange = event => {
    setInputText(event.target.value)
  }
  // ----

  const [list, setList] = React.useState([])

  const removeItem = idx => {
    const newList = [...list]
    newList.splice(idx, 1)
    setList(newList)
  }

  const addItem = () => {
    if (inputText !== '') {
      setList([...list, inputText])
      setInputText('')
    }
  }

  return <div className={style.container}>
    <h3>List example</h3>
    <div>
      <input onChange={handleInputChange} value={inputText} /> {/* state binding */}
      <Button onClick={addItem}>Add Item</Button>
    </div>
    <ul>
      {list.map((item, idx) => (
        <li key={idx}>
          {item} <button onClick={() => removeItem(idx)}>x</button>
        </li>
      ))}
    </ul>
  </div>
}
