import cn from 'classnames';
import style from './ReportsPage.module.css';

interface ReportsPageProps {
    className?: string;
}

function ReportsPage({ className }: ReportsPageProps) {
    return (
        <div className={cn(style.ReportsPage, className)}>
            ReportsPage
        </div>
    );
}

export default ReportsPage;
