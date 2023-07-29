import {
    Box,
    Center,
    Container,
    Divider,
    Heading,
    VStack,
} from '@chakra-ui/react'

const Toolbar = () => {
    return (
        <VStack sx={{ p: 2 }}>
            <Center>
                <Heading fontWeight="thin" size="xl">
                    Weath<b>OR</b>
                </Heading>
            </Center>
        </VStack>
    )
}

export default Toolbar
