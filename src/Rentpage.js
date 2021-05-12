import React from "react";
import "./Rentpage.css";
import Header from "./Header";
import SearchIcon from "@material-ui/icons/Search";
function Rentpage() {
  return (
    <div className="rentpage">
      <Header> </Header>
      <div>
        <h1 className="title">RENT YOUR CAR</h1>
        <hr></hr>
      </div>
      <div className="main">
        <input
          className="textfield"
          type="text"
          name="box"
          placeholder="search"
        ></input>
        <SearchIcon className="button"></SearchIcon>
      </div>
    </div>
  );
}

export default Rentpage;
