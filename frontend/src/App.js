import React from 'react';
import Data from './Data';
import Product from './components/Product';

function App() {
  return (
    <div className = "grid-container">
    <header className = 'row'>
        <div>
            <a className = 'brand' href = "/">amazona</a>
        </div>
        <div>
            <a href = "/cart">cart</a>
            <a href = "/signin">Sign in</a>
        </div>
    </header>
    <main>
         <div className = "row center">
           {
             Data.products.map(product =>(
               <Product key={product._id} product={product}></Product>
             ))
           }
               
          </div>
    </main>
    <footer className="row center">
        All right reserved
    </footer>
</div>
  );
}

export default App;
