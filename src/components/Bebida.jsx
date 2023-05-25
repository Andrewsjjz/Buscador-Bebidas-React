import { Col, Card, Button } from 'react-bootstrap'
import {} from '../styles/styles.css'
import useBebidas from '../hooks/useBebidas'

const Bebida = ({bebida}) => {

  const {handleModalClick, handleBebidasId} = useBebidas()

    return (

<Col md={6} lg={4} className='mb-5'>

    <Card>
        <Card.Body>
          <Card.Title className='text-center strong'>
            {bebida.strDrink}
          </Card.Title>
        </Card.Body>
        <Card.Img variant="bottom" src={bebida.strDrinkThumb} />
        <button onClick={() => {
          handleModalClick()
          handleBebidasId(bebida.idDrink)
        }}> Ver receta 
        </button>
    </Card>

</Col>




    )
}

export default Bebida
