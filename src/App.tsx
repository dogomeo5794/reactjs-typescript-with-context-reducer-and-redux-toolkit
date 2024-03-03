import React from 'react';
import './App.css';
import ShopCartContextCard from './components/ShopCardContext/ShopCartContextCard';
import ShopCartReduxCard from './components/ShopCardRedux/ShopCartReduxCard';
import ShopCartContextProvider from './store/context/shopCartContextProvider';
import ShopCartReduxProvider from './store/redux/provider';

function App() {
  return (
    <ShopCartReduxProvider>
      <ShopCartContextProvider>
        <div className="app-container">
          {/*  */}
          <ShopCartContextCard />
          {/*  */}
          <ShopCartReduxCard />
        </div>
      </ShopCartContextProvider>
    </ShopCartReduxProvider>
  );
}

export default App;
