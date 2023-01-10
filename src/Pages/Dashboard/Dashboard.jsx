import React from "react";
import "./Dashboard.scss";
// import MainHeader from '../../Components/MainHeader/MainHeader'
import NavBar from "../../Components/Navbar/Navbar";
import MainHeader from "../../Components/MainHeader/MainHeader";
import { Container } from "react-bootstrap";
import Logos from "../../Components/Logos/Logos";
import Anaylze from "../../Components/Anaylze/Anaylze";
import Review from "../../Components/Review/Review";
import JoinUs from "../../Components/JoinUs/JoinUs";
import Footer from "../../Components/Footer/Footer";
import BG from '../../assets/Images/svgs/BG_Circles.png'

const Dashboard = () => {
  return (
    <React.Fragment>
        <div className="main_circle_bg">
          <img src={BG} alt="bg" />
        </div>
      <Container>
        <NavBar />
        <MainHeader />
        <Logos />
        <Anaylze />
        <Review />
        <JoinUs />
        <Footer />
      </Container>
    </React.Fragment>
  );
};

export default Dashboard;
