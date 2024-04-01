import { FC, Dispatch, SetStateAction } from 'react';
import { LayerMapIds } from 'widgets/Map/model/config/LayersData.ts';
import type { LayerData } from '../model/types/types.ts';

export interface LayerProps {
    layer: LayerData,
    selectedLayer: LayerMapIds
    onLayerToggle: Dispatch<SetStateAction<LayerMapIds>>
}

const Layer: FC<LayerProps> = ({ layer, selectedLayer, onLayerToggle }) => {
    return (
        <div key={layer.id}>
            <input
                type="checkbox"
                id={layer.id}
                checked={selectedLayer === layer.id}
                onChange={() => onLayerToggle(layer.id)}
            />
            <label htmlFor={layer.id}>{layer.name}</label>
        </div>
    );
};

export default Layer;
