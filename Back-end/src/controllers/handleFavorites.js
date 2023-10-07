let myFavorites = []; // No declares esto como constante, ya que se modificará

// Funcion para agregar un personaje a la lista de favoritos
const postFav = (req, res) => {
  const newFavorite = req.body; // obtene el personaje del cuerpo de la solicitud (Body)

  // Agrega el nuevo personaje a la lista de favoritos
  myFavorites.push(newFavorite);

  // Devolve la lista actualizada de favoritos en formato JSON
  res.status(200).json(myFavorites);
};

// Funcion para eliminar un personaje de la lista de favoritos por su ID
const deleteFav = (req, res) => {
  const characterIdToDelete = parseInt(req.params.id, 10); // Obtén el ID desde los parámetros de la URL

  // Filtra los personajes favoritos para eliminar el que coincide con el ID
  myFavorites = myFavorites.filter((favorite) => favorite.id !== characterIdToDelete);

  // Devuelve la lista actualizada de favoritos en formato JSON
  res.status(200).json(myFavorites);
};

module.exports = { postFav, deleteFav };
