import './App.css';
import ShopCartContextCard from './components/ShopCardContext/ShopCartContextCard';
import ShopCartReduxCard from './components/ShopCardRedux/ShopCartReduxCard';
import ShopContextProvider from './store/context/shopContextProvider';
import ShopCartReduxProvider from './store/redux/provider';

function App() {
  return (
    <ShopCartReduxProvider>
      <ShopContextProvider>
        <div className="app-container">
          {/*  */}
          <ShopCartContextCard />
          {/*  */}
          <ShopCartReduxCard />
        </div>
      </ShopContextProvider>
    </ShopCartReduxProvider>
  );
}

export default App;
