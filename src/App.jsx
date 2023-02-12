import { useState } from 'react'
import NavigationMenu from './components/navigationMenu'
import Calculator from './components/Calculator'
import Todo from './components/Todo'
import Weather from './components/Weather'
import About from './components/About'

function App() {
  const [ActiveCalculator, setActiveCalculator] = useState(false);
  return (
    <div className="App">
      <>
        <NavigationMenu setActiveCalculator = {setActiveCalculator} ActiveCalculator = {ActiveCalculator}/>
        <div className="canvas">
          <Calculator Active={ActiveCalculator} setActive={setActiveCalculator}/>
          <Todo/>
          <Weather/>
          <About/>
        </div>
      </>
    </div>
  )
}

export default App
