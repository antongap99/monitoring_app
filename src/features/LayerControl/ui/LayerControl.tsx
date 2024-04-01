import { FC, useEffect, useState } from 'react';
import { LayerData } from 'Entities/LayerItem/model/types/types';
import Layer, { LayerProps } from 'Entities/LayerItem/ui/Layer.tsx';
import LayersIcon from 'shared/assets/icons/LayersIcon.svg?react';
import cn from 'classnames';
import style from './LayerControl.module.css';

export interface LayerControlProps extends Omit<LayerProps, 'layer'>{
    layers: LayerData[]
}

export const LayerControl: FC<LayerControlProps> = ({ layers, selectedLayer, onLayerToggle }) => {
    const [showList, setShowList] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLDivElement | null;
            if (
                target && target.closest('.layerSelect')
            ) {
                setShowList(true);
            } else if (target && !target.closest('.layerList')) {
                setShowList(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className={style.LayerControlWrapper}>
            <div className={style.LayerControl}>
                <div className={cn(style.layerSelect)}>
                    <div className={cn(style.layerSelectedIcon, 'layerSelect')}>
                        <LayersIcon />
                    </div>
                </div>
                <div
                    className={cn(style.LayerControlList, { [style.LayerControlListShown]: showList }, 'layerList')}
                >
                    {layers.map((layer) => (
                        <div key={layer.id} className={style.LayerItem}>
                            <Layer
                                layer={layer}
                                onLayerToggle={onLayerToggle}
                                selectedLayer={selectedLayer}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
