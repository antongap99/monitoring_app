import cn from 'classnames';
import style from './TasksPage.module.css';

interface TasksPageProps {
    className?: string;
}

function TasksPage({ className }: TasksPageProps) {
    return (
        <div className={cn(style.TasksPage, className)}>
            TasksPage
        </div>
    );
}

export default TasksPage;
