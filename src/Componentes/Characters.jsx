import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Characters = ({ characters = [] }) => {

  //Función de Character, la cual tiene un array vacío para usar un inicializador de array.
  return (
    <div className="row">
      {characters.map((item, index) => (
//La función .map() recorre el array de character.
        <div key={index} className="col mb-4">
          <div
            className="card text-bg-dark border border-warning shadow-lg p-2 rounded"
            style={{ minWidth: "80px" }}
          >
            <img src={item.image} alt="about{item.name}" />
            <div className="card-boby">
              <h5 className="card-title mt-3">{item.name}</h5>
              <hr />
              <p>Species: {item.species}</p>
              <p>Location: {item.location.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
//El Item.variable me trae la información especifica reconocida en la APi, o sea si en mi api no existe name, pero si existe film, debo traer item.film.

export default Characters;

//Finalmente se exporta el Character, el cual se importa en Miapi.jsx, que despues se importa en App.js