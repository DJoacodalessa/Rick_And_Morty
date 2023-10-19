import axios from "axios";

// ACTION | addFav
export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
      try {
         const response = await axios.post(endpoint, character);
         const { data } = response;
         dispatch({
            type: 'ADD_FAV',
            payload: data,
         });
      } catch (error) {
         console.error(error);
      }
   };
};

export const removeFav = (id) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   return async (dispatch) => {
      try {
         const response = await axios.delete(endpoint);
         const { data } = response;
         dispatch({
            type: 'REMOVE_FAV',
            payload: data,
         });
      } catch (error) {
         console.error(error);
      }
   };
};
