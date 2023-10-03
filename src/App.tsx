import './App.css'
import {
    Box,
    ChakraProvider,
    Container,
    Grid,
    GridItem,
    VStack,
} from '@chakra-ui/react'
import Toolbar from './Components/Toolbar/Toolbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Error from './Components/Error/Error'
import Home from './Components/Home/Home'
import initTranslation from './translation/initTranslation'

initTranslation()

const App = () => {
    return (
        <ChakraProvider>
            <Box>
                <Toolbar />
                <Box pt={4}>
                    <Router>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="*" element={<Error />} />
                        </Routes>
                    </Router>
                </Box>
            </Box>
        </ChakraProvider>
    )
}

export default App
