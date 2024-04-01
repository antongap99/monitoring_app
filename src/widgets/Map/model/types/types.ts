import { ViewOptions } from 'ol/View';

export type Coordinates = [number, number]

export type GeoObject = Coordinates

export type GeoZone = {
    centerCoordinates: Coordinates,
    radius: number
}

export interface MapProps {
    viewOptions: ViewOptions,
    focusObjects: GeoObject[], // Координаты объекта для фокуса
    geoZones:GeoZone[]
}
