import { Icon, IconButton, useColorMode } from '@chakra-ui/react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

const ThemeSwitcher = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <IconButton
            onClick={toggleColorMode}
            icon={<Icon as={colorMode === 'dark' ? MdDarkMode : MdLightMode} />}
            aria-label="Toggle Theme"
            variant="ghost"
        />
    )
}

export default ThemeSwitcher
