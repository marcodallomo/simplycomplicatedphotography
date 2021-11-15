import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal style={{ color: "lightblue", backgroundColor: "black" }} {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* contact form */}

        <div className="container">
          <h1>Contact me</h1>
          <form target="_blank" action="https://formsubmit.co/marco_dallomo@hotmail.com" method="POST">
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                  <input type="text" name="name" className="form-control" placeholder="Full Name" required />
                </div>
                <div class="col">
                  <input type="email" name="email" className="form-control" placeholder="Email Address" required />
                </div>
                <div class="col">
                  <input type="telephone" name="tel number" className="form-control" placeholder="Telephone number" />
                </div>
              </div>
            </div>
            <div class="form-group">
              <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
            </div>
            <button onClick={props.onHide} type="submit" className="btn btn-lg btn-success btn-block">
              Send <i class="bi bi-send" style={{ backgroundColor: "green" }}></i>
            </button>
          </form>
        </div>

        {/* contact form */}
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-sm btn-secondary btn-block" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function Contact() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <i onClick={() => setModalShow(true)} class="soc bi bi-envelope" alt="Contact me"></i>

      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Contact;
