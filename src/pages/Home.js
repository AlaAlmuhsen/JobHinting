import React, { useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import background from "../images/background.png";
import back from "../images/back.jpg";

const Home = () => {
    return (
        <div className='home'>
            <Header active='home'/>
            {/* <section>
  <div className="about-us">
    <h2>We are hiring.</h2>
    <p>Are you looking for a new challenge? You are passionate about innovation and enjoy working with people? Then you've come to the right place.</p>
   </div>

    <img src={background}/>

</section> */}
            {/* <img id="background" src={back} alt="background"/> */}
            <div>Categories</div>
    <Container>
          <Row>
            <Col>
            <Link to={`/findjob/Technology`}>Technology</Link>
            </Col>
            <Col>
            <Link to={`/findjob/Engineering`}>Engineering</Link>
            </Col>
            <Col>
            <Link to={`/findjob/Business`}>Business</Link>
            </Col>
          </Row>
          <Row>
            <Col>
            <Link to={`/findjob/Sales`}>Sales</Link>
            </Col>
            <Col>
            <Link to={`/findjob/Marketing`}>Marketing</Link>
            </Col>
            <Col>
            <Link to={`/findjob/Accounting`}>Accounting</Link>
            </Col>
          </Row>
        </Container>
        </div>
    )
}
export default Home;