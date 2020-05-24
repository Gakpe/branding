import React, { useState } from 'react';
import { Button, Toast, ToastBody, ToastHeader, Row, Col, View, Container } from 'reactstrap';

import {GoMegaphone} from "react-icons/go";
import {IoMdStar} from "react-icons/io";
import {BsBarChartFill} from "react-icons/bs";
import { MdEqualizer, MdEuroSymbol, MdTouchApp, MdTrendingUp } from "react-icons/md";




const ToastSkills = (props) => {
  const { buttonLabel } = props;
  const [show, setShow] = useState(false);

  const toggle = () => setShow(!show);

  return (

    <Container-fluid>

    <Row className="toastbody portrait">
      <Col sm="3" className="row justify-content-center">
        <div className="b"> <MdEqualizer size ={45}/> <br/> </div>
      </Col>

      <Col sm="3" className="row justify-content-center">
        <div className="b"> <MdEuroSymbol size ={45}/> <br/></div>
      </Col>

      <Col sm="3" className="row justify-content-center">
        <div className="b"> <MdTouchApp size ={45}/> <br/></div>
      </Col>

      <Col sm="3" className="row justify-content-center">
        <div className="b"> <MdTrendingUp size ={45}/> <br/></div>
      </Col>
    </Row>

    <Row className="toastbody portrait">
        <Col sm="3" className="row justify-content-center">
          <h3>Etude de marché</h3>
        </Col>

        <Col sm="3" className="row justify-content-center">
          <h3>Préparation levée de fonds</h3>
        </Col>


        <Col sm="3" className="row justify-content-center">
          <h3>Transformation digitale </h3>
        </Col>

        <Col sm="3" className="row justify-content-center">
          <h3> Logiciel de gestion sur-mesure </h3>
        </Col>
    </Row>

    <Row className="toastbody portrait">
        <Col sm="3" className="row justify-content-center">
          <p> je te ferai des trucs quali tu n'as pas idée Lorem ipsum dolor sit amet, consectetur adipisicing elit. In distinctio, voluptatum, cum sint mollitia hic. Molestiae sit temporibus porro nam.</p>
        </Col>

        <div className="vline"></div>

        <Col sm="3" className="row justify-content-center">
          <p> je te ferai des trucs quali tu n'as pas idée Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dolore officia amet qui est, obcaecati id expedita dolores quas voluptatibus.</p>
        </Col>

        <div className="vline"></div>

        <Col sm="3" className="row justify-content-center">
          <p>Developpement web et création de lien avec le game Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium voluptate ipsum adipisci natus aliquid quisquam quam voluptatibus dignissimos esse molestias.</p>
        </Col>

        <div className="vline"></div>

        <Col sm="3" className="row justify-content-center">
          <p>Tableau de bord de gestion en live</p> <strong>Developer Fullstack </strong> MERN pret à niquer de rums :
          techno: nodes.js | react | mango | express toussa
        </Col>
    </Row>

    </Container-fluid>
  );
}

export default ToastSkills;
