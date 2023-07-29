
import { extendTheme } from '@chakra-ui/react'
import { readdirSync } from 'fs'
import lightTheme from '../resources/themes/light.json'
import darkTheme from '../resources/themes/light.json'

const DEFAULT_DIRECTORY = 'resources/themes'

// TODO right now do it like this, later have it persisted
const buildTheme = (name: 'light' | 'dark') => extendTheme(name === 'light' ? lightTheme : darkTheme)

export default buildTheme