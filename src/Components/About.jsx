import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Monir Hossen" },
    { id: 2, title: "Email:", text: "nerob0000@gmail.com" },
    { id: 3, title: "Phone:", text: "01756808137" },
    { id: 4, title: "Github", text: "Monirah00" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img"> </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                My name is Monir Hossen. I am a web developer. I have a passion
                for web development. I have a good knowledge of HTML,
                CSS,Bootstrap, JavaScript, React,and more. I am a self-taught
                developer.
              </div>
              <div className="about__info-p2">
                My study is about Diploma Engineering in Chandpur polytechic
                instute .... and graduate in 2021 of the World University of
                Bangladesh.
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
