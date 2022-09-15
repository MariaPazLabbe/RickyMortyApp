import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };
  const handleNext = () => {
    onNext();
  };

  //Lo importante de la función es el null en la función onCñlick, que otorga la función de que si no existe algo mas que previous o next en la paginanción no se muestre.
  return (
    <>
      <nav className="my-5">
        <ul className="pagination justify-content-center">
          {prev ? (
            <li className="page-item ">
              <button className="page-link" onClick={handlePrevious}>
                Previous
              </button>
            </li>
          ) : null}
          {next ? (
            <li className="page-item">
              <button className="page-link" onClick={handleNext}>
                Next
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
