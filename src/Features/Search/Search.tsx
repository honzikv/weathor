import { SearchIcon } from '@chakra-ui/icons'
import {
    Box,
    Center,
    Divider,
    HStack,
    Heading,
    Text,
    IconButton,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    VStack,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import { WiDayHaze } from 'react-icons/wi'

const Search = () => {

    const { t } = useTranslation('search')

    return (
        <VStack sx={{mt: 4}}>
            
            <Heading fontWeight="400" fontSize="3xl">Show weather in</Heading>
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
        </VStack>
    )
}

export default Search
