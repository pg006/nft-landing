import React from 'react'
import '../../Components/Review/Review.scss'
import { Row, Col } from 'react-bootstrap'
import Jessica from '../../assets/Images/svgs/Jessica.svg'


const Review = () => {
    return (
        <React.Fragment>
            <div className='review'>
                <Row>
                    <h3>TESTIMONIALS</h3>
                    <div className='d-flex justify-content-center'>
                        <h1>Read What Others Have To Say</h1>
                    </div>
                </Row>
                <Row>
                    <Col lg={4} md={4} sm={12}>
                        <div className='boxs'>
                            <div className='box'>
                            <div className='img-span'>

                                <img src={Jessica} alt="Jessica" />
                                <span></span>
                            </div>

                                <h2>Jessica Page</h2>
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </h4>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <div className='boxs'>
                            <div className='box'>
                           <div className='img-span'>
                                <img src={Jessica} alt="Jessica" />
                                <span></span>
                                </div>
                                <h2>Jessica Page</h2>
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </h4>
                            </div>
                        </div></Col>
                    <Col lg={4} md={4} sm={12}>
                        <div className='boxs'>
                            <div className='box'>
                           <div className='img-span'>

                                <img src={Jessica} alt="Jessica" />
                                <span></span>
                            </div>

                                <h2>Jessica Page</h2>
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </h4>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default Review
