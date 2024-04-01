import cn from 'classnames';
import style from './GeoZonesPage.module.css';

interface GeoZonesPageProps {
    className?: string;
}

function GeoZonesPage({ className }: GeoZonesPageProps) {
    return (
        <div className={cn(style.GeoZonesPage, className)}>
            GeoZonesPage
        </div>
    );
}

export default GeoZonesPage;
