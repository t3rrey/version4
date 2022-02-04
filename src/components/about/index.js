import T from "prop-types";
import React from "react";
import pkg from "../../../package.json";
import { createPortal } from "react-dom";

const About = ({ parent }) => {
  if (!parent.current || !parent.current.domElement) return null;
  return createPortal(
    <li
      className="about"
      style={{
        lineHeight: 1.5,
      }}
    >
      <h2> {`version4 v${pkg.version}`} </h2>
      Made by{" "}
      <a
        style={{ fontWeight: "bold", color: "white" }}
        href="https://twitter.com/lachlanterrey"
        target="_blank"
        rel="noopener noreferrer"
      >
        Lachlan
      </a>
      <p>
        Check out the repo on{" "}
        <a
          style={{ fontWeight: "bold", color: "white" }}
          href="https://github.com/t3rrey"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        .
      </p>
      <p>Copyright 2022 &#169;</p>
    </li>,
    parent.current.domElement.querySelector("ul")
  );
};
About.propTypes = {
  parent: T.shape({
    current: T.object,
  }),
};

export default About;
