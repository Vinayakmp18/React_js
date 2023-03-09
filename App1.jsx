import React from 'react'
import Course from './Course'
import JSON from "./trainer.json"
import "./trainer.css"

const App1 = () => {
  return (
    <div>
        <Course payload={JSON}/>
    </div>
  )
}

export default App1