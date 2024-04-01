import { useEffect, useState } from 'react';
import { addGeolocation } from 'widgets/Map/model/hooks/useMap/helpers/geoLocation.ts';
import { addGeoObject } from 'widgets/Map/model/hooks/useMap/helpers/geoObject.ts';
import { addGeoZone } from 'widgets/Map/model/hooks/useMap/helpers/geoZone.ts';
import { addGeoTrack } from 'widgets/Map/model/hooks/useMap/helpers/geoTrack.ts';
import { mockTrackData, TrackPointData } from 'widgets/Map/model/config/mockTrackData.ts';
import Map from 'ol/Map';
import { Coordinates, GeoObject, GeoZone } from 'widgets/Map/model/types/types.ts';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import { Geometry } from 'ol/geom';

type VectorDefaultType = VectorLayer<VectorSource<Feature<Geometry>>>

export const useMapInteraction = (
    map: Map | null,
    defaultGeoObjects: GeoObject[],
    defaultGeoZones: GeoZone[],
    defaultTracks: TrackPointData[][],
) => {
    const [geoObjects, setGeoObjects] = useState<GeoObject[]>(defaultGeoObjects || []);
    const [geoZones, setGeoZones] = useState< GeoZone[]>(defaultGeoZones || []);
    const [showLocation, setShowLocation] = useState<boolean>(true);
    const [geoTracks, setGeoTracks] = useState<TrackPointData[][]>(defaultTracks || []);

    // const [geoObjectsLayers, setGeoObjectsLayers] = useState<VectorDefaultType[]>([]);
    // const [geoZonesLayers, setGeoZonesLayers] = useState<VectorDefaultType[]>([]);

    const [center, setCenter] = useState<Coordinates>([0, 0]);

    const centerMap = (targetMap: Map) => {
        const newView = targetMap.getView();
        newView.setCenter(center);
    };

    const addGeoObjectsToMap = (mapRef: Map) => {
        geoObjects.forEach((geoObj) => {
            addGeoObject(geoObj, mapRef);
        });
    };

    const addGeoZonesToMap = (mapRef: Map) => {
        geoZones.forEach((geoZone) => {
            addGeoZone(geoZone.centerCoordinates, geoZone.radius, mapRef);
        });
    };

    useEffect(() => {
        if (!map) return;
        centerMap(map);

        if (geoObjects.length) {
            addGeoObjectsToMap(map);
        }
        if (geoZones.length) {
            addGeoZonesToMap(map);
        }

        if (showLocation) {
            addGeolocation(map, setCenter);
        }
        addGeoTrack(mockTrackData, map);
    //     TODO накапливается большое колво слоев
    }, [map]);

    useEffect(() => {
        if (!map) return;
        centerMap(map);
    }, [center]);

    useEffect(() => {
        if (!map) return;
        addGeoObjectsToMap(map);
    }, [addGeoObjectsToMap, geoObjects]);

    return {
        setCenter,
        setShowLocation,
        geoZones,
        setGeoZones,
        geoObjects,
        setGeoObjects,
        geoTracks,
        setGeoTracks,
    };
};
