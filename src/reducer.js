export const ACTION = {
  SET_USER: 'set_user',
  SET_TOKEN: 'set_token',
}

export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  token: null,
} 


export const reducer = (state, action) => {
  console.log(action)
  switch(action.type) {
    case ACTION.SET_USER:
      return {
        ...state, user: action.user
      }
    case ACTION.SET_TOKEN:
      return {
        ...state, token: action.token
      }
    default: 
      return state
  }
}


