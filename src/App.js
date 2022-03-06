import './App.css';
import styled from 'styled-components';
import Home from './Components/Home';
import Products from './Products';
import ProductDetails from './Components/ProductDetails';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <AppFrame className="App">
      <BrowserRouter basename='/'>
        <Navbar/>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <Home {...props} />}
          ></Route>
          <Route
            path="/products"
            render={(props) => <Products {...props} />}
          ></Route>
          <Route
            path="/productDetails/:name"
            render={(props) => <ProductDetails {...props} />}
          ></Route>
          <Route exact render={() => <h1>Page not found!</h1>}></Route>
        </Switch>
      </BrowserRouter>
    </AppFrame>
  );
}

export default App;

const AppFrame = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;