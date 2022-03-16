// this component display the form and response modal
// besides, it manages the spinn state, change the context state and provide the sendToServer function
import React, {useState,useContext} from 'react';
import {FormContext} from './context' // import context for the form
import {sendToLambda} from './send'
import Modal from './modal'
import {serviceUrl} from './constants'//import serviceUrl for this request
import CheckPaymentForm from './checkPaymentForm' //import the form it self for managing user input

function CheckPayment() {
  const [showModal,setShowModal] = useState(false)
  const [response,setResponse] = useState({})
  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)
 
  const {state,setState,initialState} = useContext(FormContext) //get from context the state, initialState and setter function for state
  
  const [spinn,setSpinn] = useState(false)
  const sendToServer = async () => {
    setSpinn(true)
    const resp = await sendToLambda(serviceUrl,state)
    setResponse(resp)
    handleShow()
    setSpinn(false)
    if(!resp.errors) {setState(initialState)}
  }
  const inputChanged = (inputType,value) => {
    setState({...state,[inputType]:value})
  }
    
  
  return (
    <div>
      <CheckPaymentForm state={state} spinn={spinn} inputChanged={inputChanged} sendToServer={sendToServer}/>
      <Modal showModal={showModal} handleClose={handleClose} msg={response}/>
      
    </div>
  );
}

export default CheckPayment;