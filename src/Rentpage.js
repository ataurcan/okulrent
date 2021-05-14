import React from "react";
import "./Rentpage.css";
import Header from "./Header";
import Grid from "@material-ui/core/Grid";
import firebaseDB from "./firebase";
import firebase from "firebase";

function Rentpage() {
  function retrieveInfos() {
    let ref = firebase.database().ref("cars");
    ref.on("value", gotData);
  }
  function gotData(data) {
    let car = data.val();
    let keys = Object.keys(car);

    for (let i = 0; i < keys.length; i++) {
      let carData = keys[i];
      let model = car[carData].model;
      let imageURL = car[carData].imageURL;
      let vehicleClass = car[carData].vehicleClass;
      let capacity = car[carData].capacity;
      let price = car[carData].price;
      let gearType = car[carData].gearType;
      let carDescr = car[carData].carDescr;
      console.log(model);
      let infosResult = document.querySelector(".infosResults");
      infosResult.innerHTML += ` <div> <p className="">Name:${model} </p></div>`;
    }
  }

  /* const data = async () => {
    const enis = firebaseDB.database().ref("cars").orderByKey();
    const ege = await enis.once("value").then(function (snapshot) {
      var a = snapshot.child("/01").val();
      var b = snapshot.child("/02").val();
      var c = snapshot.child("/03").val();
      var d = snapshot.child("/04").val();
      var e = snapshot.child("/05").val();
      var f = snapshot.child("/06").val();
      var g = snapshot.child("/07").val();
      var k = snapshot.child("/08").val();
      var l = snapshot.child("/09").val();
      var m = snapshot.child("/10").val();
      const carArray = [a, b, c, d, e, f, g, k, l, m];
      return carArray;
    });
    return ege;
  };

  const amcıkAta = data().then(function bunaldım(x) {
    x.map((a) => <li>{a}</li>);
  });

  console.log(amcıkAta);
  */
  let contactInfo = firebase.database().ref("cars");

  return (
    <div className="rentpage">
      <Header />
      <div>
        <h1 className="title">RENT YOUR CAR</h1>
        <hr></hr>
      </div>
      <Grid container justify="center" alignItems="center"></Grid>
      <div className="infosResults"></div>
    </div>
  );
}

export default Rentpage;
