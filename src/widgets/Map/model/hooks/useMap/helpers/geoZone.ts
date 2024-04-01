import { Circle } from 'ol/geom';
import Feature from 'ol/Feature';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Map from 'ol/Map';
import { Fill, Stroke, Style } from 'ol/style';
import { fromLonLat } from 'ol/proj';

export const createGeoZone = (centerCoordinates: [number, number], radius: number) => {
    const circle = new Circle(fromLonLat(centerCoordinates), radius);
    const circleStyle = new Style({
        fill: new Fill({
            color: 'rgba(255, 0, 0, 0.2)', // Цвет заливки (красный с прозрачностью)
        }),
        stroke: new Stroke({
            color: 'red', // Цвет обводки (красный)
            width: 2, // Ширина обводки
        }),
    });

    // Создание объекта Feature (сущности) для отображения круга на карте
    const feature = new Feature({
        geometry: circle,
    });
    feature.setStyle(circleStyle);
    // Создание источника для векторного слоя и добавление в него объекта Feature
    const vectorSource = new VectorSource({
        features: [feature],
    });

    // Создание векторного слоя с кругом
    const vectorLayer = new VectorLayer({
        source: vectorSource,
    });
    vectorLayer.setZIndex(1);
    return vectorLayer;
};

export const addGeoZone = (coordinates: [number, number], radius: number, map: Map) => {
    const zone = createGeoZone(coordinates, radius);
    map.addLayer(zone);
};
