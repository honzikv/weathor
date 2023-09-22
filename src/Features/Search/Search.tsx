import { SearchIcon } from '@chakra-ui/icons'
import {
    Box,
    Center,
    Divider,
    HStack,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    VStack,
} from '@chakra-ui/react'

import { WiDayHaze } from 'react-icons/wi'

const Search = () => {
    return (
        <VStack>
            <Box h="5vh" />
            <Divider />
            <Center>
                <HStack>
                    <Heading fontSize={24} fontWeight="thin" size="xl">
                        Show
                    </Heading>
                    <Heading fontSize={24}>Weather</Heading>
                    <Heading fontSize={24} fontWeight="thin" size="xl">
                        in
                    </Heading>
                </HStack>
            </Center>

            <InputGroup maxWidth="lg" sx={{ pr: 0 }}>
                <InputLeftAddon>
                    <WiDayHaze size="90%" />
                </InputLeftAddon>
                <Input placeholder="Search" variant="filled" />
                <InputRightAddon>
                    <IconButton variant="ghost" aria-label="Search">
                        <SearchIcon />
                    </IconButton>
                </InputRightAddon>
            </InputGroup>
            <Divider sx={{ mt: 4 }} />
        </VStack>
    )
}

export default Search
