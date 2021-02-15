export default function AppReducer(state, action) {
  switch (action.type) {
    case 'GET_RECIPES':
      // console.log(state);
      // console.log(action.payload);
      return {
        ...state,
        recipes: [...action.payload]
      };
    case 'SET_ISLOADING':
      // console.log(state);
      // console.log(action.payload);
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
}
