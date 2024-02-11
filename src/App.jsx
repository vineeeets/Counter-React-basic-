import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [warn, setWarn] = useState("");

 let Adder=()=>{
    setCount(count +1);
  }

  let Remover=()=>{
    if(count <=0){setWarn("Counter can not be negative!!!")
    setTimeout(setWarn,3000);
  }
    else{
      setCount(count-1);
    }
  }

  return (
    <>
      <div>
        <h1>Counter</h1>
        <h3><button onClick={Adder}>Add</button></h3>
        <h3><button onClick={Remover}>Remove</button> </h3>
        <h2>{count} {warn}</h2>
      </div>
    </>
  )
}

export default App
