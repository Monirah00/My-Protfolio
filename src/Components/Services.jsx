import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaJs,
  FaReact,
  FaGithub,
} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "SKILL",
    subHeading: "My SKILL",
    text: "I am Monir Hossen, professional web developer with long time experience in this field​",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaHtml5 className="commonIcons" />,
      heading: "HTML",
      text: "HTML stands for Hyper Text Markup Language, HTML is the standard markup language for creating Web pages, HTML describes the structure of a Web page,HTML consists of a series of elements",
    },
    {
      id: 2,
      icon: <FaCss3 className="commonIcons" />,
      heading: "CSS",
      text: "CSS stands for Cascading Style Sheets,CSS describes how HTML elements are to be displayed on screen, paper, or in other media,External stylesheets are stored in CSS files",
    },
    {
      id: 3,
      icon: <FaBootstrap className="commonIcons" />,
      heading: "BOOTSTRAP",
      text: "Bootstrap is a free front-end framework for faster and easier web development,Bootstrap includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels and many other, as well as optional JavaScript plugins",
    },
    {
      id: 4,
      icon: <FaJs className="commonIcons" />,
      heading: "JAVASCRIPT",
      text: "JavaScript is the world's most popular programming language,JavaScript is the world's most popular programming language,JavaScript is easy to learn.",
    },
    {
      id: 5,
      icon: <FaReact className="commonIcons" />,
      heading: "REACT JS",
      text: "React is a JavaScript library for building user interfaces,React is used to build single page applications,React allows us to create reusable UI components.",
    },
    {
      id: 6,
      icon: <FaGithub className="commonIcons" />,
      heading: "GIT",
      text: "Git is a version control system,Git helps you keep track of code changes,Git is used to collaborate on code",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
