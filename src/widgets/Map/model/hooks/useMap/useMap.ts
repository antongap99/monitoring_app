import Map from 'ol/Map';
import View from 'ol/View';
import { useEffect, useRef, useState } from 'react';
import { LayerMapIds, layersData } from 'widgets/Map/model/config/LayersData.ts';
import { MapProps } from 'widgets/Map/model/types/types.ts';
import { createGeoLayer } from 'widgets/Map/model/hooks/useMap/helpers/geoLayer.ts';
import TileLayer from 'ol/layer/Tile';
import { XYZ } from 'ol/source';
import {
    addLayers, removeLayers, setLayersIndex, setProjection,
} from 'widgets/Map/model/hooks/useMap/helpers/utils.ts';
import { ZoomToExtent, defaults as defaultControls, Zoom } from 'ol/control';
import { easeOut } from 'ol/easing';

setProjection();

const defaultLayerId = LayerMapIds.YandexMap;

export const useMap = (props: MapProps) => {
    const { viewOptions } = props;
    const mapRef = useRef<HTMLDivElement | null>(null);
    // const [allLayers, setAllLayers] = useState<TileLayer<XYZ>[]>([]);
    const [selectedLayer, setSelectedLayer] = useState<TileLayer<XYZ>[] | TileLayer<XYZ> | null>(null);
    const [selectedLayerId, setSelectedLayerId] = useState<LayerMapIds>(defaultLayerId);
    const [showTraffic, setShowTraffic] = useState<boolean>(false);
    const [map, setMap] = useState<Map | null>(null);
    const [trafficLayer, setTrafficLayer] = useState<TileLayer<XYZ>[] | TileLayer<XYZ> | null>(null);
    const [zoom, setZoom] = useState<number>(props.viewOptions.zoom || 1);

    useEffect(() => {
        if (!mapRef.current) return;

        defaultControls().clear();
        const newMap = new Map({
            target: mapRef.current,
            layers: [],
            view: new View({
                center: props.viewOptions.center,
                zoom: props.viewOptions.zoom,
            }),
        });

        newMap.getControls().clear();

        const defaultLayer = layersData.find((layer) => layer.id === defaultLayerId);
        if (defaultLayer) {
            const tileLayer = createGeoLayer(defaultLayer);

            setSelectedLayer(tileLayer);
            addLayers(tileLayer, newMap);
        }

        setMap(newMap);

        return () => {
            newMap.setTarget(undefined);
        };
    }, [props.viewOptions.center, props.viewOptions.zoom, viewOptions]);

    useEffect(() => {
        if (!map) return;
        const trafficLayerData = layersData.find((layer) => layer.id === LayerMapIds.YandexTraffic);

        if (showTraffic && trafficLayerData) {
            const newTrafficLayer = createGeoLayer(trafficLayerData);
            if (Array.isArray(newTrafficLayer)) {
                newTrafficLayer.forEach((layer) => {
                    layer.setOpacity(0.5);
                });
            } else {
                newTrafficLayer.setOpacity(0.5);
            }
            setTrafficLayer(newTrafficLayer);
            addLayers(newTrafficLayer, map);
        } else if (trafficLayer) {
            removeLayers(trafficLayer, map);
            setTrafficLayer(null);
        }
    }, [showTraffic]);

    useEffect(() => {
        if (!map) return;

        if (selectedLayer) {
            removeLayers(selectedLayer, map);
        }

        const layerData = layersData.find((layer) => layer.id === selectedLayerId);
        if (layerData) {
            const newLayer = createGeoLayer(layerData);

            setLayersIndex(newLayer, 0);
            setSelectedLayer(newLayer);
            addLayers(newLayer, map);
            if (
                layerData.id !== LayerMapIds.YandexMap
                && layerData.id !== LayerMapIds.YandexHybrid
                && layerData.id !== LayerMapIds.YandexSat
            ) {
                setShowTraffic(false);
            }
        }
    }, [selectedLayerId]);

    useEffect(() => {
        if (!map) return;
        const animateZoom = (targetZoom: number, duration: number) => {
            const view = map.getView();
            const currentZoom = view.getZoom();
            if (!currentZoom) return;
            const start = Date.now();
            const zoomChange = targetZoom - currentZoom;

            const pan = () => {
                const now = Date.now();
                const elapsedTime = now - start;
                const progress = Math.min(elapsedTime / duration, 1);
                const easedProgress = easeOut(progress);
                view.setZoom(currentZoom + zoomChange * easedProgress);

                if (progress < 1) {
                    requestAnimationFrame(pan);
                }
            };

            pan();
        };

        animateZoom(zoom, 500);
    }, [zoom]);

    return {
        mapRef,
        layersData,
        selectedLayer,
        setSelectedLayer,
        map,
        setShowTraffic,
        showTraffic,
        selectedLayerId,
        setSelectedLayerId,
        zoom,
        setZoom,
    };
};
