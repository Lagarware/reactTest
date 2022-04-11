// this component only displays messages from server that would respond with an array of errors or a text attribute 
import {Modal,Button} from 'react-bootstrap'
export default function ModalWindow ({showModal,handleClose,msg}){
    console.log("hola")
    let content
    // we are going to get either errors or text (when everything is Ok)
    if(Object.keys(msg).length !== 0 && msg.errors ){
        content = <ul>{
             msg.errors.map((err,i) =>{
                 return <li key={i}>{`${err.message} revisar campo ${err.field}`}</li>
             })
            }</ul>
    }
    if(Object.keys(msg).length !== 0 && msg.text ){
        content = <span>{msg.text}</span>
    }
    return(
        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Response</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    )

}