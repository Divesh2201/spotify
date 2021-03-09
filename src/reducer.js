export const ACTION = {
  SET_USER: 'set_user',
  SET_TOKEN: 'set_token',
  SET_PLAYLIST: 'set_playlist',
  SET_TOP_ARTISTS: 'set_top_artists',
  SET_DISCOVER_WEEKLY: 'set_discover_weekly',
  SET_SPOTIFY: 'set_spotify',
  SET_ITEM: 'set_item',
  SET_PLAYING: 'set_playing',
}

export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  token: null,
  spotify: null,
  discover_weekly: null,
  top_artists: null,
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
    case ACTION.SET_PLAYLIST:
      return {
        ...state, playlist: action.playlist
      }
      case ACTION.SET_PLAYING:
        return {
          ...state,
          playing: action.playing,
        };
  
      case ACTION.SET_ITEM:
        return {
          ...state,
          item: action.item,
        };
  
      case ACTION.SET_DISCOVER_WEEKLY:
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        };
  
      case ACTION.SET_TOP_ARTISTS:
        return {
          ...state,
          top_artists: action.top_artists,
        };
  
      case ACTION.SET_SPOTIFY:
        return {
          ...state,
          spotify: action.spotify,
        };
    default: 
      return state
  }
}


