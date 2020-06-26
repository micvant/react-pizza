import React from 'react';
import { Header } from './components';
import { Route } from 'react-router-dom';
import { Cart, Home } from './pages';
import axios from 'axios';

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    // Либа для запросов к API
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzas(data.pizzas);
    });
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path="/" render={() => <Home items={pizzas} />} />
          <Route exact path="/cart" component={Cart} />{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
}

export default App;
