import { Box,  HStack, Spacer } from '@chakra-ui/react'
import Logo from './Logo'
import ThemeSwitcher from '../Theme/ThemeSwitcher'

const Toolbar = () => {
    return (
        <HStack spacing={2} sx={{px: 4}} width="100%">
            <Spacer />
            <Box>
                <Logo />
            </Box>
            <Spacer />
            <Box>
                <ThemeSwitcher />
            </Box>
        </HStack>
    )
}

export default Toolbar
