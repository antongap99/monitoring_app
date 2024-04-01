import cn from 'classnames';
import { AppRouter } from 'app/providers/router';
import { Map } from 'widgets/Map';
import { SideBar } from 'shared/ui/SideBar';
import 'app/styles/global.css';
import { Header } from 'widgets/Header';

const App = () => {
    return (
        <div className={cn('app')}>
            <Header />
            <div className="content-page">
                <SideBar>
                    <AppRouter />
                </SideBar>
                <Map />
            </div>
        </div>
    );
};
    // const value = useAppSelector((state) => state.CounterReducer.value);

export default App;
