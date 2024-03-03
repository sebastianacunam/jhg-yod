import React from "react";

class SubirImagenes extends React.Component {
  constructor(props) {
    super(props);
    this.coverInputRef = React.createRef();
    this.profileInputRef = React.createRef();
  }

  clickPortada = () => {
    this.coverInputRef.current.click();
  };

  clickPerfil= () => {
    this.profileInputRef.current.click();
  };

  seleccionarArchivoPortada = (event) => {
    const file = event.target.files[0];
    console.log("Imagen de portada seleccionada:", file);
  };

  seleccionarArchivoPerfil = (event) => {
    const file = event.target.files[0];
    console.log("Imagen de perfil seleccionada:", file);
  };

  render() {
    return (
      <div>
        <button className='custom-button' onClick={this.clickPortada}>
          Seleccionar Imagen de portada
        </button>
        <input
          type='file'
          ref={this.coverInputRef}
          style={{ display: "none" }}
          onChange={this.seleccionarArchivoPortada}
        />
        <button
          className='custom-button'
          onClick={this.clickPerfil}>
          Seleccionar Imagen de perfil
        </button>
        <input
          type='file'
          ref={this.profileInputRef}
          style={{ display: "none" }}
          onChange={this.seleccionarArchivoPerfil}
        />
      </div>
    );
  }
}

export default SubirImagenes;
