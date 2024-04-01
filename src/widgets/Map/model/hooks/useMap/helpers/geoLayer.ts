import TileLayer from 'ol/layer/Tile';
import { XYZ } from 'ol/source';
import { LayerData } from 'Entities/LayerItem/model/types/types.ts';

export const createGeoLayer = (layer: LayerData) => {
    if (layer.templates.length > 1) {
        const tiles: TileLayer<XYZ>[] = [];

        for (let i = 0; i < layer.templates.length; i++) {
            const newLayer = new TileLayer({
                source: new XYZ({
                    url: layer.templates[i],
                    crossOrigin: 'anonymous',
                    projection: layer.crs || 'EPSG:3857',
                }),
            });

            newLayer.setZIndex(layer.zIndex + i);
            tiles.push(newLayer);
        }

        return tiles;
    }

    const newLayer = new TileLayer({
        source: new XYZ({
            url: layer.templates[0],
            crossOrigin: 'anonymous',
            projection: layer.crs || 'EPSG:3857',
        }),
    });
    newLayer.setZIndex(layer.zIndex);

    return newLayer;
};
