import { useState } from "react"

function Count() {
    const [count, setCount] = useState(0);

    const aumentar = () => {

        setCount(count+1)
    }

    const diminuir = () =>{
        setCount(count-1)
    } 


  return (
    <div style={{textAlign: 'center', marginTop:'50px', marginBottom: '50px'}}>
      <h1>{count}</h1>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={diminuir}>Diminuir</button>
    </div>
  )
}

export default Count