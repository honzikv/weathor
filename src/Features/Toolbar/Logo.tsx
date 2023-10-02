import { Center, HStack, Heading, Text, useColorModeValue } from '@chakra-ui/react'

const Logo = () => {


    return (
        <Center>
            <Heading fontWeight="bold" size="xl">
                Weath<Text as="span" color={useColorModeValue('gray.500', 'gray.400')}>OR</Text>
            </Heading>
        </Center>
    )
}

export default Logo
