import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MeetingManagement from "./view/MeetingManagement/MeetingManagements";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MeetingManagement/>
    </div>
  )
}

export default App
