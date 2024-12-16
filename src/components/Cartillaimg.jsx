import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
import './Cartillaimg.css'

const CardMC = ({ title, img, info, button}) => {
  return (
    <div>
      <Card inverse>
        <CardImg
          className="imgc"
          alt={title}
          src={img}
          style={{
            height: 270,
          }}
          width="100%"
        />
        <CardImgOverlay>
          <CardTitle tag="h5" className="titleimg">{title}</CardTitle>
          <CardText>
            {info}
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default CardMC;
