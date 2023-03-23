import {Routes, Route} from 'react-router-dom';
//Pages Components
import Main from './pages/Main';
import Currencies from './pages/Currencies';
import Price from './pages/Price';
//import navbar
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/currencies' element={<Currencies />} />
        {/* create parameter by using ":" */}
        <Route path='/price/:symbol' element={<Price />} />
      </Routes>
    </div>
  );
}
export default App;


