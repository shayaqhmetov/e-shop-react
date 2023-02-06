import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavigationPage from './routes/navigation/navigation.page';
import HomePage from './routes/home/home.page';
import SignInPage from './routes/sign-in/sign-in.page';


const Shop = () => {
  return "This is our shop"
}

const App = () => {
  return (
    <Routes>
      <Route path='' element={<NavigationPage />}>
        <Route path='/' element={<HomePage />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/sign-in' element={<SignInPage />}/>
      </Route>
    </Routes>
  );
}

export default App;
