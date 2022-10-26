import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";

const FormCreateUser = ({ setPopUp, openSide }) => {
  const [selectedValue, setSelectedValue] = useState(false);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <form className="form">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
        }}
        className="campos"
      >
        <div className="input-container" style={{ alignItems: "start" }}>
          <h1 className="title-form">Numero de orden</h1>
          <TextField
            required
            id="orden"
            label="N° de orden"
            className="input-ayuda-numero"
          />
        </div>
      </div>

      <div className="radio-input-container campos">
        <h1 className="title-form">Ayuda social</h1>
        <div className="radios-container">
          <div className="radio-container">
            <Radio
              checked={selectedValue === "tiene"}
              onChange={handleChange}
              value="tiene"
              name="radio-buttons"
              inputProps={{ "aria-label": "Tiene" }}
            />
            <p className="radio-text">Tiene ayuda social</p>
          </div>
          <div className="radio-container">
            <Radio
              checked={selectedValue === "notiene"}
              onChange={handleChange}
              value="notiene"
              name="radio-buttons"
              inputProps={{ "aria-label": "No tiene" }}
            />

            <p className="radio-text">No tiene ayuda social</p>
          </div>
        </div>
      </div>
      <div className="input-container campos">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div className="input-container">
            <h1 className="title-form">Nombre del responsable</h1>
            <TextField
              required
              id="responsable"
              label="Nombre"
              className="input-responsable"
            />
          </div>
          <div className="input-container">
            <h1 className="title-form">Apellido del responsable</h1>
            <TextField
              required
              id="responsable"
              label="Apellido"
              className="input-responsable"
            />
          </div>
          <div className="input-container">
            <h1 className="title-form">Telefono del responsable</h1>
            <TextField
              required
              id="responsable"
              label="Telefono"
              className="input-responsable"
            />
          </div>
        </div>
        <button className="button-crear">Crear</button>
      </div>
    </form>
  );
};

export default FormCreateUser;
