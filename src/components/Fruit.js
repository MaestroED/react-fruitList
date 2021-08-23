import { useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function Fruit({ fruit }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    

    <Card className="mb-4 ms-4 me-5 mt-4 p-5" style={{ width: '19rem' }}>
      <Card.Img variant="top"  src={fruit.img} alt={fruit.name} />
      <Card.Body>
        <Card.Title className="align-center"> {fruit.name} </Card.Title>
        <Button variant="info" onClick={handleShow} className="ms-3 mt-3">
          Show Nutritions
        </Button>
        

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title  > {fruit.name} { } </Modal.Title>
          </Modal.Header>
          <Modal.Body className="align-center" >
            <img src={fruit.img} className="modal-img"  alt={fruit.name} />
            <span className="mt-5 mb-5">Protein: {fruit.nutritions.protein}g</span>  <br />
            <span className="mt-5 mb-5">Carbohydrates: {fruit.nutritions.carbohydrates}g</span> <br />
            <span className="mt-5 mb-5">Fat: {fruit.nutritions.fat}g  </span> <br />
            <span className="mt-5 mb-5"> Sugar: {fruit.nutritions.sugar}g </span><br />
            <span className="mt-5 mb-5"> Calories : {fruit.nutritions.calories}kJ </span>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={handleClose}>
              I got u
            </Button>
          </Modal.Footer>
        </Modal>

      </Card.Body>
    </Card>

  )
}

export default Fruit
