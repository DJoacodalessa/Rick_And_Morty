import styles from "./views/About.module.css";
const AboutText = () => {
  return (
    <>
      <h1 className={styles.titulo}> Sobre mi</h1>
      <p className={styles.parrafo}>
        Mi nombre es joaquin, soy un apasionado de la progrmacion y tuve la oportunidad de hacer un proyecto de aplicacion sobre Rick & Morty, espero que les guste!
      </p>
    </>
  );
};

export default AboutText;
