import cn from 'classnames';
import style from './DashBoardPage.module.css';

interface LoginPageProps {
    className?: string;
}

function DashBoardPage({ className }: LoginPageProps) {
    return (
        <div className={cn(style.DashBoardPage, className)}>
            DashBoard
        </div>
    );
}

export default DashBoardPage;
