const initialState = {
  game: {},
  screen: {}
}

const detailReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_DETAIL': 
    return {...state, 
      payload: action.payload.game,
      screen: action.payload.screen

    }
    default: 
    return { ...state}
  }
}
export default detailReducer;