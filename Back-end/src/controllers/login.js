const users = require('../utils/users');

const login = (req, res) => {
  // Obtener los datos de email y password desde la consulta (Query) en la URL
  const { email, password } = req.query;

  // Verificar si hay un usuario que coincida con el email y la contraseña proporcionados
  const user = users.find((user) => user.email === email && user.password === password);

  if (user) {
    // Usuario válido, se le permite el acceso
    res.status(200).json({access: true });
  } else {
    // Usuario no encontrado o contraseña incorrecta
    res.status(200).json({ access : false });
  }
};

module.exports = login;
