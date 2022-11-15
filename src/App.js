 import Header from './Component/Header';
import './App.css';
import Home from './Component/Home';
import Footer from './Component/Footer';
 import {Route, Routes} from 'react-router-dom'
import Place from './Component/Place';
 

function App() {
  return (
    <>
    <Header />
    <Routes  >
       <Route  path='/' element={<Home />}/>
       <Route path='/Place' element={<Place/>}/>
     </Routes>
       <Footer />
    </>
  );
}

export default App;
