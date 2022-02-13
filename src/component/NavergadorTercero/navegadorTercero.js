import React from "react";
import { Navbar, Button, Nav, Form } from "react-bootstrap";

class NavegadorAdmin extends React.Component {
  home = () => {
    window.location.href = "/";
  };

  cerrarSesion = () => {
    window.location.href = "/";
  };

  registro = () => {
    window.location.href = "/registro";
  };

  render() {
    return (
      <div>
        <Navbar bg="dark" expand="lg">
          <Button onClick={this.home} variant="btn btn-dark ">
            Servicio Salud
          </Button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Form inline>
              <Button onClick={this.cerrarSesion} variant="outline-danger">
                Cerrar sesion
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavegadorAdmin;
