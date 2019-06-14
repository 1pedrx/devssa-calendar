import React from "react";
import { Modal, ButtonToolbar, Button } from "react-bootstrap";

import "./css/main.scss"; // webpack must be configured to do this

class Event extends React.Component {
  constructor(props) {
    super(props);
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
            <a
              href={this.props.event_url}
              className="btn btn-primary btn-lg btn-block"
            >
              Ir pro site do evento
            </a>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}
export default Event;
