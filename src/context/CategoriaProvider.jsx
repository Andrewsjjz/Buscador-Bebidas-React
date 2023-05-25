import { useState, useEffect, createContext } from "react";
import axios from "axios";

const CategoriaContext = createContext()

const CategoriaProvider = ({children}) => {

    const [categoria, setCategoria] = useState ([])

    const ObtenerBebidas = async () => {
        try {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            
            const {data } = await axios (url)

            setCategoria(data.drinks)
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        ObtenerBebidas()
    }, [])


    return (
        <CategoriaContext.Provider
        value={{
            categoria
        }}
        >

            {children}
        </CategoriaContext.Provider>
    )
}

export {
    CategoriaProvider
}


export default CategoriaContext