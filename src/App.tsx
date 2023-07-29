import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Toolbar from './Pages/Toolbar/Toolbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Error from './Pages/Error/Error'
import Home from './Pages/Home/Home'
import buildTheme from './Theme/themeBuilder'

const App = () => {
    return (
        <ChakraProvider theme={buildTheme('light')}>
            <Toolbar />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </ChakraProvider>
    )
}

export default App
