import React, { useState } from 'react'
import { Link as RouteLink, useHistory } from 'react-router-dom'
import {
  VStack,
  Flex,
  IconButton,
  Heading,
  Text,
  Spacer,
  Input,
  InputGroup,
  Button,
  InputLeftElement,
  Container,
  useColorMode,
  useBreakpointValue
} from '@chakra-ui/react'
import { BsSun, BsMoon, BsSearch } from 'react-icons/bs'
import Navlink from '../NavLink/Navlink'
import NavHead from '../NavLink/NavHead'
import axios from 'axios'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [searchInput, setSearchInput] = useState('')
  const [isVisible, setIsVisible] = useState('none')
  const history = useHistory()
  const isLight = colorMode === 'light'
  const inputL = useBreakpointValue({ base: 'none', md: 'block' })
  const inputS = useBreakpointValue({ base: 'flex', md: 'none' })
  const isAuth = window.location.pathname === '/auth'
  const API = axios.create({ baseURL: 'https://api.spotify.com' })
  console.log(JSON.parse(localStorage.getItem('access_token')))
  const handleSearch = () => {
    API.interceptors.request.use(req => {
      if (localStorage.getItem('access_token')) {
        req.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
      }
    })
    API.get(`/v1/search?q=${searchInput}&type=tracks`)
    .then(res => res.json())
    .then(data => console.log(data))
  }
  const handleKeypress = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }
  return (
    <div>
      <VStack direction='row' display='flex' p={5} >
        <Flex w='100%' >
          <Heading to='/' color='#1ED760' size='lg' textAlign='center' cursor='pointer' >
            <RouteLink to='/' >
              <NavHead text='Spotify' fontFamily='Unbounded' size='3xl' />
            </RouteLink>
          </Heading>
          <Spacer></Spacer>
          <Container m='auto' display={inputL} >
            <InputGroup w='100%' >
              <InputLeftElement children={<BsSearch />} />
              <Input w={['0', '300px', '500px', '500px']} borderRadius={20} placeholder='Search...' disabled={isAuth} value={searchInput} onChange={e => setSearchInput(e.target.value)} onKeyPress={handleKeypress} />
              <Button borderRadius={25} onClick={handleSearch} >Search</Button>
            </InputGroup>
          </Container>
          <Spacer></Spacer>
          <Button onClick={()=> history.push('/Auth')}>Login</Button>
          <IconButton justifySelf='flex-end' icon={<BsSearch />} display={inputS} isRound='true' onClick={() => setIsVisible(isVisible === 'none' ? 'block' : 'none')} disabled={isAuth} ></IconButton>
          <Text alignSelf='center' m='0 15px' fontSize='lg' fontWeight='semibold' cursor='pointer' >
            <RouteLink to='/About' >
              <Navlink fontFamily='ubuntu' text='About' />
            </RouteLink>
          </Text>
          <IconButton justifySelf='flex-end' icon={isLight ? <BsMoon /> : <BsSun />} onClick={toggleColorMode} isRound='true'></IconButton>

        </Flex>
        <Spacer ></Spacer>
        <InputGroup display={inputS === 'none' ? 'none' : isVisible} >
          <InputLeftElement children={<BsSearch />} />
          <Input borderRadius={20} placeholder='Search...' value={searchInput} onChange={e => setSearchInput(e.target.value)} onKeyPress={handleKeypress} />
        </InputGroup>
      </VStack>
    </div>
  )
}

export default Navbar