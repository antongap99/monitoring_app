import cn from 'classnames';
import style from './PageError.module.css';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={cn(style.PageError, className)}>
            <p>Произошла непредвиденная ошибка</p>
            <button type="button" onClick={reloadPage}>
                Обновить страницу
            </button>
        </div>
    );
};
