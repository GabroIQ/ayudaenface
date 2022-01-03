import { useState } from 'react';
import './App.css';
import Cosa from './Components/Cosa';



const App = ()=> {
  const [cosas , setCosas] = useState ([
      {name: 'lechuga' , precio: 715},
      {name: 'tomate' , precio: 115},
      {name: 'porotos' , precio: 15},
  ])
  
  const [carro , setCarro] = useState([])

  const agregar = (cosa) => {
    if (carro.find((x)=> x.name === cosa.name)) {
      const newCarro = carro.map(x=> x.name === cosa.name
        ? ({
          ...x,
          cantidad: x.cantidad + 1,
        })
        : x    
        )
      return setCarro([newCarro])
    }
    
    return setCarro({
      
        ...cosa,
        cantidad: 1
      })
    
  
  }
console.log(carro)
  return(
    <div>
      {cosas.map((cosa) => (
        <Cosa
          key={cosa.name}
          carro={carro}
          setCarro={setCarro}
          cosa={cosa}
          cosas={cosas}
          agregar={agregar}
        />
      ))}

    </div>
  )}


export default App;
