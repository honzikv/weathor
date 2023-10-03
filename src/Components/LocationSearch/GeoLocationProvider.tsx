import { useAtom } from 'jotai'
import { deviceLocationAtom as deviceGeolocationAtom } from './locationAtoms'
import { ReactNode, useEffect } from 'react'
import config from '../../config/config'
import axiosInstance from '../../axios/axiosInstance'
import axios, { AxiosError } from 'axios'

const DeviceLocationProvider = (children: ReactNode) => {
    const [_, setDeviceLocation] = useAtom(deviceGeolocationAtom)

    const fetchLocationFromApi = async (lat: number, lng: number) => {
        try {
            const res = await axiosInstance.get(
                `/locations/lat=${lat}&lng=${lng}`,
            )
            return res.data
        } catch (err: Error | AxiosError | unknown) {
            if (axios.isAxiosError(err)) {
            }
        }
    }

    /**
     * Fetches device geolocation from the api to the location atom if navigator.geolocation is supported
     */
    const fetchDeviceLocation = () => {
        // Return if geolocation is not supported by the browser
        if (!navigator?.geolocation) {
            return
        }

        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude: lat, longitude: lng } = position.coords
            const location = await fetchLocationFromApi(lat, lng)
            if (!location) {
                return
            }

            setDeviceLocation(location)
        })
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            fetchDeviceLocation()
        }, config.geolocationRefreshIntervalMins)

        return () => clearInterval(intervalId)
    })

    return <>{children}</>
}
