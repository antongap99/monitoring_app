import { Vector as VectorLayer } from 'ol/layer';
import { Vector } from 'ol/source';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import {
    Circle as CircleStyle, Fill, Stroke, Style,
} from 'ol/style';
import Map from 'ol/Map';

export const createGeoObject = (coordinates: [number, number]) => {
    const vectorLayer = new VectorLayer({
        source: new Vector(),
    });
    const marker = new Feature({
        geometry: new Point(fromLonLat(coordinates)), // Преобразуем координаты объекта в систему координат карты
    });
    const markerStyle = new Style({
        image: new CircleStyle({
            radius: 6,
            fill: new Fill({ color: 'red' }),
            stroke: new Stroke({ color: 'white', width: 2 }),
        }),
    });
    marker.setStyle(markerStyle);
    vectorLayer?.getSource()?.addFeature(marker);
    vectorLayer.setZIndex(1);
    return vectorLayer;
};

export const addGeoObject = (coordinates: [number, number], map: Map) => {
    map.addLayer(createGeoObject(coordinates));
};
