import React, { useState, useEffect } from "react";
import "./Rentpage.css";
import Header from "./Header";
import Grid from "@material-ui/core/Grid";
import firebaseDB from "./firebase";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import "./Login";

const useStyles = makeStyles({
  root: {
    maxWidth: 256,
    margin: 16,
    minHeight: 500,
  },
  media: {
    height: 140,
  },
  price: {},
});

function CarCard({ model, image, description, price, city, type }) {
  const classes = useStyles();

  function checkUser() {
    firebaseDB.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        console.log("başarılı");
        alert("Lütfen Ödemeyi Yapınız \n IBAN");
      } else {
        // No user is signed in.
        console.log("başarısız");
        alert("You must sign in first!");
      }
    });
  }

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader title={model} subheader={city} />
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {type}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Grid container justify="center" alignItems="flex-end">
          <CardActions>
            <Button onClick={checkUser} size="small" color="primary">
              rent
            </Button>
            <Typography
              className={classes.price}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              ${price} / per day
            </Typography>
          </CardActions>
        </Grid>
      </Card>
    </div>
  );
}

function Rentpage() {
  const [carList, setCarList] = useState();

  useEffect(() => {
    const carRef = firebaseDB.database().ref("cars");
    carRef.on("value", (snapshot) => {
      const cars = snapshot.val();
      const carList = [];
      for (let id in cars) {
        carList.push({ id, ...cars[id] });
      }
      setCarList(carList);
    });
  }, []);
  return (
    <div className="rentpage">
      <Header />
      <div>
        <h1 className="title">CHOOSE YOUR CAR</h1>
        <hr></hr>
      </div>
      <Grid container justify="center" alignItems="center">
        {carList
          ? carList.map((car, index) => (
              <CarCard
                model={car.model}
                image={car.imageURL}
                description={car.carDescr}
                price={car.price}
                city={car.city}
                type={car.vehicleClass}
              />
            ))
          : ""}
      </Grid>
    </div>
  );
}

export default Rentpage;
