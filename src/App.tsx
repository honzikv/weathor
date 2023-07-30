import './App.css'
import { ChakraProvider, VStack } from '@chakra-ui/react'
import Toolbar from './Features/Toolbar/Toolbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Error from './Features/Error/Error'
import Home from './Features/Home/Home'

const App = () => {
    return (
        <ChakraProvider>
            <VStack spacing={0}>
                <Toolbar />
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </Router>
            </VStack>
        </ChakraProvider>
    )
}

export default App
