import styles from "./Form.module.css";
import { useState } from "react";
import validation from "./Validation";

const Form = (props) => {
  const { login } = props;
  const [errors, setErrors] = useState({ e1: "", e2: "", e3: "", e4: "" });

  const [UserData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    // console.log(validation({ ...UserData, [property]: value }));
    setErrors(validation({ ...UserData, [property]: value }));
    setUserData({ ...UserData, [property]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(UserData);
  };

  return (
    <div className={styles.login}>
      <img
        src="https://64.media.tumblr.com/089307da20215fda5646d4cb808a0f97/tumblr_nun6nit5gS1u622flo1_250.jpg"
        className={styles.img}
      />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="" className={styles.emaill}>
            Email:
          </label>
          <input
            type="text"
            placeholder="Write your email..."
            name="email"
            value={UserData.email}
            style={{
              backgroundColor:
                errors.e1 || errors.e2 || errors.e3
                  ? "rgba(221, 72, 72, 0.719)"
                  : "rgba(218, 187, 102, 0.788)",
            }}
            className={styles.cajamail}
            onChange={handleChange}
          />
          <p>{errors.e1 ? errors.e1 : errors.e2 ? errors.e2 : errors.e3}</p>
        </div>

        <div>
          <label htmlFor="" className={styles.pass}>
            Password:
          </label>
          <input
            type="text"
            placeholder="Write your password..."
            name="password"
            value={UserData.password}
            style={{
              backgroundColor:
                (errors.e1 || errors.e2 || errors.e3) &&
                "rgba(221, 72, 72, 0.719)",
            }}
            className={styles.cajamail}
            onChange={handleChange}
          />
          {errors.e4 ? <p>{errors.e4}</p> : undefined}
        </div>

        <button type="sumbit" className={styles.buton}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Form;
