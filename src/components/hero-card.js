import React, { useState } from "react";
import styled from "styled-components";
import { Modal, Button } from "react-bootstrap";

const ModalPopup = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.hero.name} Details:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="hero-details-container">
          <div className="hero-bio-container">
            <h3>Biography</h3>
            <p>Full Name: {props.hero.biography["first-name"]}</p>
            <p>Alter Egos: {props.hero.biography["alter-egos"]}</p>
            <p>Place of Birth: {props.hero.biography["place-of-birth"]}</p>
            <p>Publisher: {props.hero.biography.publisher}</p>
            <p>Side: {props.hero.biography.alignment}</p>
          </div>
          <div className="hero-appearance-container">
            <h3>Appearance</h3>
            <p>Gender: {props.hero.appearance.gender}</p>
            <p>Race: {props.hero.appearance.race}</p>
            <p>Height: {props.hero.appearance.height[0]}</p>
            <p>Weight: {props.hero.appearance.weight[0]}</p>
            <p>Eye Color: {props.hero.appearance["eye-color"]}</p>
            <p>Hair Color: {props.hero.appearance["hair-color"]}</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

//Using styled components to load the stat bars with an animation
const Styled = styled.div`
  @keyframes intelligence {
    0% {
      width: 0%;
    }
    100% {
      width: ${(props) => props.hero.powerstats.intelligence};
    }
  }

  @keyframes strength {
    0% {
      width: 0%;
    }
    100% {
      width: ${(props) => props.hero.powerstats.strength};
    }
  }

  @keyframes speed {
    0% {
      width: 0%;
    }
    100% {
      width: ${(props) => props.hero.powerstats.speed};
    }
  }

  @keyframes durability {
    0% {
      width: 0%;
    }
    100% {
      width: ${(props) => props.hero.powerstats.durability};
    }
  }

  @keyframes power {
    0% {
      width: 0%;
    }
    100% {
      width: ${(props) => props.hero.powerstats.power};
    }
  }

  @keyframes combat {
    0% {
      width: 0%;
    }
    100% {
      width: ${(props) => props.hero.powerstats.combat};
    }
  }
`;

const HeroCard = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Styled {...props}>
      <div id={props.hero.id} className="hero-card">
        <div
          className="img-container"
          style={{ backgroundImage: `url(${props.hero.image.url})` }}
        ></div>
        <h1>{props.hero.name}</h1>
        <div className="button-container">
          <Button onClick={() => props.updateHeroList(props.hero)}>
            Add To List
          </Button>
          <Button onClick={() => setModalShow(true)}>More Info</Button>
        </div>
        <div className="power-stats">
          <li>
            <h3>intelligence</h3>
            <span className="stat-bar">
              <span
                className="intelligence"
                style={{ width: `${props.hero.powerstats.intelligence}%` }}
              ></span>
            </span>
          </li>
          <li>
            <h3>strength</h3>
            <span className="stat-bar">
              <span
                className="strength"
                style={{ width: `${props.hero.powerstats.strength}% ` }}
              ></span>
            </span>
          </li>
          <li>
            <h3>speed</h3>
            <span className="stat-bar">
              <span
                className="speed"
                style={{ width: `${props.hero.powerstats.speed}%` }}
              ></span>
            </span>
          </li>
          <li>
            <h3>durability</h3>
            <span className="stat-bar">
              <span
                className="durability"
                style={{ width: `${props.hero.powerstats.durability}%` }}
              ></span>
            </span>
          </li>
          <li>
            <h3>power</h3>
            <span className="stat-bar">
              <span
                className="power"
                style={{ width: `${props.hero.powerstats.power}%` }}
              ></span>
            </span>
          </li>
          <li>
            <h3>combat</h3>
            <span className="stat-bar">
              <span
                className="combat"
                style={{ width: `${props.hero.powerstats.combat}%` }}
              ></span>
            </span>
          </li>
        </div>
        <ModalPopup
          {...props}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </Styled>
  );
};

export default HeroCard;
