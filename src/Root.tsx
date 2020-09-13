import React from 'react';
import LoanForm from './LoanForm';
import Schedule from './Schedule';
import CardHeader from 'reactstrap/lib/CardHeader';
import { Col, Container, Row } from 'reactstrap';

const Root = () => (
  <Container>
    <Row>
      <Col>
        <CardHeader>
          <h1> {'Mortgage Calculator'} </h1>
        </CardHeader>
      </Col>
    </Row>
    <Row>
      <Col>
        <LoanForm />
      </Col>
    </Row>
    <Row>
      <Col>
        <Schedule />
      </Col>
    </Row>
  </Container>
);

export default Root;
