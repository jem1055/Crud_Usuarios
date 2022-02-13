import React from "react";
import { Table, Form, Card, Button } from "react-bootstrap";
import axios from "axios";
import NavegadorAdmin from "../NavergadorTercero/navegadorTercero";

class Administrador extends React.Component {
  constructor() {
    super();
    this.state = { UniqueId: "", Names: "", SureNames: "", BirthDate: "", Address: "", EmailAddress: "", IdentificationNumber: "", PhoneNumber: "", list: [] };
  }

  componentDidMount() {
    this.consultarServicios();
  }

  consultarServicios = async () => {
    this.setState({ list: [] });
    const url = await axios.get('https://customerstestapi.azurewebsites.net/api/Get', { params: { UserId: 1 } });
    this.setState({ list: url.data.list });

  };

  deleteServicio = async (UniqueId) => {

    let data = {
      customerId: UniqueId,
      userId: UniqueId,
      parametroPrueba1: "true"
    };


    const url = "https://customerstestapi.azurewebsites.net/api/delete";


    await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

      .then((responseJson) => {
        console.log(responseJson);
        this.consultarServicios();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  crearServicio = async () => {

    let data = {
      customer: {
        uniqueId: 0,
        names: this.state.Names,
        sureNames: this.state.SureNames,
        birthDate: this.state.BirthDate,
        address: this.state.Address,
        emailAddress: this.state.EmailAddress,
        identificationNumber: this.state.IdentificationNumber,
        phoneNumber: this.state.PhoneNumber,
      },
      UserId: 1,
      parametroPrueba1: "true",
    };

    const url = 'https://customerstestapi.azurewebsites.net/api/create';

    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((responseJson) => {
        console.log(responseJson);
        this.clean()
        this.consultarServicios();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  updateServicio = async () => {
    let data = {
      customer: {
        uniqueId: this.state.UniqueId,
        names: this.state.Names,
        sureNames: this.state.SureNames,
        birthDate: this.state.BirthDate,
        address: this.state.Address,
        emailAddress: this.state.EmailAddress,
        identificationNumber: this.state.IdentificationNumber,
        phoneNumber: this.state.PhoneNumber,
      },
      UserId: this.state.UniqueId,
      parametroPrueba1: "true",
    };
    console.log(data)
    const url = "https://customerstestapi.azurewebsites.net/api/update";

    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

      .then((responseJson) => {
        console.log(responseJson);
        this.clean();
        this.consultarServicios();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  buscarUsuario = async () => {

    let data = { uniqueId: this.state.UniqueId }

    const url = await axios.get('https://customerstestapi.azurewebsites.net/api/GetById', { params: { Id: data.uniqueId, UserId: data.uniqueId } });
    this.setState({ UniqueId: url.data.uniqueId });
    this.setState({ Names: url.data.names });
    this.setState({ SureNames: url.data.sureNames });
    this.setState({ BirthDate: url.data.birthDate });
    this.setState({ Address: url.data.address });
    this.setState({ EmailAddress: url.data.emailAddress });
    this.setState({ IdentificationNumber: url.data.identificationNumber });
    this.setState({ PhoneNumber: url.data.phoneNumber });

  };


  enviar(UniqueId, Names, SureNames, BirthDate, Address, EmailAddress, IdentificationNumber, PhoneNumber) {
    this.setState({ UniqueId: UniqueId });
    this.setState({ Names: Names });
    this.setState({ SureNames: SureNames });
    this.setState({ BirthDate: BirthDate });
    this.setState({ Address: Address });
    this.setState({ EmailAddress: EmailAddress });
    this.setState({ IdentificationNumber: IdentificationNumber });
    this.setState({ PhoneNumber: PhoneNumber });
  }

  clean() {
    this.setState({ UniqueId: '' });
    this.setState({ Names: '' });
    this.setState({ SureNames: '' });
    this.setState({ BirthDate: '' });
    this.setState({ Address: '' });
    this.setState({ EmailAddress: '' });
    this.setState({ IdentificationNumber: '' });
    this.setState({ PhoneNumber: '' });
  }



  render() {
    return (
      <div>
        <NavegadorAdmin></NavegadorAdmin>
        <div className="container  mt-5">
          <h1>Administrador Usuarios</h1>
          <div className="row">
            <div className="col-sm-12">
              <Card>
                <Card.Body>
                  <Card.Title>Registro de Usuarios</Card.Title>
                  <Form>
                    <div className="row">
                      <div className="col-sm-4">
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Nombre:</Form.Label>
                          <Form.Control
                            value={this.state.Names}
                            onChange={(e) =>
                              this.setState({ Names: e.target.value })
                            }
                            type="text"
                            placeholder="Ingrese Nombre"
                          />
                        </Form.Group>
                      </div>

                      <div className="col-sm-4">
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Apellido:</Form.Label>
                          <Form.Control
                            value={this.state.SureNames}
                            onChange={(e) =>
                              this.setState({ SureNames: e.target.value })
                            }
                            type="text"
                            placeholder="Ingrese Apellido"
                          />
                        </Form.Group>
                      </div>

                      <div className="col-sm-4">
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Fecha de Nacimiento:</Form.Label>
                          <Form.Control
                            value={this.state.BirthDate}
                            onChange={(e) =>
                              this.setState({ BirthDate: e.target.value })
                            }
                            type="text"
                            placeholder="Ingrese Fecha de Nacimiento"
                          />
                        </Form.Group>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-4">
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Direccion:</Form.Label>
                          <Form.Control
                            value={this.state.Address}
                            onChange={(e) =>
                              this.setState({ Address: e.target.value })
                            }
                            type="text"
                            placeholder="Ingrese Direccion"
                          />
                        </Form.Group>
                      </div>

                      <div className="col-sm-4">
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Email:</Form.Label>
                          <Form.Control
                            value={this.state.EmailAddress}
                            onChange={(e) =>
                              this.setState({ EmailAddress: e.target.value })
                            }
                            type="text"
                            placeholder="Ingrese Email"
                          />
                        </Form.Group>
                      </div>

                      <div className="col-sm-4">
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Documento de Identidad:</Form.Label>
                          <Form.Control
                            value={this.state.IdentificationNumber}
                            onChange={(e) =>
                              this.setState({ IdentificationNumber: e.target.value })
                            }
                            type="text"
                            placeholder="Ingrese Documento de Identidad"
                          />
                        </Form.Group>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-4">
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Telefono:</Form.Label>
                          <Form.Control
                            value={this.state.PhoneNumber}
                            onChange={(e) =>
                              this.setState({ PhoneNumber: e.target.value })
                            }
                            type="text"
                            placeholder="Ingrese Telefono"
                          />
                        </Form.Group>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-1">
                        <Button
                          variant="outline-primary"
                          type="button"
                          onClick={this.crearServicio}
                        >
                          Guardar
                        </Button>
                      </div>

                      <div className="col-sm-10">
                        <Button

                          onClick={this.updateServicio}
                          variant="outline-info"
                          type="button"
                        >
                          Actualizar
                        </Button>
                      </div>

                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <Card>
                <Card.Body>
                  <Card.Title>Buscar Usuario</Card.Title>
                  <Form>
                    <div className="row">
                      <div className="col-sm-4">
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>UniqueId:</Form.Label>
                          <Form.Control
                            value={this.state.UniqueId}
                            onChange={(e) =>
                              this.setState({ UniqueId: e.target.value })
                            }
                            type="text"
                            placeholder="Ingrese UniqueId"
                          />
                        </Form.Group>
                      </div>

                    </div>

                    <div className="row">
                      <div className="col-sm-1">
                        <Button
                          variant="outline-primary"
                          type="button"
                          onClick={this.buscarUsuario}
                        >
                          Buscar
                        </Button>
                      </div>

                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </div>


          <div className="col-sm-12 mt-5">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>UniqueId</th>
                  <th>Name</th>
                  <th>SureNames</th>
                  <th>BirthDate</th>
                  <th>Address</th>
                  <th>EmailAddress</th>
                  <th>IdentificationNumber</th>
                  <th>PhoneNumber</th>
                  <th>Actualizar</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((e, index) => {
                  return (
                    <tr key={index}>
                      <th>{e.UniqueId}</th>
                      <th>{e.Names}</th>
                      <th>{e.SureNames}</th>
                      <th>{e.BirthDate}</th>
                      <th>{e.Address}</th>
                      <th>{e.EmailAddress}</th>
                      <th>{e.IdentificationNumber}</th>
                      <th>{e.PhoneNumber}</th>
                      <th>
                        <Button
                          onClick={() =>
                            this.enviar(
                              e.UniqueId,
                              e.Names,
                              e.SureNames,
                              e.BirthDate,
                              e.Address,
                              e.EmailAddress,
                              e.IdentificationNumber,
                              e.PhoneNumber
                            )
                          }
                          variant="outline-success"
                        >
                          Actualizar
                        </Button>
                      </th>
                      <th>
                        <Button
                          onClick={() => this.deleteServicio(e.UniqueId)}
                          variant="outline-danger"
                        >
                          Eliminar
                        </Button>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>

      </div >
    );
  }
}
export default Administrador;
