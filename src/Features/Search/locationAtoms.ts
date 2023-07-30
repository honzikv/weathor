import { atomWithStorage } from 'jotai/utils'

export interface Location {}

export const locationsAtom = atomWithStorage<Location[]>('locations', [])
export const currentLocationAtom = atomWithStorage<Location | null>('currentLocation', null)