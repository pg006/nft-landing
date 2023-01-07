import React from 'react'
import { Col, Row, Button } from 'react-bootstrap';
import '../MainHeader/MainHeader.scss'
import Pc from '../../assets/Images/svgs/Pc.svg'



const MainHeader = () => {
  return (
    <React.Fragment>
      <div className='mainheader'>
        <Row>
          <div className='d-flex justify-content-between'>
            <Col className='content' lg={5} md={4} sm={3}>
              <Row>
                <h1>Discover And Collect Rare NFTs</h1>
                <h5>The most secure marketplace for buying and selling unique crypto assets.</h5>
              </Row>
              <Row>
                <Col lg={6} md={4} sm={3}>
                  <Button className='buy-button' variant="#8c8cda">BUY NFTS</Button>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <Button className='sell-button' variant="#8c8cda">SELL NFTS</Button>
                </Col>
              </Row>
            </Col>
            <Col lg={7} md={4} sm={3}>
              <div className='d-flex justify-content-around'>
                <img src={Pc} alt="Pc" />
              </div>
            </Col>
          </div>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default MainHeader

