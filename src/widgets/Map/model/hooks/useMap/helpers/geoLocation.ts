import Map from 'ol/Map';
import Geolocation from 'ol/Geolocation';
import Feature from 'ol/Feature';
import {
    Circle as CircleStyle, Fill, Stroke, Style,
} from 'ol/style';
import Point from 'ol/geom/Point';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Geometry } from 'ol/geom';
import { Coordinates } from 'widgets/Map/model/types/types.ts';

type ReturnAddGeolocationType = VectorLayer<VectorSource<Feature<Geometry>>> | null;
type CenterCallBack = (map: Coordinates) => void
// eslint-disable-next-line max-len
export const addGeolocation = (map: Map | null, centerCallBack: CenterCallBack): ReturnAddGeolocationType => {
    if (!map) return null;
    const view = map.getView();
    const geolocation = new Geolocation({
        trackingOptions: {
            enableHighAccuracy: true,
        },
        projection: view.getProjection(),
    });

    geolocation.setTracking(true);

    geolocation.on('error', (error) => {
        console.log('geolocation error', error);
    });

    const positionFeature = new Feature();
    positionFeature.setStyle(
        new Style({
            image: new CircleStyle({
                radius: 10,
                fill: new Fill({
                    color: '#3399CC',
                }),
                stroke: new Stroke({
                    color: '#fff',
                    width: 2,
                }),
            }),
        }),
    );

    const setFeaturePosition = () => {
        const coordinates = geolocation.getPosition();
        if (coordinates) {
            const coord = coordinates as [number, number]; // FIXME
            centerCallBack(coord);
        }
        positionFeature.setGeometry(coordinates ? new Point(coordinates) : undefined);
    };

    setFeaturePosition();

    geolocation.on('change:position', setFeaturePosition);

    const layer = new VectorLayer({
        source: new VectorSource({
            features: [positionFeature],
        }),
    });
    layer.setZIndex(3);
    map.addLayer(layer);

    return layer;
};
