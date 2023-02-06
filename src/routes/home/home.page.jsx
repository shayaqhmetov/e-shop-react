import { Outlet } from 'react-router-dom';
import Categories from '../../components/categories/categories.components';

const HomePage = () => {
    return (
        <div>
            <Outlet />
            <Categories />
        </div>
    );
};

export default HomePage;