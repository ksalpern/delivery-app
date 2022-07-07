import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import ShopsComponent from './components/ShopsComponent/ShopsComponent';
import CreateItem from './components/CreateItem/CreateItem';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import { useStateValue } from './context/StateProvider';
import { getAllProductItems } from './utils/firebaseFunctions';
import { useEffect } from 'react';
import { actionType } from './context/reducer';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';


function App(store) {

  const [{ productItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllProductItems().then((data) => {
      dispatch({
        type: actionType.SET_PRODUCT_ITEMS,
        productItems: data,
      });
    });
  };


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<ShopsComponent store={store} />} />
        <Route path='/createItem' element={<CreateItem />} />
        <Route path='/shoppingCart' element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
}

export default App;
