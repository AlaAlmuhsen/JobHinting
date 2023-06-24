import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../components/Footer';

const Home = () => {
return (
<div className='home'>
  <Header active='home'/>
<div>Categories</div>
<Container id='home-content'>
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
    <Col>
    <Link to={`/findjob/Meadical`}>Meadical</Link>
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
    <Col>
    <Link to={`/findjob/Teaching`}>Teaching</Link>
    </Col>
  </Row>
</Container>

  <Footer/>
</div>
)}
export default Home;