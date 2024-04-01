import cn from 'classnames';
import style from './PageLoader.module.css';

interface PageLoaderProps {
    className?: string;

}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={cn(style.PageLoader, className)} />
);
