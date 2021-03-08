import React from 'react'
import './Login.css'
import { loginUrl } from './spotify'

function Login() {
  return (      
    <div class='wrapper'>
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
      alt=""
      /><br />
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  )
}
// https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg

export default Login
