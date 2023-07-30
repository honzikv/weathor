import { HStack, Heading } from '@chakra-ui/react'

const Logo = () => {
    return (
        <HStack spacing={0}>
            <Heading fontWeight="thin" size="xl" sx={{ margin: 0, padding: 0 }}>
                Weath
            </Heading>
            <Heading fontWeight="bold" size="xl" sx={{ margin: 0, padding: 0 }}>
                OR
            </Heading>
        </HStack>
    )
}

export default Logo
