import cn from 'classnames';
import style from './TracksPage.module.css';

interface TracksPageProps {
    className?: string;
}

function TracksPage({ className }: TracksPageProps) {
    return (
        <div className={cn(style.TracksPage, className)}>
            TracksPage
        </div>
    );
}

export default TracksPage;
