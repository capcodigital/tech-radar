import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RadarContextType, RadarContext } from './RadarContextProvider';
import Grid from '@material-ui/core/Grid';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CategoryRadar from './CategoryRadar';
import styled from 'styled-components/macro';
import { data } from './data';
import images from './images';

type WrapperProps = {
  category: string;
};
const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: 100%;
  display: flex;
  .MuiGrid-container {
    padding-left: 100px;
  }
  .background {
    opacity: 0.12;
    position: absolute;
    top: -80px;
    left: -300px;
  }
  hr {
    background: white;
    margin: 0;
    width: 20px;
    border-width: 5px;
    margin-bottom: 20px;
  }
  .title {
    font-size: 32px;
  }
  .technology {
    padding-top: 12px;
    font-family: poppins, sans-serif;
    font-size: 19px;
    font-weight: 300;
    svg.MuiSvgIcon-root {
      font-size: 12px;
      margin-left: 10px;
    }
    a {
      color: inherit;
    }
    :hover {
      a {
        color: #007bff;
      }
      svg {
        fill: #007bff;
      }
    }
  }
`;

const Title = styled.div`
  font-size: 120px;
  font-weight: 700;
  text-align: left;
  display: inline-block;
  vertical-align: middle;
`;

type ContentType = {
  preferred: Array<{ name: string; link: string }>;
  skilled: Array<{ name: string; link: string }>;
  scaling: Array<{ name: string; link: string }>;
};
const CategoryPage = () => {
  const { category, technology, setCategory, setTechnology } =
    useContext<RadarContextType>(RadarContext);
  const [content, setContent] = useState<ContentType | null>(null);
  useEffect(() => {
    let categoryName = window.location.pathname.split('/')[2];
    setCategory(categoryName);
    setContent(
      data.filter((cat: any) => cat.name.toLowerCase() === categoryName)[0].data
    );
  });

  return (
    <>
      {content && (
        <Wrapper category={category}>
          <img
            className='background'
            src={(images as any)[category]}
            alt={category}
            width={650}
            height={650}
          />
          <div
            style={{ textAlign: 'left', width: '100%', position: 'relative' }}
          >
            <Grid container>
              <Grid item xs={12}>
                <Title>DevOps</Title>
                <img
                  src={(images as any)[category]}
                  alt={category}
                  width={126}
                  height={126}
                />
              </Grid>
              <Grid item xs={4}>
                <hr />
                <div className='title'>Preferred</div>
                {content.preferred.map(({ name }) => (
                  <div key={name} className='technology'>
                    <Link to={`/technology/${name.toLowerCase()}`}>{name}</Link>
                    <ArrowForwardIosIcon />
                  </div>
                ))}
              </Grid>
              <Grid item xs={4}>
                <hr />
                <div className='title'>Skilled</div>
                {content.skilled.map(({ name }) => (
                  <div key={name} className='technology'>
                    <Link to={`/technology/${name.toLowerCase()}`}>{name}</Link>
                    <ArrowForwardIosIcon />
                  </div>
                ))}
              </Grid>
              <Grid item xs={4}>
                <hr />
                <div className='title'>Scaling</div>
                {content.scaling.map(({ name }) => (
                  <div key={name} className='technology'>
                    <Link to={`/technology/${name.toLowerCase()}`}>{name}</Link>
                    <ArrowForwardIosIcon />
                  </div>
                ))}
              </Grid>
            </Grid>
          </div>
          <div
            style={{
              marginTop: -10,
            }}
          ><CategoryRadar data={content}/></div>
        </Wrapper>
      )}
    </>
  );
};

export default CategoryPage;
