import { Form, Button, Row, Col, Alert } from "react-bootstrap"
import useCategoria from "../hooks/useCategoria"
import useBebidas from "../hooks/useBebidas"
import { useState } from "react"

export default function Formulario() {
    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })

    const [error, setError] = useState('')

    const {categoria} = useCategoria()
    const {consultarBebida} = useBebidas()


    const HandleSubmit = e => {
        e.preventDefault()

        if(Object.values(busqueda).includes('')){
                setError('Todos los campos deben estar llenos')
                return
            }

            setError('')
            consultarBebida(busqueda)
        }

  return (
    
    <Form className="mt-5"
    onSubmit={HandleSubmit}
    >

    {error && <Alert variant="danger" className='text-center text-uppercase'>{error}</Alert>}
      <Row>
        <Col md={6}>
            <Form.Group>
                <Form.Label htmlFor="nombre">Licor o Bebida</Form.Label> 

                <Form.Control
                id="nombre"
                type='text'
                placeholder="Tequila, Ron, etc..."
                name="nombre"
                value={busqueda.nombre}
                onChange={e => setBusqueda({
                    ...busqueda,
                    [e.target.name] : e.target.value
                })}
                />   
            </Form.Group>  
        </Col>
        <Col md={6}>
        <Form.Group>
                <Form.Label htmlFor="categoria">Categoria del Licor o Bebida</Form.Label> 

                <Form.Select
                id="categoria"
                name="categoria"
                value={busqueda.categoria}
                onChange={e => setBusqueda({
                    ...busqueda,
                    [e.target.name] : e.target.value
                })}
                >
                    <option>Selecciona categoria</option>
                    {categoria.map(categorias =>(
                        <option
                            key={categorias.strCategory}
                            value={categorias.strCategory}
                        >{categorias.strCategory}</option>
                    ))}
                      
                </Form.Select> 
            </Form.Group>     
        </Col>
      </Row>

      <Row className="justify-content-end">
        <Col md={2}>
            <Button 
            className="text-uppercase mt-3 w-100" 
            style={{backgroundColor: "#C147E9", color: "#ffff",}}
            type="submit"
            >
                Buscar Bebida
            </Button>
        </Col>




      </Row>
    </Form>
  )

}
