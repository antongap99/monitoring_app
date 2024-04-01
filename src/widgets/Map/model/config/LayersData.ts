import { LayerData } from 'Entities/LayerItem/model/types/types.ts';

export enum LayerMapIds {
    OSM = 'OSM',
    YandexMap = 'YandexMap',
    YandexSat = 'Yandex (Спутник)',
    YandexHybrid = 'Yandex (Гибрид)',
    YandexTraffic = 'Yandex (Пробки)',
    Google = 'Google(Карта)',
    GoogleHybrid = 'Google (Гибрид)',
    GoogleRelief = 'Google (Рельеф)',
    GoogleSat = 'Google (Спутник)',
    GIS = '2GIS',
}

export const layersData: LayerData[] = [
    {
        id: LayerMapIds.OSM,
        name: 'OpenStreetMap',
        crs: null,
        templates: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
        zIndex: 0,
    },
    {
        id: LayerMapIds.YandexMap,
        name: 'Yandex (Карта)',
        crs: null,
        templates: ['https://core-renderer-tiles.maps.yandex.net/tiles?l=map&v=21.06.04-0-b210520094930&x={x}&y={y}&z={z}&scale=1&projection=web_mercator&lang='.concat('ru')],
        zIndex: 0,
    },
    {
        id: LayerMapIds.YandexSat,
        name: 'Yandex (Спутник)',
        crs: 'EPSG:3395',
        templates: ['https://core-sat.maps.yandex.net/tiles?l=sat&v=3.787.0&x={x}&y={y}&z={z}&lang='.concat('ru')],
        zIndex: 0,
    },
    {
        id: LayerMapIds.YandexHybrid,
        name: 'Yandex (Гибрид)',
        crs: 'EPSG:3395',
        // crs: null,
        templates: [
            'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.787.0&x={x}&y={y}&z={z}&projection=wgs84_mercator&lang='.concat('ru'),
            'https://core-renderer-tiles.maps.yandex.net/tiles?l=skl&v=21.06.04-0-b210520094930&x={x}&y={y}&z={z}&projection=wgs84_mercator&scale=1&lang='.concat('ru'),
        ],
        zIndex: 1,
    },
    {
        id: LayerMapIds.YandexTraffic,
        name: 'Yandex (Пробки)',
        // crs: 'EPSG:3395',
        crs: null,
        templates: [
            // 'https://core-renderer-tiles.maps.yandex.net/tiles?l=map&v=21.06.04-0-b210520094930&x={x}&y={y}&z={z}&projection=web_mercator&scale=1&lang='.concat('ru'),
            'https://core-jams-rdr-cache.maps.yandex.net/1.1/tiles?trf&l=trf&projection=web_mercator&lang='.concat('ru', '&x={x}&y={y}&z={z}&scale=1'),
        ],
        zIndex: 2,
    },
    {
        id: LayerMapIds.Google,
        name: 'Google(Карта)',
        crs: null,
        templates: ['https://mt1.google.com/vt/lyrs=m@169000000&hl='.concat('ru', '&x={x}&y={y}&z={z}')],
        zIndex: 0,
    },
    {
        id: LayerMapIds.GoogleHybrid,
        name: 'Google (Гибрид)',
        crs: null,
        templates: ['https://mt1.google.com/vt/lyrs=s,h@169000000&hl='.concat('ru', '&x={x}&y={y}&z={z}')],
        zIndex: 0,
    },
    {
        id: LayerMapIds.GoogleRelief,
        name: 'Google (Рельеф)',
        crs: null,
        templates: ['https://mt1.google.com/vt/lyrs=t@130,r@206000000&hl='.concat('ru', '&x={x}&y={y}&z={z}')],
        zIndex: 0,
    },
    {
        id: LayerMapIds.GoogleSat,
        name: 'Google (Спутник)',
        crs: null,
        templates: ['https://mt1.google.com/vt/lyrs=s@169000000&hl='.concat('ru', '&x={x}&y={y}&z={z}')],
        zIndex: 0,
    },
    {
        id: LayerMapIds.GIS,
        name: '2GIS',
        crs: null,
        templates: ['https://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1&ts=online_sd'],
        zIndex: 0,
    },
];

export const layersControlData: LayerData[] = layersData.filter((layer) => layer.id !== LayerMapIds.YandexTraffic);
