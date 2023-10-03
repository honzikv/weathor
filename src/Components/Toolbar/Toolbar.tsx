import {
    Box,
    Divider,
    Grid,
    GridItem,
    HStack,
    Spacer,
    useColorModeValue,
} from '@chakra-ui/react'
import Logo from './Logo'
import ThemeSwitcher from '../Theme/ThemeSwitcher'
import DebugMenu from '../DebugMenu/DebugMenu'

const Toolbar = () => {
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} py={2}>
            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            <GridItem colSpan={1}>
                </GridItem>
                <GridItem alignContent="center" justifyContent="center"  colSpan={1}>
                    <Logo />
                </GridItem>
                <GridItem colSpan={1}>
                    <HStack>
                        <Spacer />
                        <ThemeSwitcher />
                    </HStack>
                </GridItem>
            </Grid>
            <DebugMenu />
        </Box>
    )
}

export default Toolbar
