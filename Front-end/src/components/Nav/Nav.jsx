import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import PATHROUTES from "../../Helpers/PathRpute";

const Nav = (props) => {
  const { onSearch } = props;

  const [id, setId] = useState("");

  function handleChange(evento) {
    // el primer valor del array del estado es justamente el valor
    // El segundo valor del array del estado es el setter. Se llama como una funcion y se le pasa un unico param. Ese param es el valor
    // Que va a tomar el state
    setId(evento.target.value);
  }
  return (
    <div className={styles["main-container"]}>
      <div className={styles["container-1"]}>
        <input
          type="number"
          min={1}
          onChange={handleChange}
          value={id}
          className={styles.buscar}
        />
        <button onClick={() => onSearch(id)} className={styles.boton}>
          Agregar
        </button>
      </div>
      <div className={styles["container-2"]}>
        <Link to={PATHROUTES.ABOUT}>
          <button className={styles.navigatorabout}> About </button>
        </Link>
        <Link to={PATHROUTES.HOME}>
          <button className={styles.navigatorhome}> Home </button>
        </Link>
        <Link to={PATHROUTES.FAVORITES}>
          <button className={styles.navigatorhome}> Favorites </button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
