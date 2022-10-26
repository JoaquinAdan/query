import React from "react";
import TextField from "@mui/material/TextField";

const ClientMore = ({ setMore, openSide }) => {
  return (
    <tr>
      <td>
        <div
          className="form-container-edit"
          style={openSide ? { left: "200px" } : { left: "20px" }}
        >
          <span
            className="cross"
            onClick={() => {
              setMore(false);
              false;
            }}
          >
            X
          </span>
          <div className="input-container-observacion">
            <h1 className="title-form-observacion"> Observaciones</h1>
            <TextField
              id="outlined-multiline-static"
              label="Observaciones"
              multiline
              rows={3}
            //   defaultValue="Default Value"
              className="input-observaciones"
            />
          </div>
          <div className="input-container-liquidacion">
            <h1 className="title-form-observacion"> Liquidación</h1>
            <TextField
              id="outlined-helperText"
              label="Cuota"
            //   defaultValue="Default Value"
              helperText="03"
              className="input-liquidacion"
            />
            <TextField
              id="outlined-helperText"
              label="Periodo"
            //   defaultValue="Default Value"
              helperText="17/04/23"
              className="input-liquidacion"
            />
            <TextField
              id="outlined-helperText"
              label="Importe"
            //   defaultValue="Default Value"
              helperText="1656549889"
              className="input-liquidacion"
            />
          </div>
          <button className="button-crear">Modificar</button>
        </div>
        <div
          className="background-edit"
          onClick={() => {
            setMore(false);
          }}
        ></div>
      </td>
    </tr>
  );
};

export default ClientMore;
