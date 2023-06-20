import React, { useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <Header active='home'/>
            <div>Categories</div>
    <Container>
          <Row>
            <Col>
            <Link to={`/findjob/technology`}>Technology</Link>
            </Col>
            <Col>
            Engineering
            </Col>
            <Col>
            Business
            </Col>
          </Row>
          <Row>
            <Col>
            Sales
            </Col>
            <Col>
            Marketing
            </Col>
            <Col>
            Accounting
            </Col>
          </Row>
        </Container>
        </div>
    )
}
export default Home;