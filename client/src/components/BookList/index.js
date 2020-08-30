import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import "./style.css";


export function BookListItem(props) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-3">
            <Thumbnail src={props.thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{props.title}</h3>
            <h5>{props.author}</h5>
            <p>{props.description}</p>
            <button className="btn"><a id="btn" rel="noreferrer noopener" target="_blank" href={props.href}>
              View Books
            </a></button>
            <button className="btn" id="btn" onClick={props.handleSavedBook}>Save Books</button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}