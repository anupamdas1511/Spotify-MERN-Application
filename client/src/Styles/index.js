import { extendTheme } from "@chakra-ui/react";
import Button from './Components/button'

const overrides = ({
    components: {
        Button
    }
})

export const theme = extendTheme(overrides)