import { Form, Row, Col, Button, Spinner } from "react-bootstrap";
import {sector,frequency,payTime} from './constants' //import required constants for select values
export default function CheckPaymentForm({spinn,state,inputChanged,sendToServer}) {
  // This forms will always get this 4 props for handling the context state, 
  //spinner, sendToServer function and the default values
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            disabled={spinn}
            placeholder="Name"
            onChange={(e) => inputChanged("name", e.target.value)}
            value={state.name}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            disabled={spinn}
            type="email"
            placeholder="Enter email"
            onChange={(e) => inputChanged("email", e.target.value)}
            value={state.email}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridIncome">
          <Form.Label>Income</Form.Label>
          <Form.Control
            disabled={spinn}
            type="number"
            placeholder="Enter income"
            onChange={(e) => inputChanged("income", parseFloat(e.target.value))}
            value={state.income}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridLoanAmmount">
          <Form.Label>Loan Ammount</Form.Label>
          <Form.Control
            disabled={spinn}
            type="number"
            placeholder="Enter loan ammount"
            onChange={(e) => inputChanged("amount", parseFloat(e.target.value))}
            value={state.amount}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridWorkYears">
          <Form.Label>Work Years</Form.Label>
          <Form.Control
            disabled={spinn}
            type="number"
            placeholder="Enter work years"
            onChange={(e) =>
              inputChanged("workYears", parseFloat(e.target.value))
            }
            value={state.workYears}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridSector">
          <Form.Label>Sector</Form.Label>
          <Form.Select
            disabled={spinn}
            onChange={(e) => inputChanged("sector", parseInt(e.target.value))}
            value={state.sector}
          >
              {sector.map((item)=>{ return <option key={item.display} value={item.value}>{item.display}</option>})}
            
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridFrequency">
          <Form.Label>Frequency</Form.Label>
          <Form.Select
            disabled={spinn}
            onChange={(e) =>
              inputChanged("frequency", parseInt(e.target.value))
            }
            value={state.frequency}
          >
           {frequency.map((item)=>{ return <option key={item.display} value={item.value}>{item.display}</option>})}
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPayTime">
          <Form.Label>PayTime</Form.Label>
          <Form.Select
            disabled={spinn}
            onChange={(e) => inputChanged("payTime", parseInt(e.target.value))}
            value={state.payTime}
          >
            <option value={0} >Choose pay time</option>
              {payTime.map((item)=>{ return <option key={item.display} value={item.value}>{item.display}</option>})}
            
          </Form.Select>
        </Form.Group>
      </Row>
      <Button disabled={spinn} variant="primary" onClick={sendToServer}>
        {spinn ? (
          <Spinner animation="border" size="xs" aria-hidden="false" />
        ) : (
          "Submit"
        )}
      </Button>
    </Form>
  );
}
