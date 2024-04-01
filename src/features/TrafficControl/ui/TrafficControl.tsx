import {
    Dispatch, ReactNode, SetStateAction, useEffect, useState,
} from 'react';
import style from './TrafficControl.module.css';

interface TrafficControlProps {
    children?: ReactNode,
    addTraffic: Dispatch<SetStateAction<boolean>>,
    showTraffic: boolean,
}

const TrafficControl = ({ children, addTraffic, showTraffic } :TrafficControlProps) => {
    const [checked, setChecked] = useState<boolean>(showTraffic);

    const onChangeHandler = () => {
        setChecked(!checked);
    };

    useEffect(() => {
        addTraffic(checked);
    }, [addTraffic, checked]);

    return (
        <div className={style.trafficControlWrapper}>
            <div className={style.trafficControl}>
                <input
                    type="checkbox"
                    id="traffic"
                    checked={checked}
                    onChange={onChangeHandler}
                    className={style.TrafficCheckBox}
                />
                <label htmlFor="traffic">
                    {
                        children
                            ? (
                                <div className={style.trafficIcon}>{children}</div>
                            )
                            : 'Трафик'
                    }
                </label>
            </div>
        </div>
    );
};

export default TrafficControl;
