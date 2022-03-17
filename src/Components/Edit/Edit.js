import React,{useState} from 'react'
import {Modal,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {editTask} from '../../JS/Action/action'

function Edit({ item }) {
  const [editInput,setEditInput]= useState("")
  const [show, setShow] = useState(false);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
  return (
    <div>
  <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><input type="text"  value={editInput}
                        onChange={(e) => setEditInput(e.target.value)}></input></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  
                     onClick={handleClose}   >
            Close
          </Button>
          <Button variant="primary" onClick={() => {
                            handleClose();
                            dispatch(editTask({ id: item.id, text: editInput }))
                        }
                        }>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Edit