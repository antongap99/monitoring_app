import cn from 'classnames';
import style from './DriversPage.module.css';

interface DriversPageProps {
    className?: string;
}

function DriversPage({ className }: DriversPageProps) {
    return (
        <div className={cn(style.DriversPage, className)}>
            DriversPage
        </div>
    );
}

export default DriversPage;
