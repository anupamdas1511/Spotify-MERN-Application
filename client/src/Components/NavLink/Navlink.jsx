import React from 'react'
import { Link, Text } from '@chakra-ui/react'
import Font from 'react-font'

const Navlink = ({ text, size, color, textDecor, fontFamily }) => {
    return (
        <Link >
            <Font family={fontFamily} >
                <Text fontFamily={fontFamily} fontSize={size} color={color} textDecoration={textDecor} >{text}</Text>
            </Font>
        </Link>
    )
}

export default Navlink