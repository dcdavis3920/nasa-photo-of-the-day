import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardHeader,
  CardImg,
  CardFooter,
  Col,
} from "reactstrap";
function TitleImage(props) {
  console.log(`props`, props);
  return (
    <Col sm="12" md={{ size: 6, offset: 3 }}>
      <Card style={{ backgroundColor: " aqua", color: "light grey" }}>
        <CardHeader style={{ backgroundColor: "grey" }}>
          Title:{props.data.title}
        </CardHeader>
        <CardBody>
          <CardImg src={props.data.url}></CardImg>
          <CardText>{props.data.explanation}</CardText>
        </CardBody>
        <CardFooter style={{ backgroundColor: "grey" }}>
          <CardText>Copyright: {props.data.copyright}</CardText>
          <CardText>{props.data.date}</CardText>
        </CardFooter>
      </Card>
    </Col>
  );
}
export default TitleImage;
