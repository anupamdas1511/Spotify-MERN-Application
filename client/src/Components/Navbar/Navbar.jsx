import React from 'react'
// import { useHistory } from 'react'
import { VStack, Flex,  IconButton, useColorMode, Heading, Text, Spacer } from '@chakra-ui/react'
import Font from 'react-font'
import { BsSun, BsMoon } from 'react-icons/bs'
import './Styles'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div>
      <VStack direction='row' display='flex' p={5} >
        <Flex w='100%' >
          <Font family='sans-serif'>
            <Heading color='#1ED760' size='lg' textAlign='center' cursor='pointer' >Spotify</Heading>
          </Font>
          <Spacer></Spacer>
          <Text alignSelf='center' m='0 15px' fontSize='lg' fontWeight='semibold' cursor='pointer' >Contacts</Text>
          <IconButton justifySelf='flex-end' icon={colorMode === 'light' ? <BsMoon /> : <BsSun />} onClick={toggleColorMode} isRound='true'></IconButton>

        </Flex>
      </VStack>
    </div>
  )
}

export default Navbar