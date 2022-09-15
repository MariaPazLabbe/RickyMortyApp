import React from "react";
import { useState } from "react";

//Filter apra filtrar por nombres y especies de la APi
const Search = ({ characters, setCharacters }) => {
  console.log(characters);
  const [hunt, setHunt] = useState("");
  let results = [];
  const click = (e) => {
    e.preventDefault();

    if (!hunt) {
      alert("Falta llenar los campos vacios");
      return;
    } else {
      results = characters.filter(
        (character) =>
          character.name.toLowerCase().includes(hunt.toLowerCase()) ||
          character.species.toLowerCase().includes(hunt.toLowerCase())
      );
    }
    setCharacters(results);
  };
  return (
    <div className="card border border-warning text-bg-dark ">
      <div className="card-header">
        <h5 className="mt-3">Búsqueda de Personaje</h5>
      </div>
      <div className="card-body">
        <div className="container">
          <div className="mb-3">
            <form onSubmit={click}>
              <input
                className="form-control px-5 py-2 me-3 mb-3"
                type="search"
                placeholder="Búsqueda"
                value={hunt}
                onChange={(e) => setHunt(e.target.value)}
              />
              <button className="btn btn-warning ml-4 me-4 py-2 px-5 mb-3">
                Enviar
              </button>{" "}
              <button
                id="button-a"
                type="button"
                className="btn btn-light me-4 px-5 py-2 mb-3"
              >
                {" "}
                <a className="me-2" href="/">
                  Volver atrás
                </a>{" "}
              </button>
              <button
                type="button"
                className="btn btn-info ml-4 me-4 py-2 px-5 mb-3"
                onClick={() => {
                  const sortedList = [...characters].sort((a, b) =>
                    a.name > b.name ? 1 : a.name < b.name ? -1 : 0
                  );
                  setCharacters(sortedList);
                }}
              >
                Ascendente
              </button>
              <button
                type="button"
                className="btn btn-primary ml-4 me-4 py-2 px-5 mb-3"
                onClick={() => {
                  const sortedList = [...characters].sort((a, b) =>
                    a.name > b.name ? -1 : a.name < b.name ? 1 : 0
                  );
                  setCharacters(sortedList);
                }}
              >
                Descendente
              </button>
            </form>
            {characters.length > 0 ? <h1 className="text-light"></h1> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
