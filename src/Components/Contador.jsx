import { useEffect, useState } from "react"


function StateExample () {

    const [contador, setContador] = useState(0)

    // en el hook useEffect, el primer parámetro es una función y el segundo un array que se le llama array de dependencia

    useEffect( () => {
        console.log("se monto el componente")
            
        return () => {
                console.log("se desmonto el componente")
        }

    }, [contador])

    // [] cuando el array de dependencia esta vacio solo se ejecuta en el montaje
    // [a] Cuando el array tiene algo adentro, se ejecuta en el montaje y cuando "a" cambia
    // el return de "se desmonto el componente" no es obligatorio escribir esa línea de código que suele ser la mayoria de las veces

    const clickSumar = () => {
         setContador(contador + 1)
    }

    const clickRestar = () => {
        setContador (contador - 1)
    }

    const reset = () => {
        setContador(0)
    }



    return(
        <div>
            <h1>Contador</h1>
            <p>{contador}</p>
            <div>
                <button onClick={clickSumar}>+</button>
                <button onClick={clickRestar}>-</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default StateExample