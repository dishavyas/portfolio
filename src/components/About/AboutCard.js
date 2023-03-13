import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {

// My name is Disha Vyas and I have completed my bachelor degree in B.Sc in Computer Science and currently pursuing MCA from Sage University.

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Disha Vyas </span>
            from <span className="purple"> Indore, India.</span>
            <br /> I have completed my bachelor degree in B.Sc in Computer Science 
            and currently pursuing MCA from Sage University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Poetry Writting
            </li>
            <li className="about-activity">
              <ImPointRight /> Lishing Music 
            </li>
            
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Disha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
