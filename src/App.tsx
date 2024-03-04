import './App.css';
import ShopCartContextCard from './components/ShopCardContext/ShopCartContextCard';
import ShopCartReduxCard from './components/ShopCardRedux/ShopCartReduxCard';

function App() {
  return (
    <div className="app-container">
      {/*  */}
      <ShopCartContextCard />
      {/*  */}
      <ShopCartReduxCard />
    </div>
  );
}

export default App;
