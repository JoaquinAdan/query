import React, { useState } from "react";
import FormCreateUser from "./FormCreateUser";
import TextField from "@mui/material/TextField";

const Searcher = ({ searcher, openSide }) => {
  const [popUp, setPopUp] = useState(false);
  const [popUpPage, setPopUpPage] = useState(false);
  const [idContribuyente, setIdContribuyente] = useState("");
  const [selected, setSelected] = useState("");

  const handleIdChange = (e) => {
    // console.log(e.target.value);
    setIdContribuyente(e.target.value);
  };
  return (
    <div className="searcher-container">
      <input
        onChange={searcher}
        type="text"
        placeholder="Buscar por cuit"
        className="form-control"
      />
      <div className="actions-container">
        <button
          className="button-list actions"
          onClick={() => setPopUp(!popUp)}
          style={{ fontWeight: "bold" }}
        >
          +
        </button>
      </div>
      {popUp ? (
        <>
          <div
            className="form-container-grandpa"
            style={openSide ? { left: "200px" } : { left: "20px" }}
          >
            <span
              className="cross"
              onClick={() => {
                setPopUp(false);
                setPopUpPage(false);
              }}
            >
              X
            </span>
            {popUpPage === false ? (
              <form className="form form-contribuyente">
                <div
                  className="input-container input-contribuyente"
                  style={{ alignItems: "start" }}
                >
                  <h1 className="title-form">Numero de contribuyente</h1>
                  <TextField
                    required
                    onChange={handleIdChange}
                    id="contribuyente"
                    label="Contribuyente Id"
                    className="input-ayuda-numero"
                  />
                </div>
                <table className="table-contribuyente">
                  <thead className="thead-contribuyente">
                    <th>Nombre</th>
                    <th>Cuit</th>
                  </thead>
                  <tbody className="tbody-contribuyente">
                    <tr
                      style={
                        selected === "Fernando Aguila"
                          ? { backgroundColor: "#1c87e580" }
                          : null
                      }
                      className="tbody-line-contribuyente"
                      onClick={() => setSelected("Fernando Aguila")}
                    >
                      <td className="tbody-name">Fernando Aguila</td>
                      <td className="tbody-cuit">123456789</td>
                    </tr>
                    <tr
                      style={
                        selected === "Teo Gutierrez"
                          ? { backgroundColor: "#1c87e580" }
                          : null
                      }
                      className="tbody-line-contribuyente"
                      onClick={() => setSelected("Teo Gutierrez")}
                    >
                      <td className="tbody-name">Teo Gutierrez</td>
                      <td className="tbody-cuit">123456789</td>
                    </tr>
                    <tr
                      style={
                        selected === "Botella de Plastico"
                          ? { backgroundColor: "#1c87e580" }
                          : null
                      }
                      className="tbody-line-contribuyente"
                      onClick={() => setSelected("Botella de Plastico")}
                    >
                      <td className="tbody-name">Botella de Plastico</td>
                      <td className="tbody-cuit">123456789</td>
                    </tr>
                  </tbody>
                </table>
                <div style={{ alignSelf: "flex-start", paddingLeft: "5%" }}>
                  <button
                    className="button-crear-contribuyente"
                    style={
                      !selected || idContribuyente === ""
                        ? { backgroundColor: "gray", cursor: "auto" }
                        : null
                    }
                    onClick={() => {
                      if (selected !== "" && idContribuyente !== "") {
                        setPopUpPage(!popUpPage);
                      }
                    }}
                  >
                    Siguiente
                  </button>
                </div>
              </form>
            ) : (
              <FormCreateUser setPopUp={setPopUp} openSide={openSide} />
            )}
          </div>
          <div
            className="background-form"
            onClick={() => {
              setPopUp(false);
              setPopUpPage(false);
            }}
          ></div>
        </>
      ) : null}
    </div>
  );
};

export default Searcher;
