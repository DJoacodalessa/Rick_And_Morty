const axios = require('axios');

const getCharById = async (req, res) => {
  try {
    const { id } = req.params; // Obtener el ID desde los parámetros de la solicitud
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);

    if (response.status === 200) {
      // Accede a los datos relevantes de la respuesta
      let { name, gender, species, origin, image, status } = response.data;

      // Crea un objeto con las propiedades deseadas
      let characterInfo = {
        id,
        name,
        gender,
        species,
        origin: origin.name, // Puedes acceder a la propiedad 'name' dentro de 'origin'
        image,
        status,
      };

      // Manda la respuesta al Front-End con el objeto creado
      res.status(200).json(characterInfo);
    } else {
      // Manejar otros códigos de estado aquí si es necesario
      res.status(404).json({ message: "Not Found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

module.exports = getCharById;


//Este código define una función getCharById que toma dos parámetros: res (la respuesta HTTP que se enviará al Front-End)
// e id (el ID del personaje que se desea obtener de la API de Rick & Morty). La función hace una solicitud GET a la URL de la API 
//con el ID proporcionado, maneja la respuesta exitosa y los errores, y envía la respuesta al Front-End en formato JSON.