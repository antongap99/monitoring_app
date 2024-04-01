import { LayerMapIds } from 'widgets/Map/model/config/LayersData.ts';

export interface LayerData {
    id: LayerMapIds,
    name: string,
    crs: null | string,
    templates: string[],
    zIndex: number
}
