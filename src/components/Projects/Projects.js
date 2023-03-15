import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import battle from "../../Assets/Projects/BattleUi.jpeg";
import counter from "../../Assets/Projects/Counter.png";
import design from "../../Assets/Projects/DesignUi.jpeg";
import expense from "../../Assets/Projects/ExpenseManager.png";
import music from "../../Assets/Projects/Music.png";
import mystore from "../../Assets/Projects/MyStore.jpeg";
import shinchan from "../../Assets/Projects/Shinchan.png";
import support from "../../Assets/Projects/SupportDesk.jpeg";
import todo from "../../Assets/Projects/Todo.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={battle}
              isBlog={false}
              title="BattleUi"
              ghLink="https://dishavyas.github.io/space-game/"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={counter}
              isBlog={false}
              title="Counter"
              ghLink="https://dishavyas.github.io/count/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={design}
              isBlog={false}
              title="DesignUi"
              ghLink="https://dishavyas.github.io/Art-UI/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense Manager"
              ghLink="https://track-balance.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Music App"
              ghLink="https://dishavyas.github.io/Music-app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mystore}
              isBlog={false}
              title="MyStore-Ecommerce App"
              ghLink="https://ecommerce-my-store.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shinchan}
              isBlog={false}
              title="Shichan"
              ghLink="https://dishavyas.github.io/shinchan/"
             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={support}
              isBlog={false}
              title="Support Desk"
              ghLink="https://github.com/dishavyas/support-desk-app"
             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo List"
              ghLink="https://react-redux-todolist-app.netlify.app/"
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
