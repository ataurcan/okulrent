import firebase from "./firebase";
const retrieveInfo = () => {
  const dbRef = firebase.database().ref();
  dbRef

    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

export default retrieveInfo;
