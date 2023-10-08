const validator = (data) => {
  const errors = {};
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const regexpassword = /^(?=\w*\d)\S{6,10}$/;

  const regexnumber = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i;
  console.log(data);
  if (!data.email) {
    errors.e1 = "No puede ser vacio";
  }
  if (!regexEmail.test(data.email)) {
    errors.e2 = "Debe ser correo electronico";
  }
  if (data.email.length > 35) {
    errors.e3 = "Debe tener menos de 35 caracteres";
  }
  if (!regexnumber.test(data.password)) {
    errors.e4 = "La contrasena debe tener un numero";
  }
  if (!regexpassword.test(data.password)) {
    errors.e5 = "Debe tener entre 6 y 10 caracteres";
  }

  return errors;
};

export default validator;
