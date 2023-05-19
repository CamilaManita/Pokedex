import React from 'react';
import './Paginacion.module.css'

export const Paginacion = ({pokemons, pagination, perPage, currentPage}) => {
  const pagesCount = pokemons === 250 ? 26 : Math.ceil(pokemons /perPage); //Calcula la cantidad de paginas necesarias para mostrar los paises

  const pageNumbers = []; //Almaceno los numeros de pag que se mostraran
  const maxPagesToShow = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2)); //Me aseguro que la pagina de inicio no sea menor a 1
  let endPage = Math.min(pagesCount, startPage + maxPagesToShow - 1); // Me aseguro que el numero de pagina no sea mayor al maximo a mostrar

  if(endPage - startPage + 1 < maxPagesToShow){ //Verifico si el num de pag a mostrar es menos a maxPagesToShow
    startPage = Math.max(1, endPage - maxPagesToShow + 1); //Si es así, que muestre la cantidad necesaria para cumplir con la cantidad max permitida
  }

  //Hago un bucle para ir agregando cada num de pag al array pageNumbers y generar una lista para navegar por páginas
  for(let i = startPage; i <= endPage; i++){
    pageNumbers.push(i);
  }

  const handleClick = (page) => {
    pagination(page);
  };

  return (
    <div className="pagination">
      <button
        className={currentPage !== 1 ? "pagination-button" : "disable"}
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
  
      {pageNumbers.map((number) => ( //a través de map creo un botón para cada num de página
        <div key={number}>
          <button
            onClick={() => handleClick(number)}
            className={`buttonNumber ${
              currentPage === number ? "is-current" : ""
            }`}
          >
            {number}
          </button>
        </div>
      ))}
  
      <button
        className={currentPage !== pagesCount ? "pagination-button" : "disable"}
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === pagesCount}
      >
        Siguiente
      </button>
    </div>
  );
};