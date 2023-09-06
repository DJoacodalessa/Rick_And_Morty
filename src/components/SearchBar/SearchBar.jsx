import styles from "./SearchBar.module.css";
import { useState } from "react";
export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  function handleChange(evento) {
    setId = evento.target.value;
  }
  return (
    <div className={styles.botonFondo}>
      {
        <>
          <input
            className={styles.barraBuscar}
            type="search"
            placeholder="Write ID..."
            onChange={handleChange}
            value={id}
          />
          {/* Uso fun flecha para que se ejecute solo cuando se haga el click osea una sola vez */}
          <button onClick={() => onSearch()} className={styles.botonBarra}>
            Agregar
          </button>
        </>
      }
    </div>
  );
}
