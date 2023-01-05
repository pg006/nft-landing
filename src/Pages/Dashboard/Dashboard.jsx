import React from "react";
import './Dashboard.scss';
import Pc from '../../assets/Images/svgs/Pc.svg'
import TechCrunch from '../../assets/Images/svgs/TechCrunch.svg'
import FastCompany from '../../assets/Images/svgs/FastCompany.svg'
import Mit from '../../assets/Images/svgs/Mit.svg'
import Forbes from '../../assets/Images/svgs/Forbes.svg'
import Blog_1 from '../../assets/Images/svgs/Blog_1.svg'
import Blog_2 from '../../assets/Images/svgs/Blog_2.svg'
import Jessica from '../../assets/Images/svgs/Jessica.svg'

const Dashboard = () => {
  return (
    <React.Fragment>

      <div className="main-body">
        <div className="inner-body">
          <div className="navbar">
            <div className="navbar-title">
              <h2>KRYPTO</h2>
            </div>
            <div className="navbar-items">
              <h4>about</h4>
              <h4>pricing</h4>
              <h4>contact</h4>
              <h4>buy nfts</h4>
            </div>
          </div>
          <div className="part-1">
            <div className="float-left">
              <h1>Discover And Collect Rare NFTs</h1>
              <h3>The most secure marketplace for buying and selling unique crypto assets.</h3>
              <div className="buttons">
                <button className="button">BUY NFTs</button>
                <span>SELL NFTS</span>
              </div>
            </div>
            <div className="float-right">
              <img src={Pc} alt="Pc" />
            </div>
          </div>
          <div className="part-2">
            <span>FEATURED ON</span>
            <div className="box">
              <img src={TechCrunch} alt='TechCrunch' />
              <img src={FastCompany} alt='FastCompany' />
              <img src={Mit} alt='Mit' />
              <img src={Forbes} alt='forbes' />
            </div>
          </div>
          <div className="part-3">
            <div className="left-part">
              <img src={Blog_1} alt='Blog_1' />
            </div>
            <div className="right-part">
              <h3>ANALYTICS</h3>
              <h1>Built-In Analytics To Track Your Nfts</h1>
              <h5>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.</h5>
              <button>VIEW OUR PRICING</button>
            </div>
          </div>
          <div className="part-3">
            <div className="right-part">
              <h3>ANALYTICS</h3>
              <h1>Built-In Analytics To Track Your Nfts</h1>
              <h5>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.</h5>
              <button>VIEW OUR PRICING</button>
            </div>
            <div className="blog-img">
              <img src={Blog_2} alt="Blog_2" />
            </div>
          </div>
          <div className="part-4">
            <h3>TESTIMONIALS</h3>
            <h1>Read What Others Have To Say</h1>
          </div>
          <div className="part-5">

            <div className="box">
              <img src={Jessica} alt="Jessica" />


              <div className="boxs">
                <h3>Jessica Page</h3>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </h5>
              </div>

            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
// <img src={Jessica} alt="Jessica"/>
