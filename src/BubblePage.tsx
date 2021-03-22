import React, { useContext } from 'react';
import BubbleChart from './BubbleChart';
import { Col, Row } from 'react-bootstrap';
import { bubble } from './data';
import Menu from './Menu';
import Grid from '@material-ui/core/Grid';
import RadarContext from './RadarContext';
const BubblePage = () => {
  const { name, setName } = useContext(RadarContext);
  const tech = (item:string)=>{
    if(item==='Mobile') return 0
    if(item==='FrontEnd') return 1
    if(item==='BackEnd') return 2
    else return 3
  }
  console.log(name)
  return (
    <Grid container justify='center' spacing={5} style={{ marginTop: '1%' }}>
      <Grid item>
        <Row>
          <Col>
            <h3>{name && name}</h3>
            <BubbleChart data={bubble[tech(name)].data} />
          </Col>
        </Row>
      </Grid>
    </Grid>
  );
};

export default BubblePage;
