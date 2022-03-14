import {Modal,Button} from 'react-bootstrap'
export default function ModalWindow ({showModal,handleClose,msg}){
    let content
    if(Object.keys(msg).length !== 0 && msg.resp.errors ){
        content = <ul>{
             msg.resp.errors.map((err,i) =>{
                 return <li key={i}>{`${err.message} revisar campo ${err.field}`}</li>
             })
            }</ul>
    }
    if(Object.keys(msg).length !== 0 && msg.resp.amount ){
        content = <span>{`Para un crédito de ${msg?.resp.amount} ${msg.resp.text} por un número de períodos de ${msg.resp.payTime}`}</span>
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