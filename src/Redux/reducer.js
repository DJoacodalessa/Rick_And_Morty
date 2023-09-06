const initialState = {
  myFavorite: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_FAV":
      let copy1 = state.myFavorite;
      copy1.push(payload);
      return {
        ...state,
        myFavorite: copy1,
      };

    case "REMOVE_FAV":
      let copy2 = state.myFavorite.filter(
        (char) => char.id !== Number(payload)
      );
      return {
        ...state,
        myFavorite: copy2,
      };
    default:
      return state;
  }
};

export default rootReducer;
