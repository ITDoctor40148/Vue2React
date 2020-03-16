import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Footer from "../components/Footer";
import "../assets/css/footer.css";
import "./Contact.css";

class Contact extends React.Component {
  render() {
    return (
      <Container id="app">
        <Row>
          <Col>
            <form
              className="vue-form"
              action="mailto:m.anwar@gooddealsfinder.com?subject=Contact"
              method="post"
              encType="text/plain"
            >
              <fieldset>
                <div className="row">
                  <div className="col-75">
                    <label className="label" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      name="Name"
                      id="name"
                      required=""
                      v-model="name"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-75">
                    <label className="label" htmlFor="email">
                      Email
                    </label>
                    <input type="email" name="Email" id="email" required="" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-75">
                    <label className="label" htmlFor="Website Url">
                      Website Url
                    </label>
                    <input
                      type="text"
                      name="Website Url"
                      id="url"
                      required=""
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-75">
                    <label className="label" htmlFor="textarea">
                      Message
                    </label>
                    <textarea
                      className="message"
                      name="Message"
                      id="textarea"
                      required=""
                    ></textarea>
                  </div>
                </div>
                <div style={{display: "flex", justifyContent: "left"}}>
                    <input type="submit" value="Send Form"/>
                </div>  
              </fieldset>
            </form>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Contact;
