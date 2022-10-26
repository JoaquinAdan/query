import React from "react";
import Client from "./Client";
import { useEffect, useState } from "react";
import Cards from "./Cards";
import { HiArrowUp } from "react-icons/hi";
import Searcher from "./Searcher";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchComponent = ({ openSide }) => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState(["id", true]);
  const [check, setCheck] = useState(true);
  const [loading, setLoading] = useState(true);

  const URL =
    "https://633ee4220dbc3309f3c04d34.mockapi.io/client-information/client-information";
  const callApi = async () => {
    setLoading(true);
    const response = await fetch(URL);
    const data = await response.json();
    data.map((e) => {
      let random = Math.random();
      let b = random < 0.5;
      e.payment = b;
      return e;
    });
    setUsers(data);
    setLoading(false);
    // console.log(data);
  };

  const searcher = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value)
  };

  const sorter = (field) => {
    setSortField([field, !sortField[1]]);
  };

  // console.log(users);
  const results = !search
    ? users
    : users.filter((dato) =>
        dato.cuit.toString().toLowerCase().includes(search.toLocaleLowerCase())
      );

  useEffect(() => {
    callApi();
  }, []);

  useEffect(() => {
    // console.log(sortField);
    users.sort((a, b) => {
      let primero = a[sortField[0]];
      let segundo = b[sortField[0]];
      if (sortField[0] === "id") {
        primero = parseInt(primero);
        segundo = parseInt(segundo);
      }
      if (sortField[1]) {
        // console.log("desc");
        return primero < segundo ? -1 : 1;
      } else {
        // console.log("asc");
        return primero > segundo ? -1 : 1;
      }
    });
    setUsers([...users]);
  }, [sortField]);

  const checkAll = () => {
    document
      .querySelectorAll("input[type=checkbox]")
      .forEach(function (checkElement) {
        checkElement.checked = true;
      });
  };
  const uncheckAll = () => {
    document
      .querySelectorAll("input[type=checkbox]")
      .forEach(function (checkElement) {
        checkElement.checked = false;
      });
  };
  const checked = () => {
    setCheck(!check);
    check ? checkAll() : uncheckAll();
  };

  return (
    <>
      {loading ? (
        <img
          src="spinner.svg"
          style={
            openSide
              ? {
                  transition: ".3s ease",
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: "200px",
                  right: "0",
                  margin: "auto",
                }
              : {
                  transition: ".3s ease",
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: "20px",
                  right: "0",
                  margin: "auto",
                }
          }
        />
      ) : (
        <div
          style={
            openSide
              ? { marginLeft: "200px", transition: ".3s ease" }
              : { marginLeft: "20px", transition: ".3s ease" }
          }
        >
          <Cards users={users} />
          <Searcher openSide={openSide} searcher={searcher} />
          <table
            className="table-container"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <thead>
              <tr>
                <th
                  onClick={() => sorter("id")}
                  style={{ cursor: "pointer" }}
                  className="data-head-user"
                >
                  Id
                  <HiArrowUp
                    style={
                      sortField[1] && sortField[0] === "id"
                        ? { transition: ".4s", transform: "rotate(180deg)" }
                        : { transition: ".4s", transform: "rotate(0deg)" }
                    }
                  />
                </th>
                <th
                  onClick={() => sorter("name")}
                  style={{ cursor: "pointer" }}
                  className="data-head-user"
                >
                  Nombre
                  <HiArrowUp
                    style={
                      sortField[1] && sortField[0] === "name"
                        ? { transition: ".4s", transform: "rotate(180deg)" }
                        : { transition: ".4s", transform: "rotate(0deg)" }
                    }
                  />
                </th>
                <th
                  onClick={() => sorter("cuit")}
                  style={{ cursor: "pointer", paddingLeft: "120px" }}
                  className="data-head-user"
                >
                  Cuit
                  <HiArrowUp
                    style={
                      sortField[1] && sortField[0] === "cuit"
                        ? { transition: ".4s", transform: "rotate(180deg)" }
                        : { transition: ".4s", transform: "rotate(0deg)" }
                    }
                  />
                </th>
                <th
                  onClick={() => sorter("datealta")}
                  style={{ cursor: "pointer" }}
                  className="data-head-user"
                >
                  Fecha Alta
                  <HiArrowUp
                    style={
                      sortField[1] && sortField[0] === "datealta"
                        ? { transition: ".4s", transform: "rotate(180deg)" }
                        : { transition: ".4s", transform: "rotate(0deg)" }
                    }
                  />
                </th>
                <th
                  onClick={() => {
                    sorter("datebaja");
                  }}
                  style={{ cursor: "pointer" }}
                  className="data-head-user"
                >
                  Fecha Baja
                  <HiArrowUp
                    style={
                      sortField[1] && sortField[0] === "datebaja"
                        ? { transition: ".4s", transform: "rotate(180deg)" }
                        : { transition: ".4s", transform: "rotate(0deg)" }
                    }
                  />
                </th>
                <th
                  onClick={() => sorter("baja")}
                  style={{ cursor: "pointer" }}
                  className="data-head-user"
                >
                  Baja
                  <HiArrowUp
                    style={
                      sortField[1] && sortField[0] === "baja"
                        ? { transition: ".4s", transform: "rotate(180deg)" }
                        : { transition: ".4s", transform: "rotate(0deg)" }
                    }
                  />
                </th>
                <th className="data-head-user">Más</th>
              </tr>
            </thead>

            <tbody>
              {/* <div className="table-container" style={{ width: "700px" }}> */}
              {results.map((user) => (
                <Client key={user.name} user={user} openSide={openSide} />
              ))}
              {/* </div> */}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default SearchComponent;
