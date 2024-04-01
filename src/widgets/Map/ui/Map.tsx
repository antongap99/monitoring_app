import 'ol/ol.css';
import { useMap } from 'widgets/Map/model/hooks/useMap/useMap.ts';
import { MapConfig } from 'widgets/Map/model/config/mapConfig.ts';
import { LayerControl } from 'features/LayerControl/ui/LayerControl.tsx'; // Импортируем объект View';
import TrafficIcon from 'shared/assets/icons/trafficIcon.svg?react';
import { useMapInteraction } from 'widgets/Map/model/hooks/useMapInteraction/useMapInteraction.ts';
import { mockTrackData } from 'widgets/Map/model/config/mockTrackData.ts';

import { TrafficControl } from 'features/TrafficControl';
import { LayerMapIds, layersControlData } from 'widgets/Map/model/config/LayersData.ts';
import { useMemo } from 'react';
import { ZoomControl } from 'features/ZoomControl/ui/ZoomControl.tsx';
import style from './Map.module.css';

export const MapComponent = () => {
    const {
        map,
        mapRef,
        showTraffic,
        setShowTraffic,
        selectedLayerId,
        setSelectedLayerId,
        zoom,
        setZoom,
    } = useMap(MapConfig);

    useMapInteraction(map, MapConfig.focusObjects, MapConfig.geoZones, [mockTrackData]);

    const showTrafficControl = useMemo(() => {
        return selectedLayerId === LayerMapIds.YandexMap
            || selectedLayerId === LayerMapIds.YandexSat
            || selectedLayerId === LayerMapIds.YandexHybrid;
    }, [selectedLayerId]);

    return (
        <div className={style.MapWrapper}>
            <ZoomControl setZoom={setZoom} zoom={zoom} />
            <LayerControl
                layers={layersControlData}
                selectedLayer={selectedLayerId}
                onLayerToggle={setSelectedLayerId}
            />
            {
                showTrafficControl && (
                    <TrafficControl showTraffic={showTraffic} addTraffic={setShowTraffic}>
                        <TrafficIcon />
                    </TrafficControl>
                )
            }
            <div ref={mapRef} className={style.Map} />
        </div>
    );
};
