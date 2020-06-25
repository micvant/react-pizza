import React from 'react';
import { Header } from './components';
import { Route } from 'react-router-dom';
import { Cart, Home } from './pages';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div class="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </div>
    </div>
  );
}

export default App;
