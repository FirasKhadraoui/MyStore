import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';

const Products = React.lazy(() => import("./Products"));
const Navbar = React.lazy(() => import("./Components/Navbar"));
const ProductDetails = React.lazy(() => import("./Components/ProductDetails"));
const Home = React.lazy(() => import("./Components/Home"));


function App() {
  return (
    <AppFrame className="App">
      <BrowserRouter basename='/'>
        <Suspense fallback={<p>...Loading page please wait</p>}>
          <Navbar />
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
        </Suspense>
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