import {useState} from 'react'
import {FormContext} from './context'
import CheckPayment from './checkPayment' //import related form
import {checkPaymentState} from './constants' // import related default state
export default function FormContainer() {
    const initialState = checkPaymentState 
    const [state,setState] = useState(checkPaymentState) // use state imported from constants
    return (
      <div className="App">
        <FormContext.Provider value={{state,setState,initialState}}>
          <CheckPayment/> 
        </FormContext.Provider>
        
      </div>
    );
  }