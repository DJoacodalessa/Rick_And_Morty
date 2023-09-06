import styles from "./views/About.module.css";
const AboutText = () => {
  return (
    <>
      <h1 className={styles.titulo}> Sobre mi</h1>
      <p className={styles.parrafo}>
        Soy un fanatico del universo de Rick & Morty, los conoci a partir del
        lanzamineto de su segunda temporada y desde ahi, me he leido hasta las
        novelas.
      </p>
    </>
  );
};

export default AboutText;
