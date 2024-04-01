import cn from 'classnames';
import ZoomUp from 'shared/assets/icons/ZoomUp.svg?react';
import ZoomDown from 'shared/assets/icons/ZoomDown.svg?react';
import { Button, ThemeBottom } from 'shared/ui/Button/Button.tsx';
import { Dispatch, SetStateAction } from 'react';
import style from './ZoomControl.module.css';
import { MAX_ZOOM_LEVEL, MIN_ZOOM_LEVEL } from '../model/const.ts';

interface ZoomControlProps {
    setZoom: Dispatch<SetStateAction<number>>,
    zoom: number
}

export const ZoomControl = ({ setZoom, zoom }: ZoomControlProps) => {
    const increaseZoom = () => {
        if (zoom >= MAX_ZOOM_LEVEL) return;
        setZoom((prevZoom) => prevZoom + 1);
    };

    const decreaseZoom = () => {
        if (zoom <= MIN_ZOOM_LEVEL) return;
        setZoom((prevZoom) => prevZoom - 1);
    };

    return (
        <div className={style.ControlWrapper}>
            <div className={style.Control}>
                <Button theme={ThemeBottom.CLEAR} onClick={increaseZoom}>
                    <ZoomUp />
                </Button>
                <Button theme={ThemeBottom.CLEAR} onClick={decreaseZoom}>
                    <ZoomDown />
                </Button>
            </div>
        </div>
    );
};
