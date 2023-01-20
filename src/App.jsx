import { useState } from "react"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
function App() {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => setToggle(!toggle)
  return (
    <div className="App">
      <NavBar toggle={toggle} handleClick={handleClick} />
      <Home toggle={toggle} handleClick={handleClick} />
    </div>
  )
}

export default App
