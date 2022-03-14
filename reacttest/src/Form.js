import React, {useState} from 'react';
import {sendToLambda} from './send'
import Modal from './modal'
import {Form,Row,Col,Button,Spinner} from 'react-bootstrap'

function CreditForm() {
  const [showModal,setShowModal] = useState(false)
  const [response,setResponse] = useState({})
  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)
  const defaultForm = {
    name:'',
    email:'',
    income:0,
    amount:0,
    workYears:0,
    sector:1,
    frequency:1,
    payTime:0,
  }
  const [formValues,setFormValues] = useState(defaultForm)
  const [spinn,setSpinn] = useState(false)
  const sendToServer = async () => {
    setSpinn(true)
    const resp = await sendToLambda(formValues)
    setResponse(resp)
    handleShow()
    setSpinn(false)
    if(!resp.resp.errors) {setFormValues(defaultForm)}
  }
  const inputChanged = (inputType,value) => {
    setFormValues({...formValues,[inputType]:value})
  }
  
  return (
    <div>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control disabled={spinn} placeholder="Name" onChange={(e)=>inputChanged('name',e.target.value)} value={formValues.name}/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control disabled={spinn} type="email" placeholder="Enter email" onChange={(e)=>inputChanged('email',e.target.value)} value={formValues.email}/>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridIncome">
            <Form.Label>Income</Form.Label>
            <Form.Control disabled={spinn} type="number" placeholder="Enter income" onChange={(e)=>inputChanged('income',parseFloat(e.target.value))} value={formValues.income}/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLoanAmmount">
            <Form.Label>Loan Ammount</Form.Label>
            <Form.Control disabled={spinn} type="number" placeholder="Enter loan ammount"onChange={(e)=>inputChanged('amount',parseFloat(e.target.value))} value={formValues.amount}/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridWorkYears">
            <Form.Label>Work Years</Form.Label>
            <Form.Control disabled={spinn} type="number" placeholder="Enter work years"onChange={(e)=>inputChanged('workYears',parseFloat(e.target.value))} value={formValues.workYears}/>
          </Form.Group>
        </Row>
        
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridSector">
            <Form.Label>Sector</Form.Label>
            <Form.Select disabled={spinn} onChange={(e)=>inputChanged('sector',parseInt(e.target.value))} value={formValues.sector}>
              <option value={1}>Public</option>
              <option value={2}>Private</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridFrequency">
            <Form.Label>Frequency</Form.Label>
            <Form.Select disabled={spinn} onChange={(e)=>inputChanged('frequency',parseInt(e.target.value))} value={formValues.frequency}>
              <option value={1}>Monthly</option>
              <option value={2}>Biweekly</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPayTime">
            <Form.Label>PayTime</Form.Label>
            <Form.Select disabled={spinn} onChange={(e)=>inputChanged('payTime',parseInt(e.target.value))} value={formValues.payTime}>
              <option value={0}>Choose..Pay Time</option>
              <option value={3}>3 months</option>
              <option value={6}>6 months</option>
              <option value={12}>12 months</option>
              <option value={18}>18 months</option>
              <option value={24}>24 months</option>
              <option value={36}>36 months</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Button disabled={spinn} variant="primary"  onClick={sendToServer}>
        {spinn ? <Spinner animation="border" size="xs" aria-hidden="false"/>:'Submit'}
          
        </Button>
      </Form>
      <Modal showModal={showModal} handleClose={handleClose} msg={response}/>
      
    </div>
  );
}

export default CreditForm;