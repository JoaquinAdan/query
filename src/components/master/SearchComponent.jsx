import React from "react";
import Client from "./Client";
import { useEffect, useState } from "react";
import Cards from "./Cards";
import { HiArrowUp } from "react-icons/hi";
import Searcher from "./Searcher";
import "bootstrap/dist/css/bootstrap.min.css";
import { callApi } from "../api";
import { useQuery } from "@tanstack/react-query";
import BotonBorrar from "./BotonBorrar";

const SearchComponent = ({ openSide }) => {

  const { data: users, isLoading: loading } = useQuery(["getUsers"], callApi);


  const [sortField, setSortField] = useState(["id", true]);
  const [check, setCheck] = useState(true);

  const searcher = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value)
  };

  const sorter = (field) => {
    setSortField([field, !sortField[1]]);
  };

  // console.log(users);

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
          <div
            style={{ display: "flex", flexDirection: "column", width: "600px" }}
          >
            <div
              style={{
                display: "flex",
                gap: "10%",
                justifyContent: "space-between",
              }}
            >
              <div>id</div>
              <div>nombre</div>
              <div>cuit</div>
              <div>fecha Alta</div>
              <div>Borrar</div>
            </div>
            <div>
              {users.map((user) => (
                <div
                  key={user.name}
                  style={{
                    display: "flex",
                    gap: "10%",
                    justifyContent: "space-between",
                  }}
                >
                  <div>{user.id}</div>
                  <div>{user.name}</div>
                  <div>{user.cuit}</div>
                  <div>{user.datealta.slice(0, 10)}</div>
                  <BotonBorrar user={user}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchComponent;
