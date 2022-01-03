const Cosa = ({cosa , cosas , carro , setCarro , agregar}) => {
    const {name , precio } = cosa
    return(
        <div>
            <h1>{name}</h1>
            <h2>${precio}</h2>
            
            <button onClick={()=> agregar(cosa)}>Agregar al carrito</button>
        </div>
    )
}


export default Cosa