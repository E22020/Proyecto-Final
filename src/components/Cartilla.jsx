import React from 'react';
import './Cartilla.css'
import { Card, CardBody, CardTitle, CardText, CardImg, Button } from 'reactstrap';
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link>

const CustomCard = ({ title, text, imgSrc, buttonOnClick, Link }) => {
  return (
    <Card className="my-3 shadow-sm Carti">
      {imgSrc && <CardImg className='imgcar' top width="100%"  src={imgSrc} alt={title} />}
      <CardBody>
        <hr></hr>
        <CardTitle className='Tituloc' tag="h5">{title}</CardTitle>
        <hr></hr>
        <CardText>{text}</CardText>
        <br></br>
        {
          <Button color="primary" onClick={buttonOnClick}>
            <a className='Bot' href={Link} target="_blank">
            Comprar Ahora
            </a>
          </Button>
}
      </CardBody>
    </Card>
  );
};

export default CustomCard;
