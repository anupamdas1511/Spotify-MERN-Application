import React from 'react'
import { Flex, Heading, Text, VStack, Link } from '@chakra-ui/react'
import { BsGithub, BsLinkedin, BsFacebook } from 'react-icons/bs'
import { GITHUB_URL, LINKEDIN_URL, FACEBOOK_URL } from '../../Constants/Urls'

const About = () => {
  return (
    <div>
      <Flex m='0 100px' flexDir='column' justifyContent='center' alignItems='center' >
        <Heading size='2xl' m={10}>About the Developer</Heading>
        <Text textAlign='center' fontSize='lg' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, voluptate voluptates delectus soluta doloremque, mollitia totam sequi consequatur eveniet dolore pariatur explicabo, saepe corrupti! Itaque maxime voluptas ratione error reprehenderit possimus doloribus perferendis id sit voluptatibus inventore unde laudantium dolor deserunt, eaque cum laboriosam, obcaecati expedita numquam! Minus, recusandae praesentium, labore impedit ex sed perspiciatis optio veritatis laborum, laudantium nulla cum aperiam quasi inventore ea vero error natus ducimus esse corrupti minima ratione. In, corrupti cupiditate qui error ipsum beatae, ex ab sint sequi deleniti minus omnis corporis voluptatibus laborum nam nisi voluptas consequatur aspernatur. Distinctio perferendis asperiores dolorem sed.</Text>
      </Flex>
      <VStack display='flex' flexDir='row' justifyContent='center' gap={10} alignItems='center' pos='fixed' w='100%' h='10vh' bottom={0} >
        <Link href={FACEBOOK_URL} isExternal >
        <BsFacebook size={40} cursor='pointer' />
        </Link>
        <Link href={GITHUB_URL} isExternal >
          <BsGithub size={40} cursor='pointer' />
        </Link>
        <Link href={LINKEDIN_URL} isExternal >
        <BsLinkedin size={40} cursor='pointer' />
        </Link>
      </VStack>
    </div>
  )
}

export default About