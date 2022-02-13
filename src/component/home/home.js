import React from "react";
import "./home.css";
import Navegador from "../navegador/navegador";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navegador></Navegador>

        <section className="hero pt-3">
          <div>
            <header>
              <h1 className="titulo ">CALI SALUD</h1>
            </header>
          </div>
          <div className="nav-bg">
            <nav className="navegacion-principal contenedor"></nav>
          </div>

          <div className="my-5">
            <h2>Somos los mejores en prestasion de servicios de salud</h2>
          </div>
          <div className="contenido-hero  d-flex justify-content-center"></div>
        </section>
      </div>
    );
  }
}

export default Home;
