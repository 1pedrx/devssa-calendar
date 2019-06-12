import React from "react";
import { Modal, ButtonToolbar, Button } from "react-bootstrap";

import "./main.scss"; // webpack must be configured to do this

class Event extends React.Component {
  constructor(props) {
    super(props);
    // this.handleShow = this.handleShow.bind(this);
    // this.handleClose = this.handleClose.bind(this);
    // console.log("OOOK");
    this.state = {
      show: this.props.show
    };
  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.show !== this.state.show) {
      this.setState({ show: nextProps.show });
    }
  }

  handleClose = async () => {
    await this.setState({ show: false });
  };

  handleShow = async () => {
    await this.setState({ show: true });
  };

  render() {
    // console.log(this.props.show);
    return (
      <ButtonToolbar>
        <Modal
          size="lg"
          show={this.state.show}
          onHide={this.handleClose}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              {this.props.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.description}
            <br />
            Link do Evento:
            {this.props.event_url}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              style={{ width: "80%", margin: "auto" }}
              onClick={this.handleClose}
            >
              Close
            </Button>
            {/* <Button variant="primary">Save changes</Button> */}
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}
export default Event;
