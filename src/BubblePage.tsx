import React from 'react';
import BubbleMap from './BubbleMap';
import { Col, Row } from 'react-bootstrap';
import { bubble } from './data';

const BubblePage = () => {
  return (
    <Row>
      {bubble.map((b) => (
        <Col key={`chart-${b.name}`}>
          <h3>{b.name}</h3>
          <BubbleMap data={b.data} />
        </Col>
      ))}
    </Row>
  );
};

export default BubblePage;
