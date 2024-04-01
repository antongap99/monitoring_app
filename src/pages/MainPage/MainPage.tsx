import { Counter } from 'features/Counter';
import style from './MainPage.module.css';

const MainPage = () => (
    <div className={style.MainPage}>
        MainPage
        <div>
            <Counter />
        </div>
    </div>
);

export default MainPage;
