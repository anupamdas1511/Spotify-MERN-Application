import React from 'react'
import { Link, Heading } from '@chakra-ui/react'
import Font from 'react-font'

const NavHead = ({ text, size, color, textDecor, fontFamily }) => {
    return (
        <Link >
            <Font family={fontFamily} >
                <Heading fontFamily={fontFamily} fontSize={size} color={color} textDecoration={textDecor} >{text}</Heading>
            </Font>
        </Link>
    )
}

export default NavHead