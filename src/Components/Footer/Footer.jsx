import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import '../../Components/Footer/Footer.scss'
const Footer = () => {
  return (
    <React.Fragment>
      <div className='footer'>
        <Row>
          <Col lg={2}>
            <h3>KRYPTO</h3>
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <h5>krypto</h5>
                <div className='name'>
                  <h6>Home</h6>
                  <h6>About</h6>
                  <h6>Buy NFTs</h6>
                  <h6>Sell NFTs</h6>
                </div>
              </Col>
              <Col lg={4}>
                <h5>Market</h5>
                <div className='name'>
                  <h6>Browse NFTs</h6>
                  <h6>Buy NFTs</h6>
                  <h6>Sell NFTs</h6>
                </div>
              </Col>
              <Col lg={4}>
                <h5>contact</h5>
                <div className='name'>
                  <h6>Email</h6>
                  <h6>LinkedIn</h6>
                  <h6>Instagram </h6>
                  <h6>Twitter</h6>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={4}>
            <Row>join our newsletter</Row>
            <Row>
              <Button className='d-flex justify-content-start button-1' variant="#000000"> Email Address
                <Button className='button-2'>SUBMIT</Button>
              </Button>
            </Row>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default Footer
