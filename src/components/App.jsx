import './App.css';
import Navbar from './Nabvar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemCount from './ItemCount/ItemCount';

function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"Bienvendio a la tienda de videojuegos NintenShop!!"}/>
      <ItemCount/>
    </>
  );
}

export default App;
