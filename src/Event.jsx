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
    console.log(this.props.color);
    return (
      <ButtonToolbar>
        <Modal
          size="lg"
          show={this.state.show}
          onHide={this.handleClose}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header
            closeButton
            style={
              this.props.color != "black" && this.props.color != ""
                ? {
                    backgroundColor: this.props.color,
                    color: "white",
                    textTransform: "capitalize",
                    fontWeight: 800
                  }
                : {
                    backgroundColor: "white",
                    color: "black",
                    textTransform: "capitalize",
                    fontWeight: 800
                  }
            }
          >
            <Modal.Title id="event-header">{this.props.title}</Modal.Title>
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
              id="event-link"
              className="btn btn-primary btn-lg btn-block"
              style={
                this.props.color != "black" && this.props.color != ""
                  ? {
                      backgroundColor: this.props.color,
                      color: "white",
                      borderColor: this.props.color
                      // textTransform: "capitalize",
                      // fontWeight: 800
                    }
                  : {}
              }
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
