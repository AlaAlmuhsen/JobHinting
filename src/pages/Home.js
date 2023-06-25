import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../components/Footer";
import character from "../images/character.png";

const Home = () => {
  return (
    <div className="home">
      <Header active="home" />
      <Row className="row" id="jumbotron-row">
        <Col id="column">
          <h1 id="headline">Welcome to your professional community</h1>
          <br />
          <p id="quote">
            "Success is not final, failure is not fatal: it is the courage to
            continue that counts." - Winston Churchill.
          </p>
        </Col>

        <Col className="col" id="second-column">
          <img id="image" src={character} />
        </Col>
      </Row>

      <h1 id="title">Categories</h1>
      <Container id="grid-categories">
        <Row class="row">
          <Col class="col">
            <div class="card">
              <i class="fa-solid fa-microchip"></i>
              <Link className="Link" to={`/findjob/Technology`}>
                Technology
              </Link>
            </div>
          </Col>

          <Col class="col">
            <div class="card">
            <i class="fa-solid fa-person-digging"></i>
              <Link className="Link" to={`/findjob/Engineering`}>
                Engineering
              </Link>
            </div>
          </Col>

          <Col class="col">
            <div class="card">
            <i class="fa-solid fa-business-time"></i>
              <Link className="Link" to={`/findjob/Business`}>
                Business
              </Link>
            </div>
          </Col>

          <Col class="col">
            <div class="card">
            <i class="fa-solid fa-hospital"></i>
              <Link className="Link" to={`/findjob/Meadical`}>
                Meadical
              </Link>
            </div>
          </Col>
        </Row>

        <Row class="row" id="second-row-grid">
          <Col class="col">
            <div class="card">
            <i class="fa-solid fa-lightbulb"></i>
              <Link className="Link" to={`/findjob/Sales`}>
                Sales
              </Link>
            </div>
          </Col>

          <Col class="col">
            <div class="card">
              <i class="fa-solid fa-comments-dollar"></i>
              <Link className="Link" to={`/findjob/Marketing`}>
                Marketing
              </Link>
            </div>
          </Col>

          <Col class="col">
            <div class="card">
          <i class="fa-solid fa-receipt"></i>
              <Link className="Link" to={`/findjob/Accounting`}>
                Accounting
              </Link>
            </div>
          </Col>

          <Col class="col">
            <div class="card">
            <i class="fa-solid fa-chalkboard"></i>
              <Link className="Link" to={`/findjob/Teaching`}>
                Teaching
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};
export default Home;
