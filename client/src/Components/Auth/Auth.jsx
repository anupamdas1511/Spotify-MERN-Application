import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { AUTH_URL } from '../../Constants/Auth'
import { Button, Container } from '@chakra-ui/react'
import { FiLogIn } from 'react-icons/fi'

const Auth = () => {
    const history = useHistory()
    const getParamsFromSpotifyAuth = (hash) => {
        const stringAfterHash = hash.substring(1)
        const paramsUrl = stringAfterHash.split('&')
        const splitedParams = paramsUrl.reduce((accumulator, currentValue) => {
            const [key, value] = currentValue.split('=')
            accumulator[key] = value
            return accumulator
        }, {})
        return splitedParams
    }
    useEffect(() => {
        if (window.location.hash) {
            const { access_token, token_type, expires_in } = getParamsFromSpotifyAuth(window.location.hash)
            localStorage.clear()
            localStorage.setItem('access_token', access_token)
            localStorage.setItem('token_type', token_type)
            localStorage.setItem('expires_in', expires_in)
            history.push('/')
            console.log('surpise mdfk')
        }
    })
    const handleClick = () => {
        window.location = AUTH_URL
    }
    return (
        <div>
            {/* <button onClick={handleClick}>Login</button> */}
            <Container h='85vh' display='flex' alignItems='center' justifyContent='center'>
                <Button colorScheme='whatsapp' sizes='xl' leftIcon={<FiLogIn />} onClick={handleClick}>Login to Spotify</Button>

            </Container>
        </div>
    )
}

export default Auth