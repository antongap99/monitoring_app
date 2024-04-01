import TileLayer from 'ol/layer/Tile';
import { XYZ } from 'ol/source';
import Map from 'ol/Map';
import proj4 from 'proj4';
import { register } from 'ol/proj/proj4';
import * as olProj from 'ol/proj';

export const removeLayers = (layer: TileLayer<XYZ>[] | TileLayer<XYZ> | null, map: Map) => {
    if (!layer) return;

    if (Array.isArray(layer)) {
        layer.forEach((item) => {
            map.removeLayer(item);
        });
    } else {
        map.removeLayer(layer);
    }
};

export const addLayers = (layer: TileLayer<XYZ>[] | TileLayer<XYZ> | null, map: Map) => {
    if (!layer) return;

    if (Array.isArray(layer)) {
        layer.forEach((item) => {
            map.addLayer(item);
        });
    } else {
        map.addLayer(layer);
    }
};

export const setLayersIndex = (layer: TileLayer<XYZ>[] | TileLayer<XYZ> | null, initialIndex: number = 0) => {
    if (!layer) return;
    if (Array.isArray(layer)) {
        layer.forEach((item, itemIndex) => {
            item.setZIndex(itemIndex + initialIndex);
        });
    } else {
        layer?.setZIndex(initialIndex);
    }
};

export const setProjection = () => {
    const projection = '+proj=merc +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs +type=crs';
    proj4.defs('EPSG:3395', projection);
    register(proj4);
    olProj.get('EPSG:3395')?.setExtent(
        [-20037508.342789244, -20037508.342789244, 20037508.342789244, 20037508.342789244],
    );
};
