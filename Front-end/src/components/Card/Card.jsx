import styles from "./Card.module.css";
import { addFav, removeFav } from "../../Redux/action";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Card = (props) => {
  const {
    id,
    name,
    status,
    species,
    gender,
    origin,
    image,
    onClose,
    myFavorites,
  } = props;

  const [isFav, setIsFav] = useState(false);

  const handleFavorites = () => {
    isFav ? props.removeFav(id) : props.addFav(props.character);
    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites?.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, props.id]);

  return (
    <div className={styles.carta}>
      {isFav ? (
        <button onClick={handleFavorites}>❤️</button>
      ) : (
        <button onClick={handleFavorites}>🤍</button>
      )}
      <button onClick={() => onClose(id)} className={styles.boton}>
        X
      </button>
      <h2 className={styles.nombre}>{name}</h2>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender} </h2>
      <h2> {origin}</h2>
      <img src={image} alt="" className={styles.img} />
    </div>
  );
};


const mapDispachToProps = (dispach) => {
  return {
    addFav: (character) => {
      dispach(addFav(character));
    },
    removeFav: (id) => {
      dispach(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Card);
