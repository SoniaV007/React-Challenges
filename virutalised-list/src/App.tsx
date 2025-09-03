import { useState } from 'react'
import './App.css'
import Virtualised_List from './components/Virtualised_List'

function App() {

  const list = Array.from({ length: 10000 }, (_, i) => i + 1)

  return (
    <>
      <Virtualised_List listItemHeight={20} containerHeight={400} fulllist={list}/>
    </>
  )
}

export default App
