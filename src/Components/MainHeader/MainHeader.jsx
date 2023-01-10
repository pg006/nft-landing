import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import "../MainHeader/MainHeader.scss";
import Pc from "../../assets/Images/svgs/Pc.svg";

const MainHeader = () => {
  return (
    <React.Fragment>
      <div className="mainheader">
        <Row>
          <div className="d-flex justify-content-between">
            <Col className="content" lg={6} md={6} sm={12}>
              <Row>
                <h1>Discover And Collect Rare NFTs</h1>
                <h5>
                  The most secure marketplace for buying and selling unique
                  crypto assets.
                </h5>
              </Row>
              <Row>
                <div className="d-flex justify-content-start">
                  <Button className="buy-button" variant="#8c8cda">
                    BUY NFTS
                  </Button>

                  <Button className="sell-button" variant="#8c8cda">
                    SELL NFTS
                  </Button>
                </div>
                {/* <Col className='b-button' lg={6} md={6} sm={12}>
                </Col>
                <Col className='s-button' lg={6} md={6} sm={12}>
                </Col> */}
              </Row>
            </Col>
            <Col className="pc-img" lg={6} md={6} sm={4}>
              <div className="d-flex justify-content-center">
                <img src={Pc} alt="Pc" />
              </div>
            </Col>
          </div>
        </Row>
      </div>
    </React.Fragment>
  );
};
export default MainHeader;
