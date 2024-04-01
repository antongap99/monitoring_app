import cn from 'classnames';
import style from './UsersPage.module.css';

interface UsersPageProps {
    className?: string;
}

function UsersPage({ className }: UsersPageProps) {
    return (
        <div className={cn(style.UsersPage, className)}>
            UsersPage
        </div>
    );
}

export default UsersPage;
