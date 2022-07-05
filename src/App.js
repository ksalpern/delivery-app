import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import ShopsComponent from './components/ShopsComponent/ShopsComponent';

function App(store) {
  return (
   <div>
    <Header/>
    <Products store={store}/>
    <ShopsComponent/>
   </div>
  );
}

export default App;
