import React from 'react';
import { css } from '@emotion/core';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { Container, Row, Col } from "react-bootstrap";
import "./style.css"

const override = css`
    display: block;
    border-color: red;
    margin: 0 auto
`;


function LoadSpinner(props) {
    return (
     <div className='loader-page d-flex justify-content-center align-items-center'>
      <Container>
        <PacmanLoader
          css={override}
          sizeUnit={"px"}
          size={25}
          margin={2}
          color={"#31cb97"}
          loading={props.loading}
        />
       </Container>
      </div> 
    );
}

export default LoadSpinner;