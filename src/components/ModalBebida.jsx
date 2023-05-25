import {Modal, Image} from 'react-bootstrap';
import useBebidas from '../hooks/useBebidas';

const ModalBebida = () => {

    const {modal, handleModalClick, receta, setReceta} = useBebidas()

    const mostrarIngredientes = () =>{
        let ingredientes = []

        for(let i = 1; i<16; i++){
            if(receta[`strIngredient${i}`]){
                ingredientes.push(
                    <li>
                    {receta[`strIngredient${i}`]}
                    {receta[`strMeasure${i}`]}
                    </li>
                )
            }
        }
        return ingredientes
    }

  return (
    <Modal show={modal} onHide={ () =>{
        setReceta({}),
        handleModalClick()
    }}>
        <Image
        src={receta.strDrinkThumb}

        />
    <Modal.Header>
      <Modal.Title>{receta.strDrink}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{receta.strInstructions}
    <div className='mt-3'>
        <h3 className='mb-3'>Ingredientes y preparacion</h3>
        {mostrarIngredientes()}
    </div>
    </Modal.Body>
    <Modal.Footer>
    </Modal.Footer>
  </Modal>
  )
}

export default ModalBebida
