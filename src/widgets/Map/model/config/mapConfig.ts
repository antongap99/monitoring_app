import { MapProps } from 'widgets/Map/model/types/types.ts';

export const MapConfig: MapProps = {
    viewOptions: {
        center: [30.331408, 59.985022],
        zoom: 6,
    },
    focusObjects: [[30.356847, 59.955608], [38.6913766, 47.2009316]],
    geoZones: [
        {
            centerCoordinates: [2.351403, 48.856607],
            radius: 1000000,
        },
    ],
};
