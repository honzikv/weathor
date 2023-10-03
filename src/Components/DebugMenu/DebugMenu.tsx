import { Box, Button } from '@chakra-ui/react'
import useAlert from '../Alert/UseAlert'

const DebugMenu = () => {
    const { showAlert } = useAlert()

    return (
        <Box>
            <Button
                onClick={() =>
                    showAlert({
                        title: 'Title',
                        description: 'Description',
                        status: 'success',
                    })
                }
            >
                Show Alert
            </Button>
        </Box>
    )
}

export default DebugMenu