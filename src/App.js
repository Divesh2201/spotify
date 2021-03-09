import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login'
import Player from './Player'
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayerValue } from './DataLayer'
import { ACTION } from './reducer'

const spotify = new SpotifyWebApi()

function App() {

  const [{ user, token }, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ''
    const _token = hash.access_token
    if(_token) {
      dispatch({
        type: ACTION.SET_TOKEN, 
        token: _token
      })

      dispatch({
        type: ACTION.SET_SPOTIFY,
        spotify: spotify,
      }) 

      spotify.setAccessToken(_token)
      spotify.getMe().then(user => {
        dispatch({
          type: ACTION.SET_USER,
          user: user,
        })
      })
      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: ACTION.SET_PLAYLIST,
          playlist: playlists
        })
      })

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: ACTION.SET_TOP_ARTISTS,
          top_artists: response,
        })
      )

      spotify.getPlaylist("37i9dQZEVXcMhtfVtNNKYh").then((response) =>
      dispatch({
        type: ACTION.SET_DISCOVER_WEEKLY,
        discover_weekly: response,
      })
    )
    }
  }, [])
  return (
    <div className="App">
      {
        token ? <Player spotify={spotify} /> : <Login />
      }
    </div>
  );
}

export default App;
