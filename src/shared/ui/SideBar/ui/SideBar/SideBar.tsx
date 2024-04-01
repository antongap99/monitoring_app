import cn from 'classnames';
import { ReactNode, useState } from 'react';
import CollapseIcon from 'shared/assets/icons/collapseSvg.svg?react';
import style from './SideBar.module.css';

interface SideBarProps {
    className?: string,
    children: ReactNode
}

export function SideBar({ className, children }: SideBarProps) {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = (): void => {
        setCollapsed(!collapsed);
    };

    return (
        <div
            data-testid="sidebar"
            className={cn(style.SideBar, { [style.collapsed]: collapsed }, className)}
        >
            <button type="button" className={style.collapseBtn} onClick={toggleCollapsed}>
                <CollapseIcon />
            </button>
            <div className={cn(style.SideBarContent, { [style.SideBarContentHide]: collapsed })}>
                {children}
            </div>
        </div>
    );
}
