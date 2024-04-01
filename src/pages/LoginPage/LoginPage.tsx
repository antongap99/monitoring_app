import cn from 'classnames';
import style from './LoginPage.module.css';

interface LoginPageProps {
    className?: string;
}

function LoginPage({ className }: LoginPageProps) {
    return (
        <div className={cn(style.LoginPage, className)}>
            <div className={style.LoginContent}>
                <form className={style.LoginForm}>
                    <label htmlFor="login">Логин</label>
                    <input id="login" type="text" placeholder="Логин" />
                    <label htmlFor="password">Пароль</label>
                    <input id="password" type="password" placeholder="Пароль" />
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
