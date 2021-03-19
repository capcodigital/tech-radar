import React from 'react';
import BubbleMap from './BubbleMap';
import { Col, Row } from 'react-bootstrap';
import { bubble } from './data';
import Menu from './Menu';
import Grid from '@material-ui/core/Grid';

const BubblePage = () => {
  return (
    <Grid container justify='center' spacing={5} style={{ marginTop: '1%' }}>
      <Grid item>
        <Menu />
      </Grid>
      <Grid item>
        <Row>
          {bubble.map((b) => (
            <Col key={`chart-${b.name}`}>
              <h3>{b.name}</h3>
              <BubbleMap data={b.data} />
            </Col>
          ))}
        </Row>
      </Grid>
    </Grid>
  );
};

export default BubblePage;
