import { ToastId, useToast } from '@chakra-ui/react'
import { useRef } from 'react'

export interface Alert {
    title: string
    description: string
    status: 'success' | 'error' | 'warning' | 'info'
    duration?: number
}

const defaultDurationMs = 5000

/**
 * Hook to display consistent modal alert
 * @returns
 */
const useAlert = () => {
    const toast = useToast()
    const toastIdRef = useRef<ToastId>()

    function showAlert(alert: Alert) {
        alert.duration = alert.duration ?? defaultDurationMs
        
        if (toastIdRef.current && toast.isActive(toastIdRef.current)) {
            toast.update(toastIdRef.current, {
                ...alert,
                isClosable: true,
            })
            return
        }

        toastIdRef.current = toast({
            ...alert,
            isClosable: true,
        })
    }

    return { showAlert }
}

export default useAlert
