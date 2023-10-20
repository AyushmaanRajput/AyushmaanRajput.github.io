import React from "react";
import styled from "styled-components";
import { Reveal } from "./common/Reveal";

export const Projects = () => {
  return (
    <PROJECTS id="projects">
      <Reveal>
        <h2>Some of my <i>*</i>work<i>*</i></h2>
      </Reveal>
      <div className="projects-container-design">
        <div className='projects-design'>
          <img src="" alt="" />
          <div className="projects-design-content">
            <h5></h5>
          </div>
        </div>
      </div>
      <div className="projects-container-development">
        <div className="project-card">
          <img src="" alt="" />
          <h3 className="project-title">Travelo (Travel Agency Website)</h3>
          <h4>
            <a
              href="https://github.com/AyushmaanRajput/knowing-ladybug-5395"
              target="_blank"
              className="project-github-link"
            >
              Codebase
            </a>
          </h4>
          <h4>
            <a
              href="https://stately-cactus-6c6a66.netlify.app/"
              className="project-deployed-link"
              target="_blank"
            >
              Live Website
            </a>
          </h4>
          <p className="project-description">
            Your gateway to hassle-free travel planning and bookings.
          </p>
          <p className="project-teckstack">
            <strong>HTML</strong>
            <strong>CSS</strong>
            <strong>Javascript</strong>
          </p>
          <a href="#">Project Explaination</a>
        </div>
        <div className="project-card">
          <img src="" alt="" />
          <h3 className="project-title">
            Swiftpay (user-friendly finance website)
          </h3>
          <h4>
            <a
              href="https://github.com/AyushmaanRajput/warlike-current-5989"
              target="_blank"
              className="project-github-link"
            >
              Codebase
            </a>
          </h4>
          <h4>
            <a
              href="https://warlike-current-5989-gamma.vercel.app/"
              className="project-deployed-link"
              target="_blank"
            >
              Live Website
            </a>
          </h4>
          <p className="project-description">
            Swiftpay is a dynamic and user-friendly finance website that
            revolutionizes the way you manage your financial transactions. With
            Swiftpay, you can seamlessly handle subscriptions, send and receive
            money from your contacts, and witness real-time transaction updates
            right on your user interface.
          </p>
          <p className="project-teckstack">
            <strong>React</strong>
            <strong>Redux</strong>
            <strong>CSS (Styled Components)</strong>
          </p>
          <a href="#">Project Explaination</a>
        </div>
        <div className="project-card">
          <img src="" alt="" />
          <h3 className="project-title">Travelo (Travel Agency Website)</h3>
          <h4>
            <a
              href="https://github.com/AyushmaanRajput/knowing-ladybug-5395"
              target="_blank"
              className="project-github-link"
            >
              Codebase
            </a>
          </h4>
          <h4>
            <a
              href="https://stately-cactus-6c6a66.netlify.app/"
              className="project-deployed-link"
              target="_blank"
            >
              Live Website
            </a>
          </h4>
          <p className="project-description">
            Your gateway to hassle-free travel planning and bookings.
          </p>
          <p className="project-teckstack">
            <strong>HTML</strong>
            <strong>CSS</strong>
            <strong>Javascript</strong>
          </p>
          <a href="#">Project Explaination</a>
        </div>
        <div className="project-card">
          <img src="" alt="" />
          <h3 className="project-title">
            Swiftpay (user-friendly finance website)
          </h3>
          <h4>
            <a
              href="https://github.com/AyushmaanRajput/warlike-current-5989"
              target="_blank"
              className="project-github-link"
            >
              Codebase
            </a>
          </h4>
          <h4>
            <a
              href="https://warlike-current-5989-gamma.vercel.app/"
              className="project-deployed-link"
              target="_blank"
            >
              Live Website
            </a>
          </h4>
          <p className="project-description">
            Swiftpay is a dynamic and user-friendly finance website that
            revolutionizes the way you manage your financial transactions. With
            Swiftpay, you can seamlessly handle subscriptions, send and receive
            money from your contacts, and witness real-time transaction updates
            right on your user interface.
          </p>
          <p className="project-teckstack">
            <strong>React</strong>
            <strong>Redux</strong>
            <strong>CSS (Styled Components)</strong>
          </p>
          <a href="#">Project Explaination</a>
        </div>
      </div>
    </PROJECTS>
  );
};

const PROJECTS = styled.section``;
