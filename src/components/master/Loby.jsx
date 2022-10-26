import SearchComponent from "./SearchComponent";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsBox } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
import TestComponent from "./TestComponent";
import House from "./House";
import "../../Loby.css";
import { Link } from "react-router-dom";

function Loby() {
  const [openSide, setOpenSide] = useState(false);
  const [changePage, setChangePage] = useState("");
  return (
    <div
      id="home"
      style={{
        margin: "auto",
        textAlign: "center",
        maxWidth: "1280px",
        height:"90vh",
        marginTop:"40px",
        marginBottom:"-40px"
      }}
    >
      <div className="side-container">
        <GiHamburgerMenu
          className="hamburger"
          onClick={() => setOpenSide(!openSide)}
          style={openSide ? { width: "200px" } : null}
        />
        {openSide ? (
          <div className="icon-container">
            <Link style={{color:"#fff"}} to="/">
              <FiLogOut
                className="icon-side"
                style={{ transform: "scale(-1)" }}
              />
            </Link>
            {/* <FiLogOut
              className="icon-side"
              onClick={() => (location.href = "http://localhost:5173/")}
              style={{ transform: "scale(-1)" }}
            /> */}
            <HiOutlineHome
              className="icon-side"
              onClick={() => setChangePage("")}
            />
            <BsBox
              className="icon-side"
              onClick={() => setChangePage("test")}
            />
            <BsPeopleFill
              className="icon-side"
              onClick={() => setChangePage("abuelos")}
            />
          </div>
        ) : null}
      </div>
      {changePage === "" ? (
        <House openSide={openSide} />
      ) : changePage === "abuelos" ? (
        <SearchComponent openSide={openSide} />
      ) : changePage === "test" ? (
        <TestComponent openSide={openSide} />
      ) : null}
    </div>
  );
}

export default Loby;
