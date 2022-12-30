import React from 'react'
import { Link as RouteLink } from 'react-router-dom'
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

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isLight = colorMode === 'light'
  const inputL = useBreakpointValue({ base: 'none', md: 'block' })
  const inputS = useBreakpointValue({ base: 'flex', md: 'none' })
  const isAuth = window.location.pathname === '/auth'
  const handleSearchClick = () => {

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
              <Input w={['0', '300px', '500px', '500px']} borderRadius={20} placeholder='Search...' disabled={isAuth} />
              <Button borderRadius={25} >Search</Button>
            </InputGroup>
          </Container>
          <Spacer></Spacer>
          <IconButton justifySelf='flex-end' icon={<BsSearch />} display={inputS} isRound='true' onClick={handleSearchClick} disabled={isAuth} ></IconButton>
          <Text alignSelf='center' m='0 15px' fontSize='lg' fontWeight='semibold' cursor='pointer' >
            <RouteLink to='/About' >
              <Navlink fontFamily='ubuntu' text='About' />
            </RouteLink>
          </Text>
          <IconButton justifySelf='flex-end' icon={isLight ? <BsMoon /> : <BsSun />} onClick={toggleColorMode} isRound='true'></IconButton>

        </Flex>
      </VStack>
    </div>
  )
}

export default Navbar