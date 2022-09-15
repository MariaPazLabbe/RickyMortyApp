import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarHeader from "./Navbar/Navbar";
import Characters from "./Characters";
import { useEffect, useState } from "react";
import Pagination from "./Pagination/Pagination";
import Search from "./Search/Search";

// Importación de todo los componentes que se crearon para reaunir la información de la app en Miapi.jsx, la cual se transfiere a App.js

const Miapi = (props) => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

// Función useState, que permite añadir el estado de React a los componentes de mi función, para trabajar la APi al traer Character y info.

  const inicialUrl = "https://rickandmortyapi.com/api/character";
  const fetchCharacters = (url) => {
  // Función Fetch permite manipular la Api
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };
  const onPrevious = () => {
    fetchCharacters(info.prev);
  };
  const onNext = () => {
    fetchCharacters(info.next);
  };
  useEffect(() => {
    fetchCharacters(inicialUrl);
  }, []);
  return (
    <>
      <div>
        <NavbarHeader brand="Rick and Morty App" />
      </div>
      <div className="container mt-5">
        <Search characters={characters} setCharacters={setCharacters} />
      </div>
      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Characters characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </>
  //Donde me devuelve los elementos importados, los cuales tienen className, apra otorgarles posicionamiento y otros props para traer sierta información especifica de la API.
  );
};
export default Miapi;
