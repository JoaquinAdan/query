import React from "react";
import { useState, useEffect } from "react";
// import { GiPadlockOpen, GiPadlock } from "react-icons/gi";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

const Form = () => {
  const initialState = "";
  const [inputNameText, setInputNameText] = useState(initialState);
  const [inputLastNameText, setInputLastNameText] = useState(initialState);
  const [selected, setSelected] = useState("");
  // const [nombre, setNombre] = useState("");
  // const [apellido, setApellido] = useState("");
  const [validation, setValidation] = useState(false);
  const [error, setError] = useState(false);

  //MANEJADOR DE INPUTS
  const inputN = document.getElementById("input-name");
  const inputLN = document.getElementById("input-last-name");

  const dependencieChange =
    inputNameText !== "" &&
    inputLastNameText !== "" &&
    inputNameText != null &&
    inputLastNameText != null;

    const dependencieChangeEffect =
    inputNameText !== "" &&
    inputLastNameText !== "" 

  const handleInputNameChange = (e) => {
    // const text = e.target.value;
    // setInputNameText(text);
    if (dependencieChange) {
      setValidation(true);
    }
    if (inputN.value === "") {
      setValidation(false);
    }
    setInputNameText(inputN.value);
    // console.log(text);
  };

  const handleInputLastNameChange = (e) => {
    // const text = e.target.value;
    // setInputLastNameText(text);
    if (dependencieChange) {
      setValidation(true);
    }
    if (inputLN.value === "") {
      setValidation(false);
    }
    setInputLastNameText(inputLN.value);
    // console.log(text);
  };

  const handleCheckboxChange = (e) => {
    setSelected(e.target.checked);
    // console.log(e.target.checked);

    if (e.target.checked === false) {
      localStorage.removeItem("nombre", inputNameText);
      localStorage.removeItem("apellido", inputLastNameText);
      localStorage.setItem("toggle-switch", false);
    }
  };

  //GUARDAR INFORMACION EN LOCAL STORAGE Y VALIDACION DE CAMPOS
  // console.log(inputLastNameText);
  const dependencieSave =
    inputNameText !== initialState &&
    inputLastNameText !== initialState &&
    inputNameText != null &&
    inputLastNameText != null;

  const saveData = () => {
    if (dependencieSave) {
      if (selected === true) {
        localStorage.setItem("nombre", inputNameText);
        localStorage.setItem("apellido", inputLastNameText);
      }
      if (inputNameText !== "" && inputLastNameText !== "") {
        localStorage.setItem("toggle-switch", selected === true);
      }

      // alert("has guardado tu nombre");
      // location.href = "http://127.0.0.1:5173/";
    } else {
      setTimeout(() => {
        setError(true);
      }, 0);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  // RECIBIR INFORMACION DE LOCAL STORAGE

  const getNameData = () => {
    return localStorage.getItem("nombre");
  };

  const getLastNameData = () => {
    return localStorage.getItem("apellido");
  };

  const getToggleData = () => {
    return localStorage.getItem("toggle-switch") === "true";
  };

  useEffect(() => {
    if (window.localStorage.length === 1) {
      const inputLN = document.getElementById("input-last-name");
      const inputN = document.getElementById("input-name");
      if (inputLN.value === "" || inputN.value === "") {
        setInputLastNameText(inputLastNameText);
        setInputNameText(inputNameText);
    } else {
        setInputLastNameText(inputLN.value);
        setInputNameText(inputN.value);
      }
    } else {
      // setNombre(getNameData());
      setInputNameText(getNameData());
      // setApellido(getLastNameData());
      setInputLastNameText(getLastNameData());
      setSelected(getToggleData());
    }
  }, []);
  useEffect(()=>{
    if (dependencieChangeEffect) {
        setValidation(true);
    } else {
        setValidation(false)
    }
  },[inputNameText, inputLastNameText])
  // console.log(selected);

  //JSX
  //192.168.10.82
  //:44320
  return (
    <div>
      <div className="input-container">
        <TextField
          error={error ? true : false}
          id="input-name"
          // label={selected ? inputNameText : "Nombre"}
          label="Nombre"
          variant="standard"
          onChange={handleInputNameChange}
          className="input"
          value={selected ? inputNameText : inputNameText}
        />
      </div>
      <div className="input-container">
        <TextField
          error={error ? true : false}
          id="input-last-name"
          // label={selected ? inputLastNameText : "Apellido"}
          label="Apellido"
          variant="standard"
          onChange={handleInputLastNameChange}
          className="input"
          value={selected ? inputLastNameText : inputLastNameText}
        />
      </div>
      {error ? (
        <div className="error-relative">
          <div className="error-container">
            <span className="error">Debe completar los campos</span>
          </div>
        </div>
      ) : null}
      <div className="actives-container">
        <div className="checkbox-container">
          <input
            type="checkbox"
            className="checkbox"
            // onClick={() => setCheck(!check)}
            onChange={handleCheckboxChange}
            checked={selected}
          />
          <span className="span-text">Recordar usuario</span>
        </div>
        {/* <button className="button" onClick={saveData}>
          INGRESAR
        </button> */}
        <Link
          className="button"
          onClick={() => {
            // changePage();
            saveData();
          }}
          to={validation ? "/home" : null}
        >
          INGRESAR
        </Link>
      </div>
    </div>
  );
};
export default Form;
