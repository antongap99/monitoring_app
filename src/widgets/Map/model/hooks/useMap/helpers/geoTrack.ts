import { Stroke, Style } from 'ol/style';
import Feature from 'ol/Feature';
import VectorSource from 'ol/source/Vector';
import { LineString } from 'ol/geom';
import { TrackPointData } from 'widgets/Map/model/config/mockTrackData.ts';
import VectorLayer from 'ol/layer/Vector';
import Map from 'ol/Map';
import { fromLonLat } from 'ol/proj';

export const createGeoTrack = (trackPoints: TrackPointData[]) => {
    const validateTrackCoordinates = trackPoints.map((point) => fromLonLat([point.x, point.y]));
    // Создание объекта LineString
    const lineString = new LineString(validateTrackCoordinates);

    // Создание стиля линии трека
    const lineStyle = new Style({
        stroke: new Stroke({
            color: 'blue',
            width: 2,
        }),
    });

    // Создание объекта Feature из LineString и применение стиля
    const feature = new Feature({
        geometry: lineString,
    });
    feature.setStyle(lineStyle);

    // Создание и настройка источника данных для слоя
    const vectorSource = new VectorSource({
        features: [feature],
    });

    // Создание слоя и добавление его на карту
    const vectorLayer = new VectorLayer({
        source: vectorSource,
    });
    vectorLayer.setZIndex(1);
    return vectorLayer;
};

export const addGeoTrack = (trackPoints: TrackPointData[], map: Map) => {
    map.addLayer(createGeoTrack(trackPoints));
};
