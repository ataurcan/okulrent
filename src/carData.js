import firebaseDB from "./firebase";

const retrieveInfo = () => {
  const dbRef = firebaseDB.database().ref();
  dbRef
    .get()
    .then((snapshot) => {
      const model = snapshot.child("cars").val();
      console.log(model);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default retrieveInfo;
