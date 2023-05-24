import React from 'react';
import styles from './Paginacion.module.css'

// Pokemons: numero total de pokemones, Pagination: Funcion para cambiar de página, perPage: Cantidad de pokemones por página, currentPage: Página actual
export const Paginacion = ({pokemons, pagination, perPage, currentPage}) => {
  const pagesCount = pokemons === 250 ? 26 : Math.ceil(pokemons /perPage); //Calcula la cantidad de paginas necesarias para mostrar los pokemones

  const pageNumbers = []; //Almaceno los numeros de pag que se mostrarán
  const maxPagesToShow = 5; //Cantidad máxima de numeros que se mostrarán en la paginación
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2)); //Me aseguro que la pagina de inicio no sea menor a 1
  let endPage = Math.min(pagesCount, startPage + maxPagesToShow - 1); // Me aseguro que el numero de pagina no sea mayor al maximo a mostrar

  if(endPage - startPage + 1 < maxPagesToShow){ //Verifico si el num de pag a mostrar es menor a maxPagesToShow
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
    <div className={styles.pagination}>
      {/* {currentPage >= 22 ? (
        <h1>¡Lo sentimos, no hay más pokemones!</h1>
      ) : ( */}
        <>
          <button
            className={currentPage !== 1 ? styles["pagination-button"] : styles.disable}
            onClick={() => handleClick(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {pageNumbers.map((number) => (
            <div key={number}>
              <button
                onClick={() => handleClick(number)}
                className={`${styles.buttonNumber} ${currentPage === number ? styles["is-current"] : ""}`}
              >
                {number}
              </button>
            </div>
          ))}

          <button
            className={currentPage !== pagesCount ? styles["pagination-button"] : styles.disable}
            onClick={() => handleClick(currentPage + 1)}
            disabled={currentPage === pagesCount}
          >
            Next
          </button>
        </>
      {/* )} */}
    </div>
  );
};