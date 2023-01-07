import React from 'react'
import '../../Components/Anaylze/Anaylze.scss'
import { Row, Col, Button } from 'react-bootstrap';
import Blog_1 from '../../assets/Images/svgs/Blog_1.svg'
import Blog_2 from '../../assets/Images/svgs/Blog_2.svg'


const Anaylze = () => {
  return (
    <React.Fragment>
      <div className='anaylze'>
        <Row>
          <Col lg={6} md={6} sm={6}>
            <div className='d-flex justify-content-between'>
              <img src={Blog_1} alt='Blog_1' />
            </div>
          </Col>
          <Col lg={6} md={6} sm={6}>
            <div className='d-flex justify-content-between'>
              <Row className='content-item'>
                <h3>ANALYTICS</h3>
                <h1>Built-In Analytics To Track Your Nfts</h1>
                <h5>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.</h5>
                <Button className='pricing ' variant="#8c8cda">VIEW OUR PRICING</Button>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={6}>
            <div className='d-flex justify-content-between'>
              <Row className='content-item'>
                <h3>ANALYTICS</h3>
                <h1>Built-In Analytics To Track Your Nfts</h1>
                <h5>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.</h5>
                <Button className='pricing ' variant="#8c8cda">VIEW OUR PRICING</Button>
              </Row>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6}>
            <img src={Blog_2} alt="Blog_2" />
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}
export default Anaylze
