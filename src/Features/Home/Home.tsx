import { useAtom } from 'jotai'
import Search from '../Search/Search'
import { currentLocationAtom, locationsAtom } from '../Search/locationAtoms'
import { useEffect, useState } from 'react'

const Home = () => {
    const [locations, ] = useAtom(locationsAtom)
    const [currentLocation, ] = useAtom(currentLocationAtom)
    const [showSearch, setShowSearch] = useState(currentLocation === null)

    // Show search is set to true if current location is not specified
    useEffect(() => {
        setShowSearch(currentLocation === null)
    }, [locations, currentLocation])

    return (
        <> {
            showSearch ? <Search /> : null
        }
        </>
    )
}

export default Home
