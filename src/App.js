import {Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';
import shop from "./components/pages/shop/Shop"
import SingleProduct from "./components/singleProduct/SingleProduct"
import './App.scss';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path ="/" component={HomePage}/>
        <Route path="/shop" component={shop} />
        <Route path="/product/:id" component={SingleProduct}/>
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
