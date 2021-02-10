import React,{useState} from 'react'
import {Modal,Button} from 'react-bootstrap';
import { v4 as uuidv4} from 'uuid';

const AddModal = ({handleClose, show,addNewMovie}) => {
     
    const [newMovie,setNewMovie] = useState({
        id:uuidv4(),
        title:"",
        description:"",
        posteUrl:"",
        rate:""
      })

      const handleChange = (e) =>{
          setNewMovie({...newMovie,[e.target.name]:e.target.value});
      }

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                 <Modal.Title>Add new movie</Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                     <div>
                         <label className="lab">Title:</label>
                         <input type="text" size="20" name="title" className="inp-text" onChange={handleChange} ></input><br/>
                         <label className="lab">Description:</label>
                         <input type="text" size="20" name="description" className="inp-text" onChange={handleChange} ></input><br/>
                         <label className="lab">PosteUrl:</label>
                         <input type="text" size="20" name="posteUrl" className="inp-text" onChange={handleChange} ></input><br/>
                         <label className="lab">Rate</label>
                         <input type="text" size="20"  name="rate" className="inp-text" onChange={handleChange} ></input>
                     </div>
                 </Modal.Body>
                 <Modal.Footer>
                 <Button variant="secondary" onClick={handleClose}>Close</Button>
                 <Button variant="primary" onClick={() => {
                     handleClose()
                     addNewMovie(newMovie)
                 }} >Add Movie</Button>   
                </Modal.Footer>       
            </Modal>
        </div>
    )
}

export default AddModal
