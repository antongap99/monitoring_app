import cn from 'classnames';
import style from './MonitoringPage.module.css';

interface MonitoringPageProps {
    className?: string;
}

function MonitoringPage({ className }: MonitoringPageProps) {
    return (
        <div className={cn(style.MonitoringPage, className)}>
            MonitoringPage
        </div>
    );
}

export default MonitoringPage;
