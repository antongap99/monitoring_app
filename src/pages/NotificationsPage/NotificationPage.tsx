import cn from 'classnames';
import style from './NotificationPage.module.css';

interface NotificationPageProps {
    className?: string;
}

function NotificationPage({ className }: NotificationPageProps) {
    return (
        <div className={cn(style.NotificationPage, className)}>
            NotificationPage
        </div>
    );
}

export default NotificationPage;
