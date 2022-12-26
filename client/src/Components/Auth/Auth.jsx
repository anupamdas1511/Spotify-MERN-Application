import React, { useEffect } from 'react'
import { CLIENT_ID, REDIRECT_URI, SCOPE, BASE_URL } from '../../Constants/Auth'

const AUTH_URL = `${BASE_URL}?client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&response_type=token&show_dialog=true`

// http://localhost:3000/#access_token=BQDpJRH0smVq2LZQy_BLJWh_qdHSKekSpZhHlf_MCXBXItXq2pOKOxXri4eglaognujXvXtHoBSuo7KV5kxubI8Q2tf95RHDVeuznXOEVdHCDUvW07AyBuXmqMDXClUamW9rDJ80SJG158GDPcSo2V4xfQ-jZwTwXFX8AAQGiG7w6CJZCqsmJkRJnfBh2w5m-szE3MUWvABL5XkvhSFOqffd&token_type=Bearer&expires_in=3600

const Auth = () => { 
    const getParamsFromSpotifyAuth = (hash) => {
        const stringAfterHash = hash.substring(1)
        const paramsUrl = stringAfterHash.split('&')
        const splitedParams = paramsUrl.reduce((accumulator, currentValue)=>{
            const [key, value] = currentValue.split('=')
            accumulator[key] = value
            return accumulator
        }, {})
        return splitedParams
    }
    useEffect(()=>{
        if(window.location.hash) {
            const { access_token, token_type, expires_in } = getParamsFromSpotifyAuth(window.location.hash)
            localStorage.clear()
            localStorage.setItem('access_token', access_token)
            localStorage.setItem('token_type', token_type)
            localStorage.setItem('expires_in', expires_in)
        }
    })
    const handleClick = ()=>{
        window.location = AUTH_URL
    }
  return (
    <div>
        <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Auth