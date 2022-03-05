import './App.css';
import Product from './Components/Product';
import products from './products.json';
import styled from 'styled-components';

function App() {
  return (
    <AppFrame className="App">
      {
        products.map((product,index)=>(
          <Product product={product} key={index}/>
        ))
      }
    </AppFrame>
  );
}

export default App;

const AppFrame = styled.div`
  text-align: center;
  display: flex;
`;