import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop } from '@fortawesome/free-solid-svg-icons';



export default function Categoria(){
    return (
        <Container>
          <Row>
                 
          <Col xs={6} md={4}>
          <Image src="holder.js/171x180" rounded />
          <FontAwesomeIcon icon={faShop} />
          
        </Col>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" roundedCircle />
          <FontAwesomeIcon icon={faShop} />
        </Col>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" thumbnail />
          <FontAwesomeIcon icon={faShop} />
        </Col>
            
          </Row>
        </Container>
      );
}