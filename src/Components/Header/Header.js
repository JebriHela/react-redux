
import React, { useState } from 'react'
import {Button,FormControl,InputGroup,Form,Card}from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {addTask} from '../../JS/Action/action'

function Header() {
    const [Input,setInput]=useState("")
    const dispatch = useDispatch()
    
    const add = (e)=>{

        e.preventDefault();
        
        dispatch(addTask({ description: Input, id: Math.random(), isDone: false }))
        setInput("")
    }
    
    // else {
    //     alert('add task')
    // }


  return (
    <div> <Card bg="primary">
    <Card.Body >
        <h1 className={"text-white"}></h1>

        <Form onSubmit={add}>
            <Form.Group>
                <InputGroup className="mb-3">
                    <FormControl
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={(e) => setInput(e.target.value)}
                        value={Input}
                    />
                    <Button variant="success" onClick={add}>
                        ADD
                    </Button>

                </InputGroup>
            </Form.Group>
        </Form>
    </Card.Body>
</Card>
</div>
  )
}

export default Header