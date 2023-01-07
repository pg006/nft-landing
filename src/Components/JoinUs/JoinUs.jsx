import React from 'react'
import '../JoinUs/JoinUs.scss'
import { Button } from 'react-bootstrap'

const JoinUs = () => {
    return (
        <React.Fragment>
            <div className='joinus'>
                <h3 className='d-flex justify-content-center'>ARE YOU READY?</h3>
                <div className='d-flex justify-content-center part'>
                    <h1>Be A Part Of The Next Big Thing</h1>
                </div>
                <Button variant="#000000">GET STARTED</Button>
            </div>
        </React.Fragment>
    )
}
export default JoinUs
