import cn from 'classnames';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import style from './Button.module.css';

export enum ThemeBottom {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeBottom
    children: ReactNode,
    clickCb?: () => void
}
export const Button = (props: ButtonProps) => {
    const {
        theme, className, children, clickCb, ...otherProps
    } = props;

    const buttonTheme = theme && style[theme];
    return (
        <button
            type="button"
            className={cn(style.Button, buttonTheme, className, 'button_style')}
            onClick={clickCb}
            {...otherProps}
        >
            {children}
        </button>
    );
};
