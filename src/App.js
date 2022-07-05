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


function App(store) {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={ <Products store={store}/> } />
      <Route path='/createItem' element={ <CreateItem /> } />
    </Routes>
  
    <ShopsComponent/>
   </Router>
  );
}

export default App;
