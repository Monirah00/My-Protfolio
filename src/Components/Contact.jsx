import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
  };

  const sendMessage = (e) => {
    if (e) e.preventDefault();
    const message = inputs.message;
    const messageEnter = message
      .replace(/\r\n|\r|\n/g, "%0D%0A")
      .replace(" ", "%20");
    const request =
      "mailto:YOUREMAIL?subject=Email%20from%20" +
      inputs.name +
      "/" +
      inputs.email +
      "&body=" +
      messageEnter;
    document.location = request;
  };
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row h-500 ">
            <div className="col-6">
              <ul className="contactCircles">
                <li>
                  <FaFacebookF className="contactIcon" />
                </li>
                <li>
                  <FaTwitter className="contactIcon" />
                </li>
                <li>
                  <FaPinterest className="contactIcon" />
                </li>
                <li>
                  <FaInstagram className="contactIcon" />
                </li>
              </ul>
              <form onSubmit={(e) => sendMessage(e)} className="contact__form">
                <input
                  value={inputs.name}
                  onChange={(e) => handleInputChange(e)}
                  type="text"
                  name="name"
                  placeholder="name"
                  title="Your name"
                  maxLength="50"
                  required
                />
                <input
                  value={inputs.email}
                  onChange={(e) => handleInputChange(e)}
                  type="email"
                  name="email"
                  placeholder="email"
                  title="Your email"
                  maxLength="50"
                  required
                />
                <textarea
                  value={inputs.message}
                  onChange={(e) => handleInputChange(e)}
                  type="text"
                  name="message"
                  placeholder="message"
                  title="Your message"
                  maxLength="550"
                  required
                />
                <input type="submit" value="send message" />
              </form>
            </div>
            <div className="col-6">
              <div className="Alladdress">
                <h2 className="Address">My Address</h2>
                <hr />
                <p className="Details">Present Home : Dhanmondi-32</p>
                <p className="Details">House : 58/C,Shukrabad</p>
                <p className="Details">Email : nerob0000@gmail.com</p>
                <p className="Details">GitHub : Monirah00</p>
                <p className="Details">Contact No : 01756808137</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
