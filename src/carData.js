const Search = () => {
  return (
    <FirebaseDatabaseNode path="https://rentacar-4c1a7-default-rtdb.firebaseio.com/">
      {(data) => {
        const { value } = data;
        if (value === null || typeof value === "undefined") return null;
        const keys = Object.keys(value);
        const values = Object.values(value);
        const valuesWithKeys = values.map((value, i) => ({
          capacity: value.capacity,
          carDescr: value.carDescr,
          gearType: value.gearType,
          imageURL: value.imageURL,
          price: value.price,
          model: value.model,
          vehicleClass: value.vehicleClass,

          id: keys[i],
        }));
        return <AutoComplete items={valuesWithKeys} />;
      }}
    </FirebaseDatabaseNode>
  );
};
