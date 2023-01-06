import React from 'react'
import '../Logos/Logos.scss'
import { Row } from 'react-bootstrap';
import TechCrunch from '../../assets/Images/svgs/TechCrunch.svg'
import FastCompany from '../../assets/Images/svgs/FastCompany.svg'
import Mit from '../../assets/Images/svgs/Mit.svg'
import Forbes from '../../assets/Images/svgs/Forbes.svg'

const Logos = () => {
    return (
        <React.Fragment>
            <div className='logos'>
                <Row className="title">FEATURED ON</Row>
                <Row className="logo">
                    <img src={TechCrunch} alt='TechCrunch' />
                    <img src={FastCompany} alt='FastCompany' />
                    <img src={Mit} alt='Mit' />
                    <img src={Forbes} alt='forbes' />
                </Row>
            </div>
        </React.Fragment>
    )
}

export default Logos
