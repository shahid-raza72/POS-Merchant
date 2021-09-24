import 'bootstrap/dist/css/bootstrap.css'
import { Header } from './components/Header';
import ProductListScreen from './screens/ProductListScreen';

function App() {
  return (
    <div className="App">
     <Header/>
     <ProductListScreen/>
    </div>
  );
}

export default App;
