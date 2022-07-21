import { useState } from "react";
import axios from "axios";
import "./styles.css";

const base = "https://akabab.github.io/starwars-api/api/id/";
let id, name, image;

export default function App() {
  const [x, setX] = useState(1);

  const data = () => {
    const uri = `${base}${x}.json`;
    axios(uri).then((res) => {
      console.log(res);
      id = res.data.id;
      name = res.data.name;
      image = res.data.image;
      console.log(id);
    });
  };
  data();

  return (
    <div className="App">
      <h1>Star Wars</h1>
      <h3>Id: {id}</h3>
      <h3>Name: {name}</h3>
      <img src={image} alt="img" style={{ height: "300px", width: "300px" }} />
      <br />
      <button
        onClick={() => {
          setX(Math.ceil(Math.random() * 88));
          data();
        }}
      >
        Randomize
      </button>
    </div>
  );
}
