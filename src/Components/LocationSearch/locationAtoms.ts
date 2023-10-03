import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export interface Location {
    lat: number
    lng: number
    name: string
    state: string
    lastUpdatedAt: number
}

export const locationsAtom = atom<Location[]>([])
export const deviceLocationAtom = atomWithStorage<Location | null>('geoLocation', null)
export const currentLocationAtom = atomWithStorage<Location | null>('currentLocation', null)